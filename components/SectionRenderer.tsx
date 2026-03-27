import CartSummary from '@/components/CartSummary'
import InfoSection from '@/components/InfoSection'
import LoginForm from '@/components/LoginForm'
import type { PageSection, PageTemplate } from '@/types'

export default function SectionRenderer({
  template,
  sections
}: {
  template: PageTemplate
  sections: PageSection[]
}) {
  if (template === 'login') {
    return <LoginForm />
  }

  if (template === 'cart') {
    return <CartSummary />
  }

  return (
    <div className="space-y-6">
      {(sections || []).map((section, index) => {
        if (section.type === 'text') {
          return (
            <InfoSection
              key={`${section.type}-${index}`}
              headline={section.headline}
              content={section.content}
            />
          )
        }

        if (section.type === 'summary') {
          return (
            <CartSummary
              key={`${section.type}-${index}`}
              headline={section.headline}
              cta={section.cta}
            />
          )
        }

        if (section.type === 'form') {
          return (
            <LoginForm
              key={`${section.type}-${index}`}
              headline={section.headline}
              subtext={section.subtext}
            />
          )
        }

        return null
      })}
    </div>
  )
}