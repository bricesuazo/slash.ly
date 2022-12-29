import "../styles/globals.css";
import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";
import { Poppins } from "@next/font/google";

import { trpc } from "../utils/trpc";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <main className={poppins.className}>
      <SessionProvider session={session}>
        <Component {...pageProps} />
        <Analytics />
      </SessionProvider>
    </main>
  );
};

export default trpc.withTRPC(MyApp);
