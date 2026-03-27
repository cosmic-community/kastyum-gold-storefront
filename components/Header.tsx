import Link from 'next/link'

const categories = [
  'Suits',
  'Shirts',
  'Trousers',
  'Outerwear',
  'Shoes',
  'Accessories',
  'Wedding',
  'Sale'
]

const megaMenu = {
  Suits: ['Classic suits', 'Slim fit', 'Double-breasted', 'Three-piece', 'Business'],
  Shirts: ['Oxford', 'Formal', 'Casual', 'Linen', 'Seasonal colors'],
  Trousers: ['Chinos', 'Wool', 'Pleated', 'Slim', 'Relaxed'],
  Outerwear: ['Coats', 'Blazers', 'Rainwear', 'Vests'],
  Shoes: ['Oxfords', 'Derbies', 'Loafers', 'Sneakers'],
  Accessories: ['Belts', 'Ties', 'Pocket squares', 'Cufflinks'],
  Wedding: ['Groomswear', 'Tuxedos', 'Party sets'],
  Sale: ['Limited offers', 'Clearance', 'Bundles']
}

export default function Header() {
  return (
    <header className="border-b border-gray-200 sticky top-0 bg-white z-50">
      {/* Changed: Added minimal top bar */}
      <div className="border-b border-gray-100 text-xs text-gray-500">
        <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-medium text-gray-700">Tashkent</span>
            <button className="text-gray-500 hover:text-gray-700">Change</button>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/pages/returns-shipping" className="hover:text-gray-700">
              Pickup points
            </Link>
            <Link href="/pages/returns-shipping" className="hover:text-gray-700">
              Help
            </Link>
            <Link href="/pages/cart" className="hover:text-gray-700">
              Orders
            </Link>
            <button className="text-gray-700 font-medium">EN</button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center gap-6">
        <Link href="/" className="text-lg font-semibold shrink-0">
          Kastyum Gold
        </Link>

        {/* Changed: Added search bar */}
        <div className="flex-1">
          <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 bg-gray-50">
            <input
              type="text"
              placeholder="Search for suits, shirts, accessories"
              className="flex-1 bg-transparent text-sm text-gray-700 outline-none"
            />
            <span className="text-xs text-gray-400">⌘K</span>
          </div>
        </div>

        <nav className="flex gap-4 text-sm text-gray-700 items-center">
          <Link href="/pages/login" className="hover:text-gray-900">
            Login
          </Link>
          <Link href="/pages/login" className="hover:text-gray-900">
            Wishlist
          </Link>
          <Link href="/pages/cart" className="hover:text-gray-900">
            Cart
          </Link>
        </nav>
      </div>

      {/* Changed: Category navigation with mega menu */}
      <div className="border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center gap-4">
          <div className="relative group">
            <button className="px-4 py-2 rounded-full bg-gray-900 text-white text-sm">
              Catalog
            </button>
            <div className="absolute left-0 top-12 w-[720px] bg-white border border-gray-200 rounded-2xl shadow-lg opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition duration-200">
              <div className="grid grid-cols-[220px_1fr] gap-6 p-6">
                <ul className="space-y-2 text-sm text-gray-700">
                  {categories.map((category) => (
                    <li key={category} className="hover:text-gray-900 font-medium">
                      {category}
                    </li>
                  ))}
                </ul>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                  {Object.entries(megaMenu).map(([group, items]) => (
                    <div key={group}>
                      <p className="text-xs uppercase tracking-wide text-gray-400 mb-2">{group}</p>
                      <ul className="space-y-1">
                        {items.map((item) => (
                          <li key={item} className="hover:text-gray-900">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-4 text-sm text-gray-600 overflow-x-auto">
            {categories.map((category) => (
              <Link key={category} href="/products" className="hover:text-gray-900 whitespace-nowrap">
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </header>
  )
}