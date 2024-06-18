import {
  integer,
  pgTable,
  serial,
  timestamp,
  varchar,
} from 'drizzle-orm/pg-core';
import user from './user';
import city from './city';
import { relations } from 'drizzle-orm';

const userAddress = pgTable('user_addresses', {
  id: serial('id').primaryKey(),
  user_id: integer('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
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

export const addressRelations = relations(userAddress, ({ one }) => ({
  user: one(user, {
    fields: [userAddress.user_id],
    references: [user.id],
  }),
  city: one(city, {
    fields: [userAddress.city_id],
    references: [city.id],
  }),
}));

export default userAddress;
