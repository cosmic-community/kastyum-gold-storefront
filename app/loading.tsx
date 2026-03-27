export default function Loading() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="h-8 bg-gray-100 rounded w-48 mb-6" />
      <div className="grid gap-4 md:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="h-56 bg-gray-100 rounded-lg" />
        ))}
      </div>
    </div>
  )
}