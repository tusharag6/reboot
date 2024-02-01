import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

interface Item {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FacilityAcceptedItems {
  id: string;
  facilityId: string;
  itemId: string;
  createdAt: Date;
  updatedAt: Date;
}

export const itemRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const item = (await ctx.db.item.findUnique({
        where: { id: input.id },
      })) as Item | null;

      if (!item) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Item not found",
        });
      }
      return item;
    }),

  getAcceptedItemById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const item = (await ctx.db.facilityAcceptedItems.findUnique({
        where: { id: input.id },
      })) as FacilityAcceptedItems | null;

      if (!item) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Item not found",
        });
      }
      return item;
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const items = (await ctx.db.item.findMany({
      orderBy: [{ createdAt: "desc" }],
    })) as Item[];

    return items;
  }),

  getAllAcceptedItems: publicProcedure.query(async ({ ctx }) => {
    const items = (await ctx.db.facilityAcceptedItems.findMany({
      orderBy: [{ createdAt: "desc" }],
    })) as FacilityAcceptedItems[];

    return items;
  }),

  getItemsAcceptedByFacility: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const items = (await ctx.db.facilityAcceptedItems.findMany({
        where: { facilityId: input.id },
      })) as FacilityAcceptedItems[];
      return items;
    }),
});
