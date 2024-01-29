import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const userRouter = createTRPCRouter({
  createOrUpdate: publicProcedure
    .input(
      z.object({
        id: z.string(),
        first_name: z.string(),
        last_name: z.string(),
        image_url: z.string(),
        email_addresses: z.string().optional(),
        username: z.string().optional(),
        created_at: z.number(),
        updated_at: z.number(),
        last_sign_in_at: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.upsert({
        where: { id: input.id },
        update: {
          first_name: input.first_name,
          last_name: input.last_name,
          image_url: input.image_url,
          email_addresses: input.email_addresses,
          username: input.username,
          created_at: input.created_at,
          updated_at: input.updated_at,
          last_sign_in_at: input.last_sign_in_at,
        },
        create: {
          id: input.id,
          first_name: input.first_name,
          last_name: input.last_name,
          image_url: input.image_url,
          email_addresses: input.email_addresses,
          username: input.username,
          created_at: input.created_at,
          updated_at: input.updated_at,
          last_sign_in_at: input.last_sign_in_at,
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
