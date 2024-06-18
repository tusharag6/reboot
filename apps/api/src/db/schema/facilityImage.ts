import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import facility from './facility';
import { relations } from 'drizzle-orm';

const facilityImage = pgTable('facility_image', {
  id: serial('id').primaryKey(),
  facility_id: integer('facility_id')
    .notNull()
    .references(() => facility.id, { onDelete: 'cascade' }),
  image_url: varchar('image_url').notNull(),
  created_at: timestamp('created_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
  updated_at: timestamp('updated_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
});

export const facilityImageRelations = relations(facilityImage, ({ one }) => ({
  facility: one(facility, {
    fields: [facilityImage.facility_id],
    references: [facility.id],
  }),
}));

export default facilityImage;
