-- Additive publishing/permissions schema, generated against the pre-upgrade Arve database.
-- Existing content, users and historical versions are retained.

DO $$ BEGIN CREATE TYPE public."enum__implementations_v_version_editorial_status" AS ENUM ('draft', 'clarify', 'review', 'checked'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE public."enum_implementations_editorial_status" AS ENUM ('draft', 'clarify', 'review', 'checked'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE public."enum_publication_events_action" AS ENUM ('created', 'edited', 'review_requested', 'approved', 'published', 'unpublished', 'restored'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE public."enum_publication_events_document_type" AS ENUM ('pages', 'implementations'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
DO $$ BEGIN CREATE TYPE public."enum_users_memberships_role" AS ENUM ('reader', 'author', 'publisher'); EXCEPTION WHEN duplicate_object THEN NULL; END $$;
ALTER TABLE public."_implementations_v" ADD COLUMN IF NOT EXISTS "version_publication_content_hash" character varying;
ALTER TABLE public."_implementations_v" ADD COLUMN IF NOT EXISTS "version_publication_reviewed_hash" character varying;
ALTER TABLE public."_implementations_v" ADD COLUMN IF NOT EXISTS "version_publication_reviewed_by" character varying;
ALTER TABLE public."_implementations_v" ADD COLUMN IF NOT EXISTS "version_publication_reviewed_at" timestamp(3) with time zone;
ALTER TABLE public."_implementations_v" ADD COLUMN IF NOT EXISTS "version_publication_published_by" character varying;
ALTER TABLE public."_implementations_v" ADD COLUMN IF NOT EXISTS "version_publication_published_at" timestamp(3) with time zone;
ALTER TABLE public."_implementations_v" ADD COLUMN IF NOT EXISTS "version_editorial_status" public.enum__implementations_v_version_editorial_status DEFAULT 'draft'::public.enum__implementations_v_version_editorial_status;
ALTER TABLE public."_pages_v" ADD COLUMN IF NOT EXISTS "version_publication_content_hash" character varying;
ALTER TABLE public."_pages_v" ADD COLUMN IF NOT EXISTS "version_publication_reviewed_hash" character varying;
ALTER TABLE public."_pages_v" ADD COLUMN IF NOT EXISTS "version_publication_reviewed_by" character varying;
ALTER TABLE public."_pages_v" ADD COLUMN IF NOT EXISTS "version_publication_reviewed_at" timestamp(3) with time zone;
ALTER TABLE public."_pages_v" ADD COLUMN IF NOT EXISTS "version_publication_published_by" character varying;
ALTER TABLE public."_pages_v" ADD COLUMN IF NOT EXISTS "version_publication_published_at" timestamp(3) with time zone;
ALTER TABLE public."implementations" ADD COLUMN IF NOT EXISTS "publication_content_hash" character varying;
ALTER TABLE public."implementations" ADD COLUMN IF NOT EXISTS "publication_reviewed_hash" character varying;
ALTER TABLE public."implementations" ADD COLUMN IF NOT EXISTS "publication_reviewed_by" character varying;
ALTER TABLE public."implementations" ADD COLUMN IF NOT EXISTS "publication_reviewed_at" timestamp(3) with time zone;
ALTER TABLE public."implementations" ADD COLUMN IF NOT EXISTS "publication_published_by" character varying;
ALTER TABLE public."implementations" ADD COLUMN IF NOT EXISTS "publication_published_at" timestamp(3) with time zone;
ALTER TABLE public."implementations" ADD COLUMN IF NOT EXISTS "editorial_status" public.enum_implementations_editorial_status DEFAULT 'draft'::public.enum_implementations_editorial_status;
ALTER TABLE public."media" ADD COLUMN IF NOT EXISTS "design_system_id" integer;
ALTER TABLE public."pages" ADD COLUMN IF NOT EXISTS "publication_content_hash" character varying;
ALTER TABLE public."pages" ADD COLUMN IF NOT EXISTS "publication_reviewed_hash" character varying;
ALTER TABLE public."pages" ADD COLUMN IF NOT EXISTS "publication_reviewed_by" character varying;
ALTER TABLE public."pages" ADD COLUMN IF NOT EXISTS "publication_reviewed_at" timestamp(3) with time zone;
ALTER TABLE public."pages" ADD COLUMN IF NOT EXISTS "publication_published_by" character varying;
ALTER TABLE public."pages" ADD COLUMN IF NOT EXISTS "publication_published_at" timestamp(3) with time zone;
ALTER TABLE public."payload_locked_documents_rels" ADD COLUMN IF NOT EXISTS "publication_events_id" integer;
CREATE TABLE IF NOT EXISTS public."publication_events" (
  "id" serial NOT NULL,
  "design_system_id" integer NOT NULL,
  "document_type" public.enum_publication_events_document_type NOT NULL,
  "document_i_d" numeric NOT NULL,
  "document_title" character varying NOT NULL,
  "version_i_d" numeric,
  "content_hash" character varying NOT NULL,
  "action" public.enum_publication_events_action NOT NULL,
  "actor_i_d" numeric,
  "actor" character varying NOT NULL,
  "updated_at" timestamp(3) with time zone NOT NULL DEFAULT now(),
  "created_at" timestamp(3) with time zone NOT NULL DEFAULT now()
);
ALTER TABLE public."users" ADD COLUMN IF NOT EXISTS "is_administrator" boolean DEFAULT false;
CREATE TABLE IF NOT EXISTS public."users_memberships" (
  "_order" integer NOT NULL,
  "_parent_id" integer NOT NULL,
  "id" character varying NOT NULL,
  "design_system_id" integer NOT NULL,
  "role" public.enum_users_memberships_role NOT NULL DEFAULT 'reader'::public.enum_users_memberships_role
);
DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='media_design_system_id_design_systems_id_fk' AND connamespace='public'::regnamespace) THEN ALTER TABLE public."media" ADD CONSTRAINT "media_design_system_id_design_systems_id_fk" FOREIGN KEY (design_system_id) REFERENCES public.design_systems(id) ON DELETE SET NULL; END IF; END $$;
DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='publication_events_pkey' AND connamespace='public'::regnamespace) THEN ALTER TABLE public."publication_events" ADD CONSTRAINT "publication_events_pkey" PRIMARY KEY (id); END IF; END $$;
DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='payload_locked_documents_rels_publication_events_fk' AND connamespace='public'::regnamespace) THEN ALTER TABLE public."payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_publication_events_fk" FOREIGN KEY (publication_events_id) REFERENCES public.publication_events(id) ON DELETE CASCADE; END IF; END $$;
DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='publication_events_design_system_id_design_systems_id_fk' AND connamespace='public'::regnamespace) THEN ALTER TABLE public."publication_events" ADD CONSTRAINT "publication_events_design_system_id_design_systems_id_fk" FOREIGN KEY (design_system_id) REFERENCES public.design_systems(id) ON DELETE SET NULL; END IF; END $$;
DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='users_memberships_design_system_id_design_systems_id_fk' AND connamespace='public'::regnamespace) THEN ALTER TABLE public."users_memberships" ADD CONSTRAINT "users_memberships_design_system_id_design_systems_id_fk" FOREIGN KEY (design_system_id) REFERENCES public.design_systems(id) ON DELETE SET NULL; END IF; END $$;
DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='users_memberships_parent_id_fk' AND connamespace='public'::regnamespace) THEN ALTER TABLE public."users_memberships" ADD CONSTRAINT "users_memberships_parent_id_fk" FOREIGN KEY (_parent_id) REFERENCES public.users(id) ON DELETE CASCADE; END IF; END $$;
DO $$ BEGIN IF NOT EXISTS (SELECT 1 FROM pg_constraint WHERE conname='users_memberships_pkey' AND connamespace='public'::regnamespace) THEN ALTER TABLE public."users_memberships" ADD CONSTRAINT "users_memberships_pkey" PRIMARY KEY (id); END IF; END $$;
CREATE INDEX IF NOT EXISTS users_memberships_order_idx ON public.users_memberships USING btree (_order);
CREATE INDEX IF NOT EXISTS users_memberships_parent_id_idx ON public.users_memberships USING btree (_parent_id);
CREATE INDEX IF NOT EXISTS users_memberships_design_system_idx ON public.users_memberships USING btree (design_system_id);
CREATE INDEX IF NOT EXISTS publication_events_design_system_idx ON public.publication_events USING btree (design_system_id);
CREATE INDEX IF NOT EXISTS publication_events_updated_at_idx ON public.publication_events USING btree (updated_at);
CREATE INDEX IF NOT EXISTS publication_events_created_at_idx ON public.publication_events USING btree (created_at);
CREATE INDEX IF NOT EXISTS media_design_system_idx ON public.media USING btree (design_system_id);
CREATE INDEX IF NOT EXISTS payload_locked_documents_rels_publication_events_id_idx ON public.payload_locked_documents_rels USING btree (publication_events_id);
