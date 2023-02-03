import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaSignInAlt, FaTwitter } from "react-icons/fa";

const Home = () => {
  return (
    <>
      <section className="flex min-h-[90vh] flex-col items-center justify-center gap-4 bg-gray-800 px-4 text-center">
        <div className="space-y-2">
          <h1 className="text-4xl font-bold">Powerful link shortener.</h1>
          <p className="text-gray-300">An open-source link shortener.</p>

          <Link
            href="https://app.jib.im"
            className="mx-auto flex w-full items-center justify-center gap-x-2 rounded-md bg-gray-700 px-4 py-2 sm:w-fit"
          >
            Login <FaSignInAlt />
          </Link>
        </div>
      </section>
      <footer className="bg-gray-900">
        <section className="mx-auto flex max-w-screen-lg items-center justify-center  min-h-[10vh] gap-x-8 p-8">
          <Link
            href="https://jib.im/github"
            className="transition-opacity hover:opacity-75"
            target="_blank"
          >
            <FaGithub className="h-6 w-6" />
          </Link>
          <Link
            href="https://jib.im"
            className="relative overflow-hidden rounded-full border border-gray-700/50 transition-opacity hover:opacity-75"
            target="_blank"
          >
            <Image
              src="/images/jib-logo.png"
              alt="jib.im Logo"
              width={32}
              height={32}
            />
          </Link>
          <Link
            href="https://jib.im/twitter"
            className="transition-opacity hover:opacity-75"
            target="_blank"
          >
            <FaTwitter className="h-6 w-6" />
          </Link>
        </section>
      </footer>
    </>
  );
};
export default Home;
