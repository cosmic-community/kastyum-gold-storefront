import Link from 'next/link'
import { formatPrice } from '@/lib/utils'
import type { Product } from '@/types'

export default function ProductCard({ product }: { product: Product }) {
  const image = product.metadata?.images?.[0]

  return (
    <Link href={`/products/${product.slug}`} className="group">
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        {image ? (
          <img
            src={`${image.imgix_url}?w=800&h=1000&fit=crop&auto=format,compress`}
            alt={product.title}
            width={400}
            height={500}
            className="w-full h-64 object-cover"
          />
        ) : (
          <div className="h-64 bg-gray-100" />
        )}
        <div className="p-4">
          <p className="text-xs text-gray-500">
            {product.metadata?.collection?.title || 'Collection'}
          </p>
          <h3 className="font-medium mt-1">{product.metadata?.product_name || product.title}</h3>
          <p className="text-sm text-gray-700 mt-2">{formatPrice(product.metadata?.price)}</p>
        </div>
      </div>
    </Link>
  )
}