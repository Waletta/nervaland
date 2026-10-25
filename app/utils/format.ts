export const formatTime = (seconds: number) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
};

export const getInitials = (name?: string) => {
  if (!name) return '';

  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map(word => word[0])
    .join('')
    .toUpperCase();
};


export const formatDateTime = (value: string) => {
  return new Date(value).toLocaleString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};


export const extractErrorMessage = (
  error: any,
  defaultMessage: string = 'An unexpected error occurred'
): string => {
  const detail = error?.response?.data?.detail;
  if (typeof detail === 'string') { return detail; }
  if (typeof error?.message === 'string') {
    return error.message;
  }
  return defaultMessage;
};