// app/products/[slug]/page.tsx
import { notFound } from 'next/navigation'
import { getProductBySlug, getReviewsByProduct } from '@/lib/cosmic'
import { formatPrice } from '@/lib/utils'
import ReviewCard from '@/components/ReviewCard'
import type { Review } from '@/types'

export default async function ProductDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    return notFound()
  }

  const reviews = await getReviewsByProduct(product.id)
  const images = product.metadata?.images ?? []
  const firstImage = images[0]

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          {firstImage ? (
            <img
              src={`${firstImage.imgix_url}?w=1200&h=1400&fit=crop&auto=format,compress`}
              alt={product.title}
              width={600}
              height={700}
              className="w-full h-auto rounded-xl"
            />
          ) : (
            <div className="bg-gray-100 rounded-xl h-[420px]" />
          )}
          <div className="grid grid-cols-2 gap-4">
            {images.slice(1).map((image) => (
              <img
                key={image.url}
                src={`${image.imgix_url}?w=600&h=700&fit=crop&auto=format,compress`}
                alt={product.title}
                width={300}
                height={350}
                className="w-full h-auto rounded-lg"
              />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm text-gray-600">
            {product.metadata?.collection?.title || 'Collection'}
          </p>
          <h1 className="text-3xl font-semibold mt-2">{product.metadata?.product_name || product.title}</h1>
          <p className="text-xl font-medium text-gray-900 mt-4">
            {formatPrice(product.metadata?.price)}
          </p>
          <p className="text-gray-700 mt-6">{product.metadata?.description}</p>

          <div className="mt-8">
            <p className="text-sm font-medium text-gray-700">Available Sizes</p>
            <div className="flex gap-2 mt-2 flex-wrap">
              {(product.metadata?.sizes ?? []).map((size) => (
                <span
                  key={String(size)}
                  className="px-3 py-1 border border-gray-300 rounded-full text-sm"
                >
                  {String(size)}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <span
              className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                product.metadata?.in_stock ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'
              }`}
            >
              {product.metadata?.in_stock ? 'In Stock' : 'Out of Stock'}
            </span>
          </div>
        </div>
      </div>

      <section className="mt-14 border-t border-gray-200 pt-10">
        <h2 className="text-2xl font-semibold mb-6">Customer Reviews</h2>
        {reviews.length === 0 ? (
          <p className="text-gray-600">No reviews yet.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {(reviews as Review[]).map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}