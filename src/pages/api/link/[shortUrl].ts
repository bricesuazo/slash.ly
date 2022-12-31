import { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../server/db/client";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const shortUrl = req.query["shortUrl"];

  if (!shortUrl || typeof shortUrl !== "string") {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "pls use with a slug" }));

    return;
  }

  const data = await prisma.link.findFirst({
    where: {
      shortUrl: {
        equals: shortUrl,
      },
    },
  });

  if (!data) {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "slug not found" }));

    return;
  }

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Cache-Control", "s-maxage=1000000000, stale-while-revalidate");

  await prisma.link.update({
    where: {
      id: data.id,
    },
    data: {
      clicks: {
        increment: 1,
      },
    },
  });

  return res.json(data);
};
