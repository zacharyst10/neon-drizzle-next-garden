import { relations } from 'drizzle-orm'
import {
  bigint,
  boolean,
  integer,
  pgTable,
  serial,
  text,
  timestamp
} from 'drizzle-orm/pg-core'

export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  name: text('name').notNull(),
  email: text('email').notNull(),
  clerkId: text('clerkId').notNull(),
  firstName: text('firstName'),
  lastName: text('lastName'),
  photo: text('photo').notNull(),
  createdAt: timestamp('created_at').notNull().defaultNow(),
  updatedAt: timestamp('updated_at').notNull().defaultNow()
})

export const todos = pgTable('todos', {
  id: bigint('id', { mode: 'number' }).primaryKey(),
  text: text('text').notNull(),
  done: boolean('done').default(false).notNull(),
  userId: integer('user_id')
    .notNull()
    .references(() => users.id)
})

export const todosRelations = relations(todos, ({ one }) => ({
  user: one(users, { fields: [todos.userId], references: [users.id] })
}))

export const usersRelations = relations(users, ({ many }) => ({
  todos: many(todos)
}))
