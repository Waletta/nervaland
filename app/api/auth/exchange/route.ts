import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { token_temp_auth } = body;

    const backendRes = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL + '/auth/exchange', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token_temp_auth }),
    });

    if (!backendRes.ok) {
      return NextResponse.json({ detail: 'Invalid or expired code' }, { status: 401 });
    }

    const data = await backendRes.json();
    const accessToken = data.access_token;

    const response = NextResponse.json({ success: true });
    
    response.cookies.set({
      name: 'access_token',
      value: accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days (match your token lifetime)
    });

    return response;
  } catch (error) {
    return NextResponse.json({ detail: 'Exchange failed' }, { status: 500 });
  }
}