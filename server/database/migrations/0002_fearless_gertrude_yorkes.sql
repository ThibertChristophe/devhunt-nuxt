ALTER TABLE "jobs" ALTER COLUMN "description" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "jobs" ADD COLUMN "deadline" timestamp;