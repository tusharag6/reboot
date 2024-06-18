import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import request from './request';
import { relations } from 'drizzle-orm';
import facility from './facility';

const pickupSchedule = pgTable('pickup_schedule', {
  id: serial('id').primaryKey(),
  facility_id: integer('facility_id')
    .notNull()
    .references(() => facility.id, { onDelete: 'cascade' }),
  request_id: integer('request_id')
    .notNull()
    .references(() => request.id, { onDelete: 'cascade' }),
  driver_name: varchar('driver_name'),
  driver_contact: varchar('driver_contact'),
  vehicle_details: varchar('vehicle_details'),
  pickup_date: timestamp('pickup_date').notNull(),
  pickup_time_slot: varchar('pickup_time_slot').notNull(),
  status: varchar('status').notNull().default('scheduled'),
  created_at: timestamp('created_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
  updated_at: timestamp('updated_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
});

export const pickupScheduleRelations = relations(pickupSchedule, ({ one }) => ({
  facility: one(facility, {
    fields: [pickupSchedule.facility_id],
    references: [facility.id],
  }),
  request: one(request, {
    fields: [pickupSchedule.request_id],
    references: [request.id],
  }),
}));

export default pickupSchedule;
