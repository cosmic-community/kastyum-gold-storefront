export interface CosmicFile {
  url: string
  imgix_url: string
}

export interface SelectValue {
  key?: string
  value?: string
}

export interface CosmicObject {
  id: string
  slug: string
  title: string
  content?: string
  metadata?: Record<string, unknown>
  type?: string
  created_at?: string
  modified_at?: string
}

export interface CosmicResponse<T> {
  objects: T[]
  total: number
  limit: number
  skip: number
}

export type PageTemplate = 'login' | 'cart' | 'info'

export type PageSection =
  | {
      type: 'text'
      headline: string
      content?: string
    }
  | {
      type: 'form'
      headline?: string
      subtext?: string
    }
  | {
      type: 'summary'
      headline?: string
      cta?: string
    }

export interface Page extends CosmicObject {
  type?: 'pages'
  metadata?: {
    page_title?: string
    template?: SelectValue | string
    hero_image?: CosmicFile
    sections?: PageSection[]
  }
}

export interface Collection extends CosmicObject {
  type?: 'collections'
  metadata?: {
    collection_name?: string
    description?: string
    hero_image?: CosmicFile
  }
}

export interface Product extends CosmicObject {
  type?: 'products'
  metadata?: {
    product_name?: string
    description?: string
    price?: number
    collection?: Collection
    images?: CosmicFile[]
    sizes?: Array<string | SelectValue>
    in_stock?: boolean
  }
}

export interface Review extends CosmicObject {
  type?: 'reviews'
  metadata?: {
    product?: Product
    rating?: SelectValue | string
    reviewer_name?: string
    review_text?: string
    verified_purchase?: boolean
  }
}