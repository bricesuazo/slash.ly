import type { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getBaseUrl } from "../utils/trpc";

export default function ShortUrl() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { shortUrl } = context.params as { shortUrl: string };
  if (!shortUrl) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const data = await fetch(`${getBaseUrl()}/api/link/${shortUrl}`);
  const link = await data.json();

  if (link.url === undefined) {
    return {
      notFound: true,
    };
  }
  return {
    redirect: {
      destination: link.url,
      permanent: false,
    },
  };
};
