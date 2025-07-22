# Mind Game

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It's a cognitive training application with memory challenges and pattern recognition games.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm, yarn, pnpm, or bun package manager
- Git

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Revtelligent/ai-augmented-dev-framework.git
   cd mind-game
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up the database:**
   
   Create the database and run migrations:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

   Seed the database with initial data:
   ```bash
   npx prisma db seed
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open the application:**
   
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` - Start the development server with Turbopack
- `npm run build` - Build the application for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint to check for code issues
- `npm test` - Run Jest unit tests
- `npm run test:watch` - Run tests in watch mode
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:e2e` - Run Playwright end-to-end tests
- `npm run test:e2e:headed` - Run E2E tests with browser UI
- `npm run test:e2e:debug` - Debug E2E tests
- `npm run test:e2e:ui` - Run E2E tests with Playwright UI
- `npm run test:e2e:report` - Show Playwright test report

## Database Management

This project uses Prisma with SQLite as the database. Key commands:

- `npx prisma generate` - Generate Prisma client
- `npx prisma db push` - Push schema changes to database
- `npx prisma db seed` - Seed database with initial data
- `npx prisma studio` - Open Prisma Studio to view/edit data
- `npx prisma migrate dev` - Create and apply database migrations

## Tech Stack

- **Framework:** Next.js 15 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Database:** Prisma with SQLite
- **UI Components:** Radix UI
- **Testing:** Jest, React Testing Library, Playwright
- **Build Tool:** Turbopack (dev), Next.js (production)

## Project Structure

```
├── app/                    # Next.js App Router pages and layouts
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   └── quick-play/       # Game-specific components
├── lib/                  # Utility functions and hooks
├── prisma/               # Database schema and migrations
├── __tests__/            # Unit and integration tests
├── e2e/                  # End-to-end tests
└── public/               # Static assets
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests (`npm test` and `npm run test:e2e`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [Prisma Documentation](https://www.prisma.io/docs) - learn about Prisma ORM
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [Radix UI](https://www.radix-ui.com/) - low-level UI primitives