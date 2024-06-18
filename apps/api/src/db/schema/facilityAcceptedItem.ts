import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import facility from './facility';
import { relations } from 'drizzle-orm';

const facilityAcceptedItem = pgTable('facility_accepted_item', {
  id: serial('id').primaryKey(),
  facility_id: integer('facility_id')
    .notNull()
    .references(() => facility.id, { onDelete: 'cascade' }),
  item: varchar('item').notNull(),
  created_at: timestamp('created_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
  updated_at: timestamp('updated_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
});

export const acceptedItemRelations = relations(
  facilityAcceptedItem,
  ({ one }) => ({
    facility: one(facility, {
      fields: [facilityAcceptedItem.facility_id],
      references: [facility.id],
    }),
  })
);

export default facilityAcceptedItem;
