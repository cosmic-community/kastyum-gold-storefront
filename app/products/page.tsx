import Hero from '@/components/Hero'
import ProductCard from '@/components/ProductCard'
import { getProducts } from '@/lib/cosmic'
import type { Product } from '@/types'

export default async function ProductsPage() {
  const products = await getProducts()

  return (
    <div>
      <Hero
        title="All Products"
        subtitle="Explore our full lineup of suits, shirts, and essentials."
        imageUrl="https://imgix.cosmicjs.com/0005e900-29db-11f1-80f3-d192c421c2e6-photo-1523275335684-37898b6baf30-1774615599949.jpg?w=2400&h=1200&fit=crop&auto=format,compress"
      />
      <section className="max-w-6xl mx-auto px-6 py-12 grid gap-6 md:grid-cols-3">
        {(products as Product[]).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  )
}