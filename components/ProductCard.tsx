import Link from 'next/link'
import { formatPrice } from '@/lib/utils'
import type { Product } from '@/types'

export default function ProductCard({ product }: { product: Product }) {
  const image = product.metadata?.images?.[0]
  const price = product.metadata?.price ?? 0
  const oldPrice = price ? Math.round(price * 1.2) : null
  const monthly = price ? Math.round(price / 6) : null
  const rating = 4.8
  const reviewsCount = 128

  return (
    <div className="group border border-gray-200 rounded-2xl overflow-hidden bg-white hover:-translate-y-1 hover:shadow-lg transition">
      <div className="relative">
        {/* Changed: Added wishlist and discount badge */}
        {oldPrice ? (
          <span className="absolute left-3 top-3 z-10 bg-gray-900 text-white text-xs px-2 py-1 rounded-full">
            20% off
          </span>
        ) : null}
        <button className="absolute right-3 top-3 z-10 h-8 w-8 rounded-full bg-white border border-gray-200 text-gray-600 text-xs">
          ♥
        </button>
        {image ? (
          <Link href={`/products/${product.slug}`} className="block overflow-hidden">
            <img
              src={`${image.imgix_url}?w=900&h=1100&fit=crop&auto=format,compress`}
              alt={product.title}
              width={450}
              height={550}
              className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
            />
          </Link>
        ) : (
          <div className="h-64 bg-gray-100" />
        )}
      </div>

      <div className="p-4">
        <p className="text-xs text-gray-500">
          {product.metadata?.collection?.title || 'Collection'}
        </p>
        <Link href={`/products/${product.slug}`}>
          <h3 className="font-medium mt-1">{product.metadata?.product_name || product.title}</h3>
        </Link>
        <div className="mt-3 flex items-baseline gap-2">
          <p className="text-lg font-semibold text-gray-900">{formatPrice(price)}</p>
          {oldPrice ? (
            <p className="text-sm text-gray-400 line-through">{formatPrice(oldPrice)}</p>
          ) : null}
        </div>
        {monthly ? (
          <span className="inline-flex mt-2 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
            From {formatPrice(monthly)}/mo
          </span>
        ) : null}
        <div className="flex items-center gap-2 mt-3 text-xs text-gray-500">
          <span className="text-yellow-500">★★★★★</span>
          <span>{rating}</span>
          <span>({reviewsCount})</span>
        </div>
        <button className="mt-4 w-full bg-gray-900 text-white text-sm py-2 rounded-lg">
          Add to cart
        </button>
      </div>
    </div>
  )
}