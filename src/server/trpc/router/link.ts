import { z } from "zod";

import { router, publicProcedure } from "../trpc";

export const linkRouter = router({
  getByShortUrl: publicProcedure
    .input(z.string())
    .query(async ({ ctx, input }) => {
      return await ctx.prisma.link.findUnique({
        where: {
          shortUrl: input,
        },
      });
    }),
  hello: publicProcedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    }),
});
