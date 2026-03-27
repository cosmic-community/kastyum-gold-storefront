import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center">
      <h2 className="text-2xl font-semibold">Page not found</h2>
      <p className="text-gray-600 mt-4">The page you are looking for does not exist.</p>
      <Link href="/" className="inline-block mt-6 px-4 py-2 bg-gray-900 text-white rounded">
        Back to home
      </Link>
    </div>
  )
}