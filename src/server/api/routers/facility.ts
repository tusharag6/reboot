import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

export interface Facility {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: number;
  email: string | null;
  website: string | null;
  latitude: number | null;
  longitude: number | null;
  createdAt: Date;
  updatedAt: Date;
}

interface FacilitySearchedItem {
  facilityId: string;
}

export const facilityRouter = createTRPCRouter({
  getById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ ctx, input }) => {
      const facility = (await ctx.db.facility.findUnique({
        where: { id: input.id },
      })) as Facility | null;

      if (!facility) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Facility not found",
        });
      }
      return facility;
    }),

  getAll: publicProcedure.query(async ({ ctx }) => {
    const facilities = (await ctx.db.facility.findMany({
      orderBy: [{ createdAt: "desc" }],
    })) as Facility[];

    return facilities;
  }),

  search: publicProcedure
    .input(
      z.object({
        city: z.string(),
        searchItem: z.string().nullable().optional(),
      }),
    )
    .query(async ({ ctx, input }) => {
      const { city, searchItem } = input;
      let facilities;

      if (searchItem) {
        const facilitiesWithSearchedItem =
          (await ctx.db.facilityAcceptedItems.findMany({
            where: {
              Item: {
                name: searchItem,
              },
            },
            select: {
              facilityId: true,
            },
          })) as FacilitySearchedItem[];

        const facilityIds = facilitiesWithSearchedItem.map((f) => f.facilityId);

        // Then, use those IDs to filter facilities by city
        facilities = (await ctx.db.facility.findMany({
          where: {
            id: {
              in: facilityIds,
            },
            city: city,
          },
        })) as Facility[];
      } else {
        facilities = (await ctx.db.facility.findMany({
          where: {
            city: city,
          },
        })) as Facility[];
      }

      return facilities;
    }),
});
