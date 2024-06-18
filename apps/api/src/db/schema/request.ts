import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
  pgEnum,
} from 'drizzle-orm/pg-core';
import user from './user';
import facility from './facility';
import { relations } from 'drizzle-orm';
import pickupSchedule from './pickupSchedule';

const RequestStatusEnum = pgEnum('request_status', [
  'requested',
  'accepted',
  'picked_up',
  'processed',
  'rewarded',
]);

const request = pgTable('request', {
  id: serial('id').primaryKey(),
  user_id: integer('user_id')
    .notNull()
    .references(() => user.id, {
      onDelete: 'cascade',
    }),
  facility_id: integer('facility_id')
    .notNull()
    .references(() => facility.id, {
      onDelete: 'set null',
    }),
  item: varchar('device').notNull(),
  status: RequestStatusEnum('status').default('requested'),
  pickup_scheduled_at: timestamp('pickup_scheduled_at'),
  created_at: timestamp('created_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
  updated_at: timestamp('updated_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
});

export const requestRelations = relations(request, ({ one, many }) => ({
  facility: one(facility, {
    fields: [request.facility_id],
    references: [facility.id],
  }),
  user: one(user, {
    fields: [request.user_id],
    references: [user.id],
  }),
  pickupSchedules: many(pickupSchedule),
}));

export default request;
