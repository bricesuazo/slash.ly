import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const linkRouter = router({
  visitLink: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const link = await ctx.prisma.link.findUnique({
      where: {
        shortUrl: input,
      },
      select: {
        shortUrl: true,
        url: true,
      },
    });
    if (!link) {
      throw new Error("Link not found");
    }
    await ctx.prisma.link.update({
      where: {
        shortUrl: link.shortUrl,
      },
      data: {
        clicks: { increment: 1 },
      },
    });
    return link;
  }),
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
});
