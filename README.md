# Pal Gabani — Portfolio

Personal portfolio site for **Pal Gabani**, AI Full Stack Developer. Built with Next.js (App Router), Tailwind CSS, Framer Motion, and a Postgres (Neon) backend via Prisma — content (hero, about, experience, projects, skills) is stored in the database and editable from a built-in admin dashboard, with a fallback to static data in `src/lib/data.ts` if the database is unreachable.

This is a sibling project to [krishna2700/portfolio](https://github.com/krishna2700/portfolio) — same architecture, **different theme** (violet/cyan "neural network" look instead of lime/monochrome), different content, and its **own separate Neon database** (not shared with the original).

## Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **UI:** Tailwind CSS v4, Framer Motion, GSAP
- **Database:** PostgreSQL via [Neon](https://neon.tech) (serverless driver) + Prisma ORM
- **Auth (admin only):** JWT session cookie (`jose`), bcrypt-hashed password
- **Email (contact form):** Nodemailer via Gmail SMTP (optional — form still saves to DB without it)

## What's in here

| Path | What it is |
|---|---|
| `src/app/page.tsx` | Public site — Hero, About, Experience, Work, Skills, Contact |
| `src/app/admin` | Password-protected admin dashboard to edit all site content + view contact messages & visitor analytics |
| `src/app/api/*` | REST routes backing both the public site and the admin dashboard |
| `src/lib/data.ts` | Static fallback content (used if the DB has no rows yet, or is unreachable) |
| `prisma/schema.prisma` | DB schema: Hero, About, Experience, Project, Skill, AdminUser, Message, PageView |

## Prerequisites

- Node.js 20+
- A Postgres database — a free [Neon](https://neon.tech) project is the easiest option (this project was built/tested against one)

## Setup

### 1. Install dependencies

```bash
npm install --legacy-peer-deps
```

(`--legacy-peer-deps` is needed because of a peer-dependency mismatch between some packages; see `vercel.json` / `.npmrc`.)

### 2. Configure environment variables

Copy `.env.example` to `.env.local` and fill in the values:

```bash
cp .env.example .env.local
```

| Variable | What it's for |
|---|---|
| `DATABASE_URL` | Pooled Postgres connection string (used by the app at runtime) |
| `DIRECT_URL` | Direct (non-pooled) Postgres connection string (used by Prisma Migrate) |
| `ADMIN_EMAIL` / `ADMIN_PASSWORD` | Login for `/admin`. Also used to seed the first admin user — **change the password after first login** |
| `ADMIN_JWT_SECRET` | Random secret used to sign the admin session JWT — generate with `openssl rand -hex 32` |
| `NEXTAUTH_SECRET` | Required by a `next-auth` import even though admin auth doesn't use NextAuth directly — generate with `openssl rand -hex 32` |
| `NEXTAUTH_URL` | `http://localhost:3000` for local dev |
| `SMTP_USER` / `SMTP_PASS` | Optional. Gmail address + a 16-character [App Password](https://myaccount.google.com/apppasswords) (not your real Gmail password) — powers contact-form email notifications. Leave blank to skip emailing; messages still save to the DB and show up in `/admin` |

**Getting a Neon database (if you don't have one yet):**
1. Create a free project at [console.neon.tech](https://console.neon.tech)
2. From the project dashboard, copy the pooled connection string into `DATABASE_URL` and the direct (non-pooled) one into `DIRECT_URL`

Prisma also reads env vars via `dotenv/config` (see `prisma.config.ts`), which only loads a plain `.env` file, not `.env.local`. So **also copy `.env.local` to `.env`** before running any `prisma` commands:

```bash
cp .env.local .env
```

(`.env` is gitignored, same as `.env.local` — this is just a local convenience step, not something to commit.)

### 3. Set up the database

```bash
npx prisma migrate deploy   # creates all tables
npx prisma generate         # generates the Prisma client
```

### 4. Run the dev server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). If something else is already using port 3000, Next.js will automatically pick the next free port (e.g. 3001) — check the terminal output for the actual URL.

### 5. Seed initial content

The database starts empty. Seed it once with the content baked into `src/lib/data.ts` (Pal's resume content) and create the first admin user:

```bash
curl -X POST http://localhost:3000/api/admin/seed
```

This is idempotent — it only inserts rows for tables that are currently empty, so it's safe to call again later without duplicating content.

### 6. Log into the admin dashboard

Go to [http://localhost:3000/admin](http://localhost:3000/admin) and log in with the `ADMIN_EMAIL` / `ADMIN_PASSWORD` you set in `.env.local`. From there you can edit every section of the site, read contact-form messages, and view visitor analytics — no redeploy needed, changes write straight to the database.

## Deploying

This project isn't deployed yet. When you're ready:

1. Push this repo to GitHub (already done if you're reading this from the repo).
2. Import it into [Vercel](https://vercel.com/new), framework preset "Next.js".
3. Add all the env vars from `.env.local` to the Vercel project (Project Settings → Environment Variables), and set `NEXTAUTH_URL` to your production URL.
4. Deploy. Prisma migrations run automatically via `npm run build` (`prisma generate && next build`) — but you'll still need to run `npx prisma migrate deploy` once (locally, pointed at the production `DIRECT_URL`, or via Vercel's build step) to create the tables on the production database before the first deploy serves traffic.
5. Update `metadataBase` in `src/app/layout.tsx` to your real production domain once you have one.

## Notes

- `vercel.json` sets the install command to `npm install --legacy-peer-deps` so Vercel builds don't choke on the peer-dependency mismatch mentioned above.
- The contact form degrades gracefully: if `SMTP_USER`/`SMTP_PASS` aren't set, emails are skipped but messages are still saved to the DB and visible in `/admin`.
- Analytics (page views / clicks) are stored in Postgres (`PageView` table) via `src/lib/track.ts` and the `/api/track/*` routes — no third-party analytics service involved.
