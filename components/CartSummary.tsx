export default function CartSummary({
  headline = 'Review your items',
  cta = 'Checkout'
}: {
  headline?: string
  cta?: string
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-semibold">{headline}</h2>
      <p className="text-sm text-gray-600 mt-2">Your basket is currently empty.</p>
      <button className="mt-6 bg-gray-900 text-white px-4 py-2 rounded-md text-sm">
        {cta}
      </button>
    </div>
  )
}