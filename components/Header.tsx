import Link from 'next/link'

export default function Header() {
  return (
    <header className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-semibold">
          Kastyum Gold
        </Link>
        <nav className="flex gap-4 text-sm text-gray-700">
          <Link href="/collections" className="hover:text-gray-900">
            Collections
          </Link>
          <Link href="/products" className="hover:text-gray-900">
            Products
          </Link>
          <Link href="/pages/returns-shipping" className="hover:text-gray-900">
            Info
          </Link>
          <Link href="/pages/cart" className="hover:text-gray-900">
            Cart
          </Link>
          <Link href="/pages/login" className="hover:text-gray-900">
            Login
          </Link>
        </nav>
      </div>
    </header>
  )
}