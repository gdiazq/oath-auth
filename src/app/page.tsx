import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4">
        <div className="max-w-2xl text-center space-y-8">
          <h1 className="text-5xl font-bold text-black dark:text-white drop-shadow-md">
            Authentication System with OAuth and NextAuth.js
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Secure authentication with multiple providers. Sign in with your credentials, GitHub, or Google account.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="/signin"
              className="px-8 py-3 bg-blue-700 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/signup"
              className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-black dark:text-white font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              Create Account
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8">
            <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900">
              <h3 className="font-semibold text-black dark:text-white mb-2">Credentials</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Email and password authentication with secure hashing</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900">
              <h3 className="font-semibold text-black dark:text-white mb-2">GitHub OAuth</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Sign in with your GitHub account in one click</p>
            </div>
            <div className="p-6 rounded-lg bg-gray-50 dark:bg-gray-900">
              <h3 className="font-semibold text-black dark:text-white mb-2">Google OAuth</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">Use your Google account for quick access</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
