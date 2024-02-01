import { createTRPCRouter } from "@/server/api/trpc";
import { facilityRouter } from "@/server/api/routers/facility";
import { itemRouter } from "@/server/api/routers/item";
import { requestRouter } from "@/server/api/routers/request";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  facilty: facilityRouter,
  item: itemRouter,
  request: requestRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
