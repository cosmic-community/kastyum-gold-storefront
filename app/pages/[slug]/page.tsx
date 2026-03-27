// app/pages/[slug]/page.tsx
import { notFound } from 'next/navigation'
import Hero from '@/components/Hero'
import SectionRenderer from '@/components/SectionRenderer'
import { getMetafieldValue, getPageBySlug } from '@/lib/cosmic'
import type { PageTemplate } from '@/types'

export default async function CMSPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const page = await getPageBySlug(slug)

  if (!page) {
    return notFound()
  }

  const template = getMetafieldValue(page.metadata?.template) as PageTemplate
  const heroImage = page.metadata?.hero_image?.imgix_url

  return (
    <div>
      <Hero
        title={page.metadata?.page_title || page.title}
        subtitle={page.title}
        imageUrl={
          heroImage
            ? `${heroImage}?w=2400&h=1200&fit=crop&auto=format,compress`
            : 'https://imgix.cosmicjs.com/005ede70-29db-11f1-80f3-d192c421c2e6-photo-1503602642458-232111445657-1774615600578.jpg?w=2400&h=1200&fit=crop&auto=format,compress'
        }
      />
      <section className="max-w-4xl mx-auto px-6 py-12">
        <SectionRenderer template={template} sections={page.metadata?.sections || []} />
      </section>
    </div>
  )
}