export function formatPrice(price?: number): string {
  if (!price) return '$0'
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  }).format(price)
}