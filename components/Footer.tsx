export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-sm text-gray-500 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <p>© {new Date().getFullYear()} Kastyum Gold. All rights reserved.</p>
        <p>Luxury suits and modern essentials.</p>
      </div>
    </footer>
  )
}