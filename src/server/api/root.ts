import { createTRPCRouter } from "@/server/api/trpc";
import { facilityRouter } from "@/server/api/routers/facility";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  facilty: facilityRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
