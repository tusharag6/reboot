import { relations } from 'drizzle-orm';
import {
  pgTable,
  serial,
  timestamp,
  varchar,
  boolean,
  pgEnum,
  text,
  integer,
} from 'drizzle-orm/pg-core';
import userAddress from './userAddress';
import reward from './reward';
import request from './request';
import redemptionHistory from './redemptionHistory';

const UserRoleEnum = pgEnum('user_role', ['user', 'facility_owner', 'admin']);

const user = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name').notNull(),
  email: varchar('email').notNull().unique(),
  password: varchar('password').notNull(),
  phone: varchar('phone_number').notNull().unique(),
  avatar: text('avatar'),
  phoneVerified: boolean('phone_verified').notNull().default(false),
  emailVerified: boolean('email_verified').notNull().default(false),
  confirmationCode: varchar('confirmation_code'),
  role: UserRoleEnum('role').default('user'),
  silver_coins: integer('silver_coins').default(0),
  gold_coins: integer('gold_coins').default(0),
  created_at: timestamp('created_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
  updated_at: timestamp('updated_at', { mode: 'string' })
    .notNull()
    .defaultNow(),
});

export const userRelations = relations(user, ({ many }) => ({
  addresses: many(userAddress),
  rewards: many(reward),
  requests: many(request),
  redemptionHistories: many(redemptionHistory),
}));

export default user;
