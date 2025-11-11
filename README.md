# MiniLibrary - Smart City Next.js App

A modern Next.js application for smart city content management with admin panel, built with TypeScript, Tailwind CSS, and Prisma.

## 🌐 Demo

[View Live Demo](https://minilibrary.sikcb.my.id/)

## ✨ Features

### 🏙️ Smart City Content Management
- **Dynamic Content Pages**: Create and manage rich content about smart city concepts
- **Smart City Pillars**: Dedicated sections covering the 6 fundamental pillars of smart cities
- **Lampung Implementation**: Specific content about smart city implementation in Lampung province
- **Technology Stack**: Comprehensive information about technologies used in smart cities

### 🎯 Interactive Quiz System
- **Smart City Knowledge Quiz**: 10-question interactive quiz testing smart city knowledge
- **Real-time Scoring**: Immediate feedback and scoring system
- **Timer Functionality**: 10-minute time limit for completion
- **Progress Tracking**: Visual progress bar and question navigation
- **Responsive Design**: Optimized for all device sizes
- **Animated UI**: Smooth transitions and modern animations

### 👥 Team Member Management
- **Team Profiles**: Add and manage team member information
- **Role-based Access**: Different permissions for team members
- **Profile Management**: Update team member details and photos

### 🔐 Authentication & Security
- **JWT Authentication**: Secure token-based authentication
- **Admin Panel**: Protected admin dashboard for content management
- **Password Hashing**: bcrypt encryption for secure password storage
- **Session Management**: Proper login/logout functionality

### 📱 User Experience
- **Responsive Design**: Mobile-first approach with Radix UI components
- **Modern UI**: Beautiful gradients, animations, and glassmorphism effects
- **Accessibility**: WCAG compliant design with proper contrast and navigation
- **Fast Performance**: Optimized Next.js 16 with App Router

### 🗄️ Database & Backend
- **PostgreSQL Database**: Robust relational database with Prisma ORM
- **API Routes**: RESTful API endpoints for all operations
- **File Upload**: Image upload functionality for content and profiles
- **Data Validation**: Server-side validation and error handling

### ☁️ Deployment & DevOps
- **Vercel Ready**: Optimized for Vercel deployment platform
- **Environment Configuration**: Flexible environment variable setup
- **Database Migrations**: Automated database schema management
- **Build Optimization**: Production-ready build configuration

## 📋 Public Pages

The application includes several public-facing pages:

- **Home Page** (`/`): Landing page with overview and navigation
- **Smart City Pillars** (`/smart-city-pillars`): Information about the 6 pillars of smart cities
- **What is Smart City** (`/what-is-smart-city`): Introduction to smart city concepts
- **Smart Lampung** (`/smart-lampung`): Lampung-specific smart city implementation
- **Technology Stack** (`/tech-stack`): Technologies and infrastructure details
- **Benefits** (`/benefits`): Benefits of smart city implementation
- **Our Team** (`/our-team`): Team member profiles and information
- **Quiz** (`/quiz`): Interactive smart city knowledge assessment
- **Setup** (`/setup`): Initial setup and configuration page

## 🛠️ Tech Stack

- **Framework:** Next.js 16 with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Radix UI
- **Database:** PostgreSQL with Prisma ORM
- **Authentication:** JWT with bcrypt
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- PostgreSQL database (local or Vercel Postgres)

### Installation

1. Clone the repository:

```bash
git clone https://github.com/muris11/minilibrary-smart-city-nextjs.git
cd minilibrary-smart-city-nextjs
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env
```

Edit `.env` with your database URL:

```env
JWT_SECRET="your-jwt-secret-here"
DATABASE_URL="postgresql://username:password@localhost:5432/minilibrary"
```

4. Set up the database:

```bash
# Generate Prisma client
npm run db:generate

# Run migrations (if using local PostgreSQL)
npx prisma migrate dev

# Create admin user
npm run db:setup
```

5. Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Database Setup

### Using Vercel Postgres (Recommended)

1. Create a Vercel Postgres database:

   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Create a new project or go to existing project
   - Go to Storage → Create Database → Postgres
   - Copy the `DATABASE_URL` from the `.env.local` tab

2. Add environment variables in Vercel:

   - `DATABASE_URL` - Your Vercel Postgres connection string
   - `JWT_SECRET` - A secure random string

3. Deploy and run migrations:

```bash
# This will run automatically on Vercel deployment
npm run db:migrate
npm run db:setup
```

### Using Local PostgreSQL

1. Install PostgreSQL locally
2. Create a database named `minilibrary`
3. Update `DATABASE_URL` in `.env`
4. Run migrations:

```bash
npx prisma migrate dev
npm run db:setup
```

## Admin Access

Default admin credentials:

- **Email:** admin@gmail.com
- **Password:** admin

## API Routes

### Authentication Endpoints
- `POST /api/auth/login` - User authentication with JWT token generation
- `POST /api/auth/logout` - Token invalidation and logout
- `POST /api/setup/admin` - Initial admin user creation

### Admin Content Management
- `GET /api/admin/content` - Retrieve all content pages with pagination
- `POST /api/admin/content` - Create new content page with rich text support
- `GET /api/admin/content/[id]` - Get specific content page by ID
- `PUT /api/admin/content/[id]` - Update existing content page
- `DELETE /api/admin/content/[id]` - Remove content page

### Admin Team Management
- `GET /api/admin/team` - Get all team members with filtering options
- `POST /api/admin/team` - Add new team member with profile data
- `GET /api/admin/team/[id]` - Retrieve specific team member details
- `PUT /api/admin/team/[id]` - Update team member information
- `DELETE /api/admin/team/[id]` - Remove team member

### File Management
- `POST /api/admin/upload` - Upload and store images (avatars, content images)
- `GET /api/admin/test-upload` - Test file upload functionality

### Utility Endpoints
- `GET /api/health` - Application health check
- `GET /api/admin/test-auth` - Authentication testing endpoint

## 🎮 Quiz Feature Details

The interactive quiz system includes:

- **10 Multiple Choice Questions**: Covering smart city pillars, Lampung implementation, and technology concepts
- **10-Minute Time Limit**: Encourages focused completion
- **Real-time Progress**: Visual progress bar showing completion status
- **Answer Validation**: Immediate feedback on correct/incorrect answers
- **Score Calculation**: Percentage-based scoring with performance messages
- **Responsive Design**: Optimized for mobile and desktop devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Retry Functionality**: Ability to retake the quiz after completion

## 🗄️ Database Schema

The application uses PostgreSQL with the following main entities:

### User Model
- `id`: Primary key
- `email`: Unique email address
- `password`: Hashed password
- `role`: User role (admin, etc.)
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

### Content Model
- `id`: Primary key
- `title`: Content title
- `content`: Rich text content (JSON)
- `slug`: URL-friendly identifier
- `published`: Publication status
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

### TeamMember Model
- `id`: Primary key
- `name`: Team member name
- `position`: Job title/role
- `bio`: Biography/description
- `imageUrl`: Profile image URL
- `socialLinks`: Social media links (JSON)
- `order`: Display order
- `createdAt`: Creation timestamp
- `updatedAt`: Last update timestamp

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect to Vercel:
   - Import your GitHub repository
   - Vercel will auto-detect Next.js
3. Configure environment variables:
   - `DATABASE_URL`
   - `JWT_SECRET`
4. Deploy!

The build process will automatically:

- Generate Prisma client
- Run database migrations
- Create admin user

### Manual Deployment

```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/                          # Next.js App Router
│   ├── api/                      # API routes
│   │   ├── admin/               # Admin-only API endpoints
│   │   │   ├── content/         # Content management APIs
│   │   │   ├── team/            # Team management APIs
│   │   │   ├── test-auth/       # Authentication testing
│   │   │   ├── test-upload/     # File upload testing
│   │   │   └── upload/          # File upload endpoint
│   │   ├── auth/                # Authentication APIs
│   │   │   ├── login/           # User login
│   │   │   └── logout/          # User logout
│   │   ├── health/              # Health check endpoint
│   │   └── setup/               # Initial setup APIs
│   │       └── admin/           # Admin user creation
│   ├── admin/                   # Admin dashboard pages
│   ├── benefits/                # Benefits page
│   ├── login/                   # Login page
│   ├── our-team/                # Team page
│   ├── quiz/                    # Interactive quiz page
│   ├── setup/                   # Setup/configuration page
│   ├── smart-city-pillars/      # Smart city pillars page
│   ├── smart-lampung/           # Lampung implementation page
│   ├── tech-stack/              # Technology stack page
│   ├── what-is-smart-city/      # Smart city introduction page
│   ├── global.css               # Global styles
│   ├── layout.tsx               # Root layout component
│   ├── not-found.tsx            # 404 error page
│   ├── page.tsx                 # Home page
│   └── sitemap.ts               # Sitemap generation
├── components/                  # Reusable React components
│   ├── ui/                      # Radix UI components
│   └── ...                      # Custom components
├── hooks/                       # Custom React hooks
├── lib/                         # Utility libraries
│   ├── auth.ts                  # Authentication utilities
│   ├── mock-data.ts             # Mock data for development
│   └── utils.ts                 # General utilities
├── component/                   # Additional components
└── ...

prisma/
├── schema.prisma                # Database schema definition
└── migrations/                  # Database migration files

public/                          # Static assets
├── images/                      # Image assets
├── uploads/                     # User uploaded files
├── manifest.json                # PWA manifest
├── robots.txt                   # Search engine crawling rules
└── ...

scripts/                         # Utility scripts
└── create-admin.ts              # Admin user creation script

package.json                     # Dependencies and scripts
tsconfig.json                    # TypeScript configuration
tailwind.config.js               # Tailwind CSS configuration
next.config.ts                   # Next.js configuration
eslint.config.mjs                # ESLint configuration
postcss.config.mjs               # PostCSS configuration
components.json                  # Radix UI configuration
vercel.json                      # Vercel deployment configuration
```

## 🚀 Development Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
npm run type-check       # TypeScript type checking

# Database
npm run db:generate      # Generate Prisma client
npm run db:migrate       # Run database migrations
npm run db:setup         # Create admin user
npm run db:push          # Push schema changes to database
npm run db:studio        # Open Prisma Studio

# Testing
npm run test             # Run tests (if configured)
npm run test:watch       # Run tests in watch mode
```

## 🔄 Development Workflow

1. **Local Development**:
   ```bash
   npm install
   npm run db:generate
   npm run dev
   ```

2. **Database Changes**:
   ```bash
   npx prisma migrate dev --name your-migration-name
   npm run db:generate
   ```

3. **Adding New Features**:
   - Create components in `src/components/`
   - Add API routes in `src/app/api/`
   - Create pages in `src/app/`
   - Update database schema in `prisma/schema.prisma`

4. **Deployment**:
   - Push to GitHub main branch
   - Vercel automatically deploys
   - Database migrations run automatically

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
