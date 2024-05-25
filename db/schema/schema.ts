import {
  pgTable,
  uuid,
  varchar,
  date,
  pgEnum,
  integer,
  timestamp,
} from "drizzle-orm/pg-core";

export const Language = pgEnum("language", ["english", "ukrainian", "spanish"]);

export const Genre = pgEnum("genre", [
  "Fantasy",
  "Science Fiction",
  "Horror",
  "Romance",
  "Biography",
  "History",
  "Psychology",
]);

export const AuthorTable = pgTable("author", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  lastname: varchar("lastname", { length: 255 }).notNull(),
  dateOfBirth: date("dateOfBirth").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("createdAt").defaultNow().notNull(),
});

export const PublisherTable = pgTable("publisher", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name").notNull(),
  description: varchar("description"),
});

export const BookTable = pgTable("book", {
  id: uuid("id").primaryKey().defaultRandom(),
  authorId: uuid("authorId")
    .references(() => AuthorTable.id)
    .notNull(),
  publisherId: uuid("publisherId")
    .references(() => PublisherTable.id)
    .notNull(),
  title: varchar("title", { length: 255 }).notNull(),
  description: varchar("description").notNull(),
  ISBN: varchar("title", { length: 16 }).notNull(),
  genres: Genre("genre").array(),
  language: Language("language").notNull(),
  yearOfPublication: integer("yearOfPublication").notNull(),
  coverImg: varchar("coverImg").notNull(),
});

// id: string;
// author: string;
// publisher: string;
// title: string;
// description: string;
// ISBN: string;
// genres: string[];
// language: string;
// yearOfPublication: number;
// coverImg: string;
