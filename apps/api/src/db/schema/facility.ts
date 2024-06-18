import { relations } from 'drizzle-orm';
import { pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import facilityAcceptedItem from './facilityAcceptedItem';
import facilityOperatingHour from './facilityOperatingHour';
import facilityAddress from './facilityAddress';
import facilityImage from './facilityImage';
import request from './request';
import pickupSchedule from './pickupSchedule';

const facility = pgTable('facility', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  contact_info: varchar('contact_info'),
  description: text('description'),
  created_at: timestamp('created_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
  updated_at: timestamp('updated_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
});

export const facilityRelations = relations(facility, ({ many }) => ({
  acceptedItems: many(facilityAcceptedItem),
  operatingHours: many(facilityOperatingHour),
  addresses: many(facilityAddress),
  images: many(facilityImage),
  requests: many(request),
  pickupSchedules: many(pickupSchedule),
}));

export default facility;
