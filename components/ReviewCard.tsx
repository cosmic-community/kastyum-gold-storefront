import { getMetafieldValue } from '@/lib/cosmic'
import type { Review } from '@/types'

export default function ReviewCard({ review }: { review: Review }) {
  const ratingText = getMetafieldValue(review.metadata?.rating)
  const rating = Number(ratingText || '0')
  const stars = Array.from({ length: 5 }, (_, index) => index < rating)

  return (
    <article className="border border-gray-200 rounded-2xl p-5 bg-white">
      <p className="text-xs text-gray-500 mb-2">{review.metadata?.product?.title}</p>
      <h3 className="font-medium">{review.metadata?.reviewer_name}</h3>
      <p className="text-sm text-gray-700 mt-2">{review.metadata?.review_text}</p>
      <div className="flex items-center gap-2 mt-3">
        {/* Changed: Added star rating visualization */}
        <div className="flex items-center gap-1">
          {stars.map((filled, index) => (
            <span key={`star-${index}`} className={filled ? 'text-yellow-500' : 'text-gray-300'}>
              ★
            </span>
          ))}
        </div>
        <span className="text-xs text-gray-500">{ratingText || '—'}</span>
      </div>
      {review.metadata?.verified_purchase && (
        <span className="inline-flex mt-3 text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">
          Verified Purchase
        </span>
      )}
    </article>
  )
}