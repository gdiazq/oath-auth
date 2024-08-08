import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-4">
        <div className="space-y-6 py-24 text-center px-4">
          <h1 className="text-5xl font-semibold text-black dark:text-white drop-shadow-md">
            Authentication System with OAuth and NextAuth.js
          </h1>
        </div>
      </main>
    </>
  );
}
