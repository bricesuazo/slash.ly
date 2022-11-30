import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#15162c] text-white flex justify-center items-center flex-col gap-4">
      <h1 className="font-bold text-4xl">slash.ly</h1>
      <Link
        href="https://app.slash.ly"
        className="px-4 py-2 border hover:bg-white/5 rounded-full"
      >
        Go to app
      </Link>
    </main>
  );
}
