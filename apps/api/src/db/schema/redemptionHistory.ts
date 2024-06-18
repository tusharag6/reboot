import { integer, pgTable, serial, timestamp } from 'drizzle-orm/pg-core';
import user from './user';
import { relations } from 'drizzle-orm';

const redemptionHistory = pgTable('redemption_history', {
  id: serial('id').primaryKey(),
  user_id: integer('user_id')
    .notNull()
    .references(() => user.id, { onDelete: 'cascade' }),
  silver_coins: integer('silver_coins').notNull(),
  gold_coins: integer('gold_coins').notNull(),
  redeemed_at: timestamp('redeemed_at').defaultNow(),
  created_at: timestamp('created_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
  updated_at: timestamp('updated_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
});

export const redemptionHistoryRelations = relations(
  redemptionHistory,
  ({ one }) => ({
    user: one(user, {
      fields: [redemptionHistory.user_id],
      references: [user.id],
    }),
  })
);

export default redemptionHistory;
