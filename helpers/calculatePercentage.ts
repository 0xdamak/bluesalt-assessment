export function calculatePercentage(value: number, data: number[]): number {
  const total = data.reduce((acc, current) => acc + current, 0);
  if (total === 0) {
    return 0;
  }
  const percentage = (value / total) * 100;
  return percentage;
}
