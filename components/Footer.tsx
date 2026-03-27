export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-12 mt-12 bg-gray-50">
      {/* Changed: Expanded footer to multi-column layout */}
      <div className="max-w-6xl mx-auto px-6 grid gap-10 md:grid-cols-4 text-sm text-gray-600">
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">About</h3>
          <ul className="space-y-2">
            <li>Our story</li>
            <li>Sustainability</li>
            <li>Careers</li>
            <li>Press</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">For users</h3>
          <ul className="space-y-2">
            <li>Returns</li>
            <li>Delivery</li>
            <li>Support</li>
            <li>Size guide</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">For sellers</h3>
          <ul className="space-y-2">
            <li>Partner program</li>
            <li>Marketplace policy</li>
            <li>Analytics</li>
            <li>Seller support</li>
          </ul>
        </div>
        <div>
          <h3 className="text-sm font-semibold text-gray-900 mb-3">Get the app</h3>
          <p className="text-xs text-gray-500">Download for a faster, smoother experience.</p>
          <div className="flex gap-3 mt-4">
            <span className="h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs">
              iOS
            </span>
            <span className="h-10 w-10 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs">
              APK
            </span>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 mt-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Kastyum Gold. All rights reserved.</p>
        <div className="flex gap-3">
          <span className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
            in
          </span>
          <span className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
            fb
          </span>
          <span className="h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
            ig
          </span>
        </div>
      </div>
    </footer>
  )
}