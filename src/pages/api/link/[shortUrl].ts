import type { NextApiRequest, NextApiResponse } from "next";

import { prisma } from "../../../utils/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const shortUrl = req.query["shortUrl"];

  if (!shortUrl || typeof shortUrl !== "string") {
    res.statusCode = 404;

    res.send(JSON.stringify({ message: "pls use with a slug" }));

    return;
  }

  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");
  // res.setHeader("Cache-Control", "s-maxage=1000000000, stale-while-revalidate");

  const data = await prisma.link
    .update({
      where: {
        shortUrl,
      },
      data: {
        clicks: {
          increment: 1,
        },
      },
    })
    .catch(() => {
      res.statusCode = 404;

      res.send(JSON.stringify({ message: "slug not found" }));

      return;
    });

  return res.json(data);
};

export default handler;
