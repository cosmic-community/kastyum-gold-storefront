'use client'

export default function Error({
  error,
  reset
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-2xl font-semibold">Something went wrong</h2>
      <p className="text-gray-600 mt-4">{error.message}</p>
      <button
        onClick={() => reset()}
        className="mt-6 px-4 py-2 bg-gray-900 text-white rounded"
      >
        Try again
      </button>
    </div>
  )
}