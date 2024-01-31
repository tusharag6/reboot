import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

interface Request {
  id: string;
  facilityId: string;
  itemId: string;
  userId: string;
  status: string;
  pickupDate: Date;
  pickupAddress: string;
  userMobile: number;
  createdAt: Date;
  updatedAt: Date;
}

export const requestRouter = createTRPCRouter({
  create: publicProcedure
    .input(
      z.object({
        facilityId: z.string(),
        itemId: z.string(),
        userId: z.string(),
        pickupDate: z.date(),
        pickupAddress: z.string(),
        userMobile: z.number(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const request = (await ctx.db.request.create({
        data: {
          facilityId: input.facilityId,
          itemId: input.itemId,
          userId: input.userId,
          pickupDate: input.pickupDate,
          pickupAddress: input.pickupAddress,
          userMobile: input.userMobile,
        },
      })) as Request | null;

      if (!request) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Request not made",
        });
      }
      return request;
    }),
});
