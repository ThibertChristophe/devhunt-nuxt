CREATE TABLE "candidates" (
	"id" integer PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"password" text NOT NULL,
	"avatar" text NOT NULL,
	"created_at" integer NOT NULL,
	CONSTRAINT "candidates_email_unique" UNIQUE("email")
);
