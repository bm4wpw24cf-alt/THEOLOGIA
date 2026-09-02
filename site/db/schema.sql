-- THEOLOGIA – kommentarer
-- Kjør denne mot Postgres-databasen (Neon / Vercel Postgres) én gang:
--   vercel env pull .env.local
--   node --env-file=.env.local scripts/init-db.mjs
-- Skriptet deler filen på ";" og kjører hver setning for seg.
-- Trygg å kjøre flere ganger.

create table if not exists comments (
  id          bigint generated always as identity primary key,
  article     text        not null,
  author      text        not null,
  body        text        not null,
  approved    boolean     not null default false,
  ip_hash     text,
  created_at  timestamptz not null default now()
);

-- Migrasjon: la til for admin-redigering. Eksisterende rader får now().
alter table comments
  add column if not exists updated_at timestamptz not null default now();

create index if not exists comments_article_idx
  on comments (article, approved, created_at);

create index if not exists comments_ip_hash_idx
  on comments (ip_hash, created_at);
