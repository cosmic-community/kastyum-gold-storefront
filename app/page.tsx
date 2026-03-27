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

  const heroSlides = [
    {
      title: 'Modern tailoring for everyday confidence',
      subtitle: 'Premium suits, shirts, and essentials designed for effortless style.',
      imageUrl:
        'https://imgix.cosmicjs.com/005ede70-29db-11f1-80f3-d192c421c2e6-photo-1503602642458-232111445657-1774615600578.jpg?w=2400&h=1400&fit=crop&auto=format,compress'
    },
    {
      title: 'Timeless classics, crafted with precision',
      subtitle: 'Explore refined silhouettes and versatile pieces for every occasion.',
      imageUrl:
        'https://imgix.cosmicjs.com/003c3b40-29db-11f1-80f3-d192c421c2e6-photo-1498050108023-c5249f4df085-1774615600362.jpg?w=2400&h=1400&fit=crop&auto=format,compress'
    },
    {
      title: 'Elevate your wardrobe with Kastyum Gold',
      subtitle: 'Discover seasonal picks and exclusive edits curated for you.',
      imageUrl:
        'https://imgix.cosmicjs.com/0005e900-29db-11f1-80f3-d192c421c2e6-photo-1523275335684-37898b6baf30-1774615599949.jpg?w=2400&h=1400&fit=crop&auto=format,compress'
    }
  ]

  const featureItems = [
    { title: 'Fast delivery', description: 'Get your order in 1–3 days.' },
    { title: 'Best price guarantee', description: 'Premium quality, fair pricing.' },
    { title: 'Trending now', description: 'New arrivals updated weekly.' },
    { title: 'Seasonal offers', description: 'Limited-time curated drops.' },
    { title: 'Secure checkout', description: 'Protected payments every time.' }
  ]

  return (
    <div>
      <Hero slides={heroSlides} />

      <section className="max-w-6xl mx-auto px-6 py-10">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {featureItems.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl bg-gray-50 border border-gray-200 p-4"
            >
              {/* Changed: Added feature card row */}
              <p className="text-sm font-semibold text-gray-900">{item.title}</p>
              <p className="text-xs text-gray-600 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 border-t border-gray-200">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">Recommended</p>
            <h2 className="text-2xl font-semibold">Popular products</h2>
          </div>
          <Link href="/products" className="text-sm text-gray-600 hover:text-gray-900">
            Browse products
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {(products as Product[]).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="flex justify-center mt-8">
          {/* Changed: Added load more button */}
          <button className="px-6 py-2 rounded-full border border-gray-300 text-sm text-gray-700 hover:border-gray-500 transition">
            Show more
          </button>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 border-t border-gray-200">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">Collections</p>
            <h2 className="text-2xl font-semibold">Shop by style</h2>
          </div>
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

      <section className="max-w-6xl mx-auto px-6 py-10 border-t border-gray-200">
        <div className="flex items-end justify-between mb-6">
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500">Customer voice</p>
            <h2 className="text-2xl font-semibold">Latest reviews</h2>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {(reviews as Review[]).map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-10 border-t border-gray-200">
        <h2 className="text-2xl font-semibold mb-6">Helpful pages</h2>
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