import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  createOrUpdate: publicProcedure
    .input(
      z.object({
        id: z.string(),
        externalId: z.string(),
        first_name: z.string(),
        last_name: z.string(),
        image_url: z.string(),
        email_addresses: z.string().optional(),
        username: z.string().optional(),
        created_at: z.date(),
        updated_at: z.date(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.upsert({
        where: { id: input.id },
        update: {
          externalId: input.externalId,
          first_name: input.first_name,
          last_name: input.last_name,
          image_url: input.image_url,
          email_addresses: input.email_addresses,
          username: input.username,
          created_at: input.created_at,
          updated_at: input.updated_at,
        },
        create: {
          externalId: input.externalId,
          id: input.id,
          first_name: input.first_name,
          last_name: input.last_name,
          image_url: input.image_url,
          email_addresses: input.email_addresses,
          username: input.username,
          created_at: input.created_at,
          updated_at: input.updated_at,
        },
      });

      return user;
    }),

  delete: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.delete({
        where: { id: input.id },
      });
      return user;
    }),
});
