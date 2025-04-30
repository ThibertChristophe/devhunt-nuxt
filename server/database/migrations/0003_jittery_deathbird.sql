CREATE TABLE "jobs_to_skills" (
	"job_id" integer NOT NULL,
	"skill_id" integer NOT NULL,
	CONSTRAINT "jobs_to_skills_job_id_skill_id_pk" PRIMARY KEY("job_id","skill_id")
);
--> statement-breakpoint
ALTER TABLE "jobs_to_skills" ADD CONSTRAINT "jobs_to_skills_job_id_jobs_id_fk" FOREIGN KEY ("job_id") REFERENCES "public"."jobs"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "jobs_to_skills" ADD CONSTRAINT "jobs_to_skills_skill_id_skills_id_fk" FOREIGN KEY ("skill_id") REFERENCES "public"."skills"("id") ON DELETE no action ON UPDATE no action;