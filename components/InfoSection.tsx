export default function InfoSection({
  headline,
  content
}: {
  headline: string
  content?: string
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-semibold">{headline}</h3>
      <p className="text-sm text-gray-600 mt-2">{content}</p>
    </div>
  )
}