DO $$ BEGIN
 CREATE TYPE "public"."genre" AS ENUM('Fantasy', 'Science Fiction', 'Horror', 'Romance', 'Biography', 'History', 'Psychology');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 CREATE TYPE "public"."language" AS ENUM('english', 'ukrainian', 'spanish');
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "book" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"authorId" uuid NOT NULL,
	"publisherId" uuid NOT NULL,
	"title" varchar(16) NOT NULL,
	"description" varchar NOT NULL,
	"genre" genre[],
	"language" "language" NOT NULL,
	"yearOfPublication" integer NOT NULL,
	"coverImg" varchar NOT NULL
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "book" ADD CONSTRAINT "book_authorId_book_id_fk" FOREIGN KEY ("authorId") REFERENCES "public"."book"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "book" ADD CONSTRAINT "book_publisherId_publisher_id_fk" FOREIGN KEY ("publisherId") REFERENCES "public"."publisher"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
