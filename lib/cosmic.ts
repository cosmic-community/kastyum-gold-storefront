import { createBucketClient } from '@cosmicjs/sdk'
import type {
  Collection,
  CosmicResponse,
  Page,
  Product,
  Review
} from '@/types'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
  writeKey: process.env.COSMIC_WRITE_KEY as string
})

export function getMetafieldValue(field: unknown): string {
  if (field === null || field === undefined) return ''
  if (typeof field === 'string') return field
  if (typeof field === 'number' || typeof field === 'boolean') return String(field)
  if (typeof field === 'object' && field !== null && 'value' in field) {
    return String((field as { value: unknown }).value)
  }
  if (typeof field === 'object' && field !== null && 'key' in field) {
    return String((field as { key: unknown }).key)
  }
  return ''
}

function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error
}

export async function getProducts(): Promise<Product[]> {
  try {
    const response: CosmicResponse<Product> = await cosmic.objects
      .find({ type: 'products' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as Product[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch products')
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'products', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.object as Product
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch product')
  }
}

export async function getCollections(): Promise<Collection[]> {
  try {
    const response: CosmicResponse<Collection> = await cosmic.objects
      .find({ type: 'collections' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as Collection[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch collections')
  }
}

export async function getCollectionBySlug(slug: string): Promise<Collection | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'collections', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.object as Collection
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch collection')
  }
}

export async function getProductsByCollection(collectionId: string): Promise<Product[]> {
  try {
    const response: CosmicResponse<Product> = await cosmic.objects
      .find({ type: 'products', 'metadata.collection': collectionId })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as Product[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch collection products')
  }
}

export async function getReviews(): Promise<Review[]> {
  try {
    const response: CosmicResponse<Review> = await cosmic.objects
      .find({ type: 'reviews' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as Review[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch reviews')
  }
}

export async function getReviewsByProduct(productId: string): Promise<Review[]> {
  try {
    const response: CosmicResponse<Review> = await cosmic.objects
      .find({ type: 'reviews', 'metadata.product': productId })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as Review[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch product reviews')
  }
}

export async function getPages(): Promise<Page[]> {
  try {
    const response: CosmicResponse<Page> = await cosmic.objects
      .find({ type: 'pages' })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.objects as Page[]
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return []
    }
    throw new Error('Failed to fetch pages')
  }
}

export async function getPageBySlug(slug: string): Promise<Page | null> {
  try {
    const response = await cosmic.objects
      .findOne({ type: 'pages', slug })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1)

    return response.object as Page
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null
    }
    throw new Error('Failed to fetch page')
  }
}