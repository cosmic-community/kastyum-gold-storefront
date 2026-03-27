import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import CollectionCard from '@/components/CollectionCard'
import ReviewCard from '@/components/ReviewCard'
import {
  getProducts,
  getCollections,
  getReviews,
  getPages
} from '@/lib/cosmic'
import type { Collection, Page, Product, Review } from '@/types'
import Link from 'next/link'

export default async function HomePage() {
  const [products, collections, reviews, pages] = await Promise.all([
    getProducts(),
    getCollections(),
    getReviews(),
    getPages()
  ])

  return (
    <div>
      <Hero
        title="Kastyum Gold"
        subtitle="Refined suits and tailored essentials for every occasion."
        imageUrl="https://imgix.cosmicjs.com/005ede70-29db-11f1-80f3-d192c421c2e6-photo-1503602642458-232111445657-1774615600578.jpg?w=2400&h=1200&fit=crop&auto=format,compress"
      />

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold">Collections</h2>
          <Link href="/collections" className="text-sm text-gray-600 hover:text-gray-900">
            View all
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {(collections as Collection[]).map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold">Featured Products</h2>
          <Link href="/products" className="text-sm text-gray-600 hover:text-gray-900">
            Browse products
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {(products as Product[]).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {(reviews as Review[]).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">Store Pages</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {(pages as Page[]).map((page) => (
            <Link
              key={page.id}
              href={`/pages/${page.slug}`}
              className="border border-gray-200 rounded-lg p-4 hover:border-gray-400 transition"
            >
              <h3 className="font-medium">{page.metadata?.page_title || page.title}</h3>
              <p className="text-sm text-gray-600 mt-1">Open page</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}