import { int, mysqlTable, serial, varchar,boolean ,timestamp} from 'drizzle-orm/mysql-core';
import {env} from '../../../zodValidation/envValidation.js';
export const usersTable = mysqlTable(env.REGISTRATION_TABLE_NAME, {
  id: serial().primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  password: varchar({ length: 255 }),
  isEmailVerified: boolean('is_email_verified').default(false).notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),

});