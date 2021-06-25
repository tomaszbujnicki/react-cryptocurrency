import settings from '../data/settings';

export function formatNumber(amount, minDigits = 0, maxDigits = 8) {
  return amount.toLocaleString(settings.language, {
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
  });
}
