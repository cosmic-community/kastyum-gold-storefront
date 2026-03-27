// app/collections/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import { getCollectionBySlug, getProductsByCollection } from '@/lib/cosmic'
import type { Product } from '@/types'

export default async function CollectionDetailPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const collection = await getCollectionBySlug(slug)

  if (!collection) {
    return notFound()
  }

  const products = await getProductsByCollection(collection.id)

  return (
    <div>
      <Hero
        title={collection.metadata?.collection_name || collection.title}
        subtitle={collection.metadata?.description || 'Explore the collection.'}
        imageUrl={`${collection.metadata?.hero_image?.imgix_url}?w=2400&h=1200&fit=crop&auto=format,compress`}
      />
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-3">
        {(products as Product[]).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  )
}