import {
  integer,
  pgEnum,
  pgTable,
  serial,
  timestamp,
} from 'drizzle-orm/pg-core';
import user from './user';
import facility from './facility';
import { relations } from 'drizzle-orm';

const RewardTypeEnum = pgEnum('reward_type', ['silver_coin', 'gold_coin']);

const reward = pgTable('rewards', {
  id: serial('id').primaryKey(),
  user_id: integer('user_id')
    .notNull()
    .references(() => user.id, {
      onDelete: 'cascade',
    }),
  facility_id: integer('facility_id')
    .notNull()
    .references(() => facility.id, { onDelete: 'cascade' }),
  points: integer('points').notNull(),
  type: RewardTypeEnum('type').notNull(),
  credited_at: timestamp('credited_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
  created_at: timestamp('created_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
  updated_at: timestamp('updated_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
});

export const rewardRelations = relations(reward, ({ one }) => ({
  user: one(user, {
    fields: [reward.user_id],
    references: [user.id],
  }),
}));

export default reward;
