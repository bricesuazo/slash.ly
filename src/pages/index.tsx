import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#15162c] text-white">
      <h1 className="text-4xl font-bold">jib.im</h1>
      <Link
        href="https://app.jib.im"
        className="rounded-full border px-4 py-2 hover:bg-white/5"
      >
        Go to app
      </Link>
    </main>
  );
}
