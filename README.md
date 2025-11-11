# MiniLibrary - Smart City Next.js App

A modern Next.js application for smart city content management with admin panel, built with TypeScript, Tailwind CSS, and Prisma.

## Features

- 🏙️ Smart City Content Management
- 👥 Team Member Management
- 📝 Rich Text Content Pages
- 🔐 JWT Authentication
- 📱 Responsive Design with Radix UI
- 🗄️ PostgreSQL Database with Prisma
- ☁️ Vercel Deployment Ready

## Tech Stack

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

### Authentication

- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Admin Content Management

- `GET /api/admin/content` - Get all content pages
- `POST /api/admin/content` - Create content page
- `GET /api/admin/content/[id]` - Get specific content page
- `PUT /api/admin/content/[id]` - Update content page
- `DELETE /api/admin/content/[id]` - Delete content page

### Admin Team Management

- `GET /api/admin/team` - Get all team members
- `POST /api/admin/team` - Create team member
- `GET /api/admin/team/[id]` - Get specific team member
- `PUT /api/admin/team/[id]` - Update team member
- `DELETE /api/admin/team/[id]` - Delete team member

### File Upload

- `POST /api/admin/upload` - Upload images (local storage)

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

## Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── admin/             # Admin pages
│   └── ...                # Public pages
├── components/            # Reusable components
├── lib/                   # Utilities and configurations
└── ...

prisma/
├── schema.prisma          # Database schema
└── migrations/            # Database migrations

public/                    # Static assets
scripts/                   # Setup scripts
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is licensed under the MIT License.
