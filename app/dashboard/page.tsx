// app/dashboard/page.tsx
'use client';

import {
  Activity,
  ArrowUpRight,
  Clock,
  Coins,
  Cpu,
  DollarSign,
  Hash,
  Search,
  Zap,
} from 'lucide-react';
import { useMemo, useState } from 'react';

type RequestRow = {
  id: string;
  prompt: string;
  model: string;
  time: string;
  latencyMs: number;
  cost: number;
  tokens: number;
  status: 'success' | 'error';
};

const MODELS = [
  'gpt-4o',
  'gpt-4o-mini',
  'claude-3.5-sonnet',
  'claude-3-haiku',
  'llama-3.1-70b',
  'gemini-1.5-pro',
];

const PROMPTS = [
  'Summarize this customer support ticket and suggest a reply',
  'Generate unit tests for the auth module',
  'Translate the onboarding email into Spanish',
  'Extract structured data from this invoice PDF',
  'Write a product description for a wireless charger',
  'Explain this stack trace and propose a fix',
  'Draft a follow-up email for a stalled deal',
  'Classify this review as positive, neutral, or negative',
  'Refactor this function to be more readable',
  'Create a SQL query to find churned users',
];

const DUMMY_REQUESTS: RequestRow[] = Array.from({ length: 24 }).map((_, i) => {
  const model = MODELS[i % MODELS.length];
  const tokens = 320 + ((i * 137) % 4200);
  const latencyMs = 240 + ((i * 311) % 2600);
  const costPer1k = model.includes('mini') || model.includes('haiku') ? 0.0004 : 0.006;
  return {
    id: `req_${(1000 + i).toString(36)}${i}`,
    prompt: PROMPTS[i % PROMPTS.length],
    model,
    time: new Date(Date.now() - i * 1000 * 60 * 7).toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    }),
    latencyMs,
    cost: +(tokens * costPer1k).toFixed(4),
    tokens,
    status: i % 11 === 0 ? 'error' : 'success',
  };
});

function StatCard({
  label,
  value,
  sub,
  icon: Icon,
}: {
  label: string;
  value: string;
  sub: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm text-zinc-500 dark:text-zinc-400">{label}</span>
        <Icon className="w-4 h-4 text-zinc-400" />
      </div>
      <div className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">
        {value}
      </div>
      <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
        <ArrowUpRight className="w-3 h-3 text-emerald-500" />
        {sub}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return DUMMY_REQUESTS;
    return DUMMY_REQUESTS.filter(
      (r) =>
        r.prompt.toLowerCase().includes(q) ||
        r.model.toLowerCase().includes(q) ||
        r.id.toLowerCase().includes(q),
    );
  }, [query]);

  const totals = useMemo(() => {
    return DUMMY_REQUESTS.reduce(
      (acc, r) => {
        acc.cost += r.cost;
        acc.tokens += r.tokens;
        acc.latency += r.latencyMs;
        return acc;
      },
      { cost: 0, tokens: 0, latency: 0 },
    );
  }, []);

  const avgLatency = Math.round(totals.latency / DUMMY_REQUESTS.length);

  return (
    <div className="min-h-screen bg-background">
      <main className="max-w-6xl mx-auto px-4 py-10 sm:py-14">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl sm:text-3xl font-semibold text-zinc-900 dark:text-zinc-100">
              Dashboard
            </h1>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              Monitor your AI requests, models, and spend.
            </p>
          </div>
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search requests or models…"
              className="w-full sm:w-72 pl-9 pr-3 py-2 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 text-sm text-zinc-700 dark:text-zinc-200 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-blue-500/40"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <StatCard
            label="Total requests"
            value={DUMMY_REQUESTS.length.toString()}
            sub="+12% vs last week"
            icon={Activity}
          />
          <StatCard
            label="Total cost"
            value={`$${totals.cost.toFixed(2)}`}
            sub="+4% vs last week"
            icon={DollarSign}
          />
          <StatCard
            label="Tokens used"
            value={totals.tokens.toLocaleString()}
            sub="+8% vs last week"
            icon={Hash}
          />
          <StatCard
            label="Avg latency"
            value={`${avgLatency} ms`}
            sub="-6% vs last week"
            icon={Clock}
          />
        </div>

        {/* Table */}
        <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs uppercase tracking-wide text-zinc-500 dark:text-zinc-400 border-b border-zinc-200 dark:border-zinc-800">
                  <th className="px-5 py-3 font-medium">Request</th>
                  <th className="px-5 py-3 font-medium">Model</th>
                  <th className="px-5 py-3 font-medium">Time</th>
                  <th className="px-5 py-3 font-medium text-right">Tokens</th>
                  <th className="px-5 py-3 font-medium text-right">Cost</th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((r) => (
                  <tr
                    key={r.id}
                    className="border-b last:border-0 border-zinc-100 dark:border-zinc-800/60 hover:bg-zinc-50 dark:hover:bg-zinc-800/40 transition-colors"
                  >
                    <td className="px-5 py-3.5">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            r.status === 'success' ? 'bg-emerald-500' : 'bg-red-500'
                          }`}
                        />
                        <div className="min-w-0">
                          <div className="text-zinc-800 dark:text-zinc-200 truncate max-w-70">
                            {r.prompt}
                          </div>
                          <div className="text-xs text-zinc-400 font-mono">{r.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-5 py-3.5">
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium">
                        <Cpu className="w-3 h-3" />
                        {r.model}
                      </span>
                    </td>
                    <td className="px-5 py-3.5 text-zinc-500 dark:text-zinc-400 whitespace-nowrap">
                      <div>{r.time}</div>
                      <div className="text-xs text-zinc-400 flex items-center gap-1">
                        <Zap className="w-3 h-3" />
                        {r.latencyMs} ms
                      </div>
                    </td>
                    <td className="px-5 py-3.5 text-right text-zinc-700 dark:text-zinc-300 tabular-nums">
                      {r.tokens.toLocaleString()}
                    </td>
                    <td className="px-5 py-3.5 text-right text-zinc-700 dark:text-zinc-300 tabular-nums">
                      <span className="inline-flex items-center gap-1">
                        <Coins className="w-3 h-3 text-zinc-400" />
                        ${r.cost.toFixed(4)}
                      </span>
                    </td>
                  </tr>
                ))}
                {filtered.length === 0 && (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-5 py-12 text-center text-zinc-500 dark:text-zinc-400"
                    >
                      No requests match “{query}”.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <p className="mt-4 text-xs text-zinc-400 text-center">
          Showing {filtered.length} of {DUMMY_REQUESTS.length} requests · dummy data
        </p>
      </main>
    </div>
  );
}