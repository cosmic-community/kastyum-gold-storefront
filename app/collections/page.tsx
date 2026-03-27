import Hero from '@/components/Hero'
import CollectionCard from '@/components/CollectionCard'
import { getCollections } from '@/lib/cosmic'
import type { Collection } from '@/types'

export default async function CollectionsPage() {
  const collections = await getCollections()

  return (
    <div>
      <Hero
        title="Collections"
        subtitle="Discover our curated selections for every style."
        imageUrl="https://imgix.cosmicjs.com/002a60f0-29db-11f1-80f3-d192c421c2e6-photo-1490481651871-ab68de25d43d-1774615600221.jpg?w=2400&h=1200&fit=crop&auto=format,compress"
      />
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-2">
        {(collections as Collection[]).map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </section>
    </div>
  )
}