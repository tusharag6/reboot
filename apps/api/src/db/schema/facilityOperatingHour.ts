import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import facility from './facility';
import { relations } from 'drizzle-orm';

const facilityOperatingHour = pgTable('facility_operating_hour', {
  id: serial('id').primaryKey(),
  facility_id: integer('facility_id')
    .notNull()
    .references(() => facility.id, { onDelete: 'cascade' }),
  day_of_week: varchar('day_of_week').notNull(),
  open_time: varchar('open_time').notNull(),
  close_time: varchar('close_time').notNull(),
  created_at: timestamp('created_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
  updated_at: timestamp('updated_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
});

export const operatingHourRelations = relations(
  facilityOperatingHour,
  ({ one }) => ({
    facility: one(facility, {
      fields: [facilityOperatingHour.facility_id],
      references: [facility.id],
    }),
  })
);

export default facilityOperatingHour;
