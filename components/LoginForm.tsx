export default function LoginForm({
  headline = 'Welcome back',
  subtext = 'Log in to access your account.'
}: {
  headline?: string
  subtext?: string
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-6">
      <h2 className="text-xl font-semibold">{headline}</h2>
      <p className="text-sm text-gray-600 mt-2">{subtext}</p>
      <form className="mt-6 space-y-4">
        <input
          type="email"
          placeholder="Email address"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
        />
        <button type="button" className="w-full bg-gray-900 text-white py-2 rounded-md text-sm">
          Sign in
        </button>
      </form>
    </div>
  )
}