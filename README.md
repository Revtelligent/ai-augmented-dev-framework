This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### 1. Install Dependencies

First, install the required npm packages:

```bash
npm install
```

### 2. Database Setup

This project uses Prisma with SQLite. Set up the database by following these steps:

First, create a `.env` file in the root directory and add the database URL:

```bash
DATABASE_URL="file:./mindbreak.db"
```

Then run the following commands to set up the database:

```bash
# Generate the Prisma client
npx prisma generate

# Create the database and run migrations
npx prisma migrate dev --name init

# Seed the database with initial data
npx tsx prisma/seed.ts
```

### 3. Run the Development Server

Now you can start the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Database Management

This project uses Prisma with SQLite for data persistence. The database includes:

- **Challenges**: Pre-configured brain training challenges with different difficulty levels
- **Quick Play Sessions**: User game sessions and scores
- **Users**: User information and profiles

### Useful Database Commands

```bash
# View your database in a web interface
npx prisma studio

# Reset the database (⚠️ This will delete all data)
npx prisma migrate reset

# Re-seed the database with initial challenges
npx tsx prisma/seed.ts
```

The database file (`mindbreak.db`) will be created in your project root after running the setup commands.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
