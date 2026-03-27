import { getMetafieldValue } from '@/lib/cosmic'
import type { Review } from '@/types'

export default function ReviewCard({ review }: { review: Review }) {
  const rating = getMetafieldValue(review.metadata?.rating)

  return (
    <article className="border border-gray-200 rounded-xl p-4">
      <p className="text-sm text-gray-500 mb-2">{review.metadata?.product?.title}</p>
      <h3 className="font-medium">{review.metadata?.reviewer_name}</h3>
      <p className="text-sm text-gray-700 mt-2">{review.metadata?.review_text}</p>
      <div className="flex items-center gap-2 mt-3">
        <span className="text-sm font-medium">Rating:</span>
        <span className="text-sm text-gray-700">{rating || '—'}</span>
      </div>
      {review.metadata?.verified_purchase && (
        <span className="inline-flex mt-3 text-xs text-green-700 bg-green-100 px-2 py-1 rounded-full">
          Verified Purchase
        </span>
      )}
    </article>
  )
}