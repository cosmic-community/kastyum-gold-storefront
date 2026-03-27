import Link from 'next/link'
import type { Collection } from '@/types'

export default function CollectionCard({ collection }: { collection: Collection }) {
  const heroImage = collection.metadata?.hero_image

  return (
    <Link href={`/collections/${collection.slug}`} className="group">
      <div className="border border-gray-200 rounded-xl overflow-hidden">
        {heroImage ? (
          <img
            src={`${heroImage.imgix_url}?w=1200&h=700&fit=crop&auto=format,compress`}
            alt={collection.title}
            width={600}
            height={350}
            className="w-full h-48 object-cover"
          />
        ) : (
          <div className="h-48 bg-gray-100" />
        )}
        <div className="p-4">
          <h3 className="font-medium">{collection.metadata?.collection_name || collection.title}</h3>
          <p className="text-sm text-gray-600 mt-2">{collection.metadata?.description}</p>
        </div>
      </div>
    </Link>
  )
}