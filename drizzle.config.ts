import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./db/schema/schema.ts",
  out: "./db/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL as string,
  },
  verbose: true,
  strict: true,
});
