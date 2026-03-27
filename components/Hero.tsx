export default function Hero({
  title,
  subtitle,
  imageUrl
}: {
  title: string
  subtitle: string
  imageUrl: string
}) {
  return (
    <section className="relative">
      <img
        src={imageUrl}
        alt={title}
        width={1200}
        height={600}
        className="w-full h-[420px] object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-6xl mx-auto px-6 text-white">
          <h1 className="text-4xl font-semibold">{title}</h1>
          <p className="text-lg mt-3 max-w-xl">{subtitle}</p>
        </div>
      </div>
    </section>
  )
}