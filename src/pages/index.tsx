import Image from "next/image";
import Link from "next/link";
import { FaSignInAlt } from "react-icons/fa";

export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center gap-4 bg-[#15162c] px-4 text-center text-white">
      <h1 className="text-4xl font-bold">Powerful link shortener.</h1>
      <p className="text-gray-300">An open-source link shortener.</p>

      <Link
        href="https://app.jib.im/login"
        className="flex w-full items-center justify-center gap-x-2 rounded-md bg-gray-700 px-4 py-2 sm:w-fit"
      >
        <span>Login</span> <FaSignInAlt />
      </Link>

      {/* <div className="relative w-full">
        <Image
          src="/dashboard.png"
          alt="Jib.im's dashboard"
          fill
          className="rounded-md"
        />
      </div> */}
    </section>
  );
}
