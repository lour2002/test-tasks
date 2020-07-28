export function getDiffInPercent(first, second) {
  return `${(((first - second) / second) * 100).toFixed(2)} %`;
}
