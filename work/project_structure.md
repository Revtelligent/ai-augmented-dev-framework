# Mind Game - Complete Folder Structure

## Overview

This is a Next.js application with TypeScript for a mind game/brain training platform. The project includes comprehensive testing (Jest, Playwright), database integration (Prisma), and AI-assisted development workflows.

## Root Directory Structure

```
mind-game/
├── .env                           # Environment variables
├── .git/                          # Git repository data
├── .github/                       # GitHub-specific files and CI/CD
│   ├── copilot-instructions.md    # GitHub Copilot instructions
│   ├── instructions/              # Development instructions
│   │   ├── backend.instructions.md
│   │   ├── codereview.instructions.md
│   │   ├── database.instructions.md
│   │   ├── frontend.instructions.md
│   │   ├── prompt-generation.instructions.md
│   │   └── testing.instructions.md
│   └── prompts/                   # AI prompt templates
│       ├── complete/              # Complete prompt examples
│       │   ├── 01-Ideation/
│       │   ├── 02-PRD/
│       │   └── 03-BDD/
│       ├── template/              # Prompt templates
│       │   ├── 01-Ideation/
│       │   ├── 02-PRD/
│       │   ├── 03-BDD/
│       │   └── 04-TDD/
│       ├── e2e_run_test.prompt.md
│       └── sample.prompt.md
├── .gitignore                     # Git ignore rules
├── .next/                         # Next.js build output (auto-generated)
├── README.md                      # Project documentation
├── TESTING.md                     # Testing documentation
├── components.json                # shadcn/ui component configuration
├── eslint.config.mjs             # ESLint configuration
├── jest.config.ts                # Jest testing configuration
├── jest.setup.ts                 # Jest test setup
├── next-env.d.ts                 # Next.js TypeScript declarations
├── next.config.ts                # Next.js configuration
├── node_modules/                 # Node.js dependencies (auto-generated)
├── package-lock.json             # Locked dependency versions
├── package.json                  # Project dependencies and scripts
├── playwright.config.ts          # Playwright E2E test configuration
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
├── __tests__/                    # Unit and integration tests
│   ├── setup.test.ts            # Test setup file
│   └── integration/             # Integration tests
│       └── home-quick-play-discovery.integration.test.tsx
├── app/                         # Next.js App Router directory
│   ├── favicon.ico              # Site favicon
│   ├── globals.css              # Global CSS styles
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page component
│   └── api/                     # API routes
│       └── challenges/          # Challenges API endpoints
│           └── route.ts         # Challenge API route handler
├── components/                  # React components
│   ├── quick-play/             # Quick play feature components
│   │   ├── QuickPlayBanner.test.tsx  # Component tests
│   │   └── QuickPlayBanner.tsx       # Quick play banner component
│   └── ui/                     # Reusable UI components (shadcn/ui)
│       ├── badge.tsx           # Badge component
│       ├── button.tsx          # Button component
│       ├── card.tsx            # Card component
│       ├── dialog.tsx          # Dialog component
│       └── progress.tsx        # Progress component
├── e2e/                        # End-to-end tests (Playwright)
│   ├── E2E-README.md          # E2E testing documentation
│   ├── quick-play-banner.spec.ts  # Quick play banner E2E tests
│   ├── sample.spec.ts         # Sample E2E test
│   └── helpers/               # E2E test utilities
│       └── screenshot-helper.ts    # Screenshot utility functions
├── lib/                       # Utility libraries and configurations
│   ├── analytics.ts           # Analytics utilities
│   ├── db.ts                 # Database connection and utilities
│   ├── utils.ts              # General utility functions
│   └── hooks/                # Custom React hooks
│       └── useResponsiveViewport.ts  # Responsive viewport hook
├── playwright-report/         # Playwright test reports (auto-generated)
│   ├── index.html            # Main report page
│   └── data/                 # Report data files
│       ├── *.png             # Screenshot files
│       ├── *.webm            # Video recordings
│       └── *.md              # Test result markdown files
├── prisma/                   # Database schema and tools
│   ├── mindbreak.db         # SQLite database file
│   ├── schema.prisma        # Database schema definition
│   └── seed.ts              # Database seeding script
├── public/                  # Static assets
│   ├── file.svg            # File icon
│   ├── globe.svg           # Globe icon
│   ├── next.svg            # Next.js logo
│   ├── vercel.svg          # Vercel logo
│   └── window.svg          # Window icon
├── test-results/           # Test execution results (auto-generated)
│   ├── .last-run.json     # Last test run metadata
│   ├── results.json       # Test results summary
│   ├── screenshots/       # Test failure screenshots
│   └── quick-play-banner-Quick-Pl-1775f--button-navigates-correctly-*/
│       ├── error-context.md    # Error context for failed tests
│       ├── test-failed-*.png   # Failure screenshots
│       └── video.webm          # Test execution videos
└── work/                   # Development and planning documents
    ├── code_structure.md   # This file - project structure documentation
    ├── features/          # Feature development documentation
    │   └── quick-play-mode/    # Quick play feature development
    │       ├── 01-IDEATION/    # Ideation phase documents
    │       ├── 02-PRD/         # Product Requirements Documents
    │       └── 03-BDD/         # Behavior Driven Development specs
    └── product/           # Product planning and research
        ├── 01_problem_exploration_output.md  # Problem analysis
        ├── 02_feature_ideas_output.md        # Feature ideation
        └── product-overview.md               # Product overview document
```

## Technology Stack

### Frontend

- **Next.js 14+**: React framework with App Router
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Reusable component library
- **React**: User interface library

### Backend

- **Next.js API Routes**: Server-side API endpoints
- **Prisma**: Database ORM and migration tool
- **SQLite**: Database (mindbreak.db)

### Testing

- **Jest**: Unit and integration testing
- **React Testing Library**: Component testing utilities
- **Playwright**: End-to-end testing framework
- **Cross-browser testing**: Chrome, Firefox, Safari, WebKit

### Development Tools

- **ESLint**: Code linting and style enforcement
- **PostCSS**: CSS processing
- **GitHub Copilot**: AI-assisted development
- **Custom prompts**: Structured AI development workflows

### Deployment & Build

- **Vercel**: Deployment platform (inferred from assets)
- **Node.js**: Runtime environment

## Key Features

### AI-Assisted Development

The project includes a comprehensive AI development workflow with:

- Structured prompts for different development phases
- GitHub Copilot instructions
- Development phase templates (Ideation, PRD, BDD, TDD)

### Comprehensive Testing Strategy

- Unit tests with Jest
- Integration tests for component interactions
- End-to-end tests with Playwright across multiple browsers
- Responsive testing for different viewport sizes

## Development Workflow

1. **Ideation**: Problem exploration and feature brainstorming
2. **PRD**: Product Requirements Documentation
3. **BDD**: Behavior Driven Development specifications
4. **TDD**: Test Driven Development implementation
5. **Code Review**: Automated and manual code review processes
6. **E2E Testing**: Cross-browser end-to-end validation

This structure supports a modern, scalable React application with robust testing, AI-assisted development, and comprehensive documentation.
