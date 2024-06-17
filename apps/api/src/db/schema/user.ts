import {
  pgTable,
  serial,
  timestamp,
  varchar,
  boolean,
} from 'drizzle-orm/pg-core';

const user = pgTable('users', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  emailVerified: boolean('email_verified').notNull(),
  confirmationCode: varchar('confirmation_code', { length: 255 }),
  password: varchar('password', { length: 255 }).notNull(),
  createdAt: timestamp('created_at', { mode: 'string' }).notNull().defaultNow(),
  updatedAt: timestamp('updated_at', { mode: 'string' }).notNull().defaultNow(),
});

export default user;
