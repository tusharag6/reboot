import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import facility from './facility';
import city from './city';
import { relations } from 'drizzle-orm';

const facilityAddress = pgTable('facility_address', {
  id: serial('id').primaryKey(),
  facility_id: integer('facility_id')
    .notNull()
    .references(() => facility.id, { onDelete: 'cascade' }),
  street: varchar('street').notNull(),
  zip_code: varchar('zip_code').notNull(),
  city_id: integer('city_id')
    .notNull()
    .references(() => city.id),
  created_at: timestamp('created_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
  updated_at: timestamp('updated_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
});

export const addressRelations = relations(facilityAddress, ({ one }) => ({
  facility: one(facility, {
    fields: [facilityAddress.facility_id],
    references: [facility.id],
  }),
  city: one(city, {
    fields: [facilityAddress.city_id],
    references: [city.id],
  }),
}));

export default facilityAddress;
