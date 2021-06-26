import settings from '../data/settings';

export function formatNumber(amount, minDigits = 0, maxDigits = 8) {
  return new Intl.NumberFormat(settings.language, {
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
  }).format(amount);
}

export function formatCurrency(amount, minDigits = 0, maxDigits = 8) {
  return new Intl.NumberFormat(settings.language, {
    minimumFractionDigits: minDigits,
    maximumFractionDigits: maxDigits,
    currency: settings.currency,
    style: 'currency',
  }).format(amount);
}

export function formatCompactNumber(amount) {
  return new Intl.NumberFormat(settings.language, {
    notation: 'compact',
  }).format(amount);
}

export const getCurrencySymbol = () =>
  (0)
    .toLocaleString(settings.language, {
      style: 'currency',
      currency: settings.currency,
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .replace(/\d/g, '')
    .trim();

const short = (date) =>
  new Intl.DateTimeFormat(settings.language, {
    day: 'numeric',
    month: 'short',
  }).format(date);

const long = (date) =>
  new Intl.DateTimeFormat(settings.language, {
    dateStyle: 'short',
    timeStyle: 'long',
  }).format(date);

export const formatDate = {
  short,
  long,
};
