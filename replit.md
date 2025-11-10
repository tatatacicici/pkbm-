# Overview

KampusGratis is an educational platform providing free online learning programs, particularly focused on Paket-C (high school equivalency) education in Indonesia. The project is built as an Nx monorepo containing multiple Next.js applications, a Node.js/Express backend, and shared libraries for components and utilities.

The platform serves two primary user groups:
- **Students** - Peserta Paket C who access learning materials, quizzes, discussions, events, job opportunities, and track their progress
- **Administrators** - Manage content, users, and platform operations

# Recent Changes

## November 2025 - My Study (Studi-Ku) Feature Implementation

**Backend Implementation:**
- ✅ Installed backend dependencies (nodemon, ts-node, Sequelize, JWT, bcrypt, etc.)
- ✅ Created comprehensive database schema for my-study feature:
  - Tables: subjects, sessions, modules, quizzes, quiz_questions, quiz_answers, assignments
  - Progress tracking: user_subjects, user_module_progress, user_quiz_attempts, user_assignment_submissions
  - Supporting tables: users, otps, roles, watched_videos
- ✅ Implemented MyStudyController with all endpoints:
  - GET /api/v1/studi-ku/user - Get user's subjects
  - GET /api/v2/my-study - Get subjects with stats (v2)
  - GET /api/v3/my-study/subjects/:id/sessions - Get subject sessions
  - GET /api/v2/my-study/subjects/:id/sessions/:id/modules - Get session modules
  - GET /api/v2/my-study/subjects/:id/sessions/:id/quizzes - Get session quizzes
  - GET /api/v2/my-study/subjects/:id/sessions/:id/assignments - Get session assignments
  - POST /api/v1/studi-ku/module/:id/resume - Submit module resume
  - POST /api/v1/studi-ku/quiz/submit/:id - Submit quiz answers
  - POST /api/v2/my-study/.../assignments/:id/submission - Submit assignment
- ✅ Configured JWT authentication with JWT_SECRET
- ✅ Created sample data for testing (Matematika Dasar subject with sessions, modules, quiz, assignment)
- ✅ Backend server running successfully on port 3000

**Frontend Configuration:**
- ✅ Created .env.local to point to local backend (http://localhost:3000/api)
- ✅ Frontend studi-ku pages at /app/studi-ku ready to connect to backend
- ✅ MyStudyModule component uses useGetMyStudyv2 hook for data fetching

**Authentication:**
- ✅ JWT-based authentication system working
- ✅ Test user created: test@kampusgratis.id / test123
- ✅ All my-study endpoints protected with authMiddleware
- ✅ Token verification working correctly

**Database:**
- PostgreSQL database provisioned and configured
- All required tables created with proper relationships and indexes
- Sample data available for testing

**Next Steps:**
- Test frontend integration with backend
- Add more sample data if needed
- Verify all my-study workflows (modules, quizzes, assignments)

## November 2025 - Paket C Focus Refactoring (Previous)

Removed all campus/university-specific features to align with Paket C (non-formal education) target audience:

**Backend Changes:**
- Removed 60+ campus-related models: Faculty, Major, Subject, College*, CreditConversion, Semester, Assessment*, Session*, Mentor, Teacher, Grading*, Module*, Topic*, Assignment*, Submission*, Drill*, Simulation*
- Removed routes: /faculty, /major, /subject, /study-plan, /student-major, /scores (grades)
- Removed controllers and services for campus features
- Updated dashboard service to remove student subject enrollment tracking
- Fixed Sequelize model configurations (primaryKey for autoIncrement fields)
- Created .env with JWT_SECRET for authentication
- Backend server running successfully on port 3000

**Retained Features:**
- ✅ Quizzes and assessments
- ✅ Job listings and applications (Companies, Positions, JobApplications)
- ✅ Events and event registration
- ✅ Articles and discussion forums
- ✅ Certificates
- ✅ Leaderboard
- ✅ User authentication and profiles
- ✅ Notifications and messaging
- ✅ Dashboard with event and notification stats

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Monorepo Structure

The project uses **Nx** as a monorepo management tool to organize multiple applications and shared libraries:

- **apps/kg** - Main student-facing Next.js application
- **apps/kg-admin** - Administrative dashboard Next.js application  
- **apps/backend** - Express/TypeScript backend API with Sequelize ORM
- **libs/** - Shared component libraries (atoms, molecules, organisms, modules, utils)

## Frontend Architecture

### Technology Stack
- **Framework**: Next.js 14 with TypeScript
- **Styling**: Tailwind CSS with custom color system
- **State Management**: Recoil for global state, React Query for server state
- **Authentication**: NextAuth.js with middleware-based route protection
- **UI Components**: Headless UI, NextUI, Radix UI primitives
- **Forms**: Formik with validation resolvers
- **Real-time**: Socket.io client for notifications and messaging

### Design Patterns

**Component Architecture**: Atomic Design pattern with three levels:
- Atoms (basic UI elements)
- Molecules (simple component combinations)
- Organisms (complex component structures)

**Layout System**: Base layout with nested route-specific layouts for consistent page structure

**Authentication Flow**: 
- NextAuth middleware protects routes via pattern matching
- Session-based authentication with access/refresh tokens
- Support for credential and Google OAuth login
- OTP verification for registration and password reset

**State Management Strategy**:
- Recoil atoms for UI state (modals, filters, user preferences)
- React Query for API data caching and synchronization
- Session context from NextAuth for user authentication state

## Backend Architecture

### Technology Stack
- **Runtime**: Node.js v20
- **Framework**: Express.js
- **ORM**: Sequelize
- **Database**: PostgreSQL (configured but not explicitly used in codebase)
- **Authentication**: JWT token-based (inferred from frontend)

### Design Patterns

**Middleware Pipeline**:
- CORS configuration for cross-origin requests
- Request logging middleware
- Global error handling with custom error handlers
- 404 not found handler

**API Structure**:
- RESTful endpoints under `/api` prefix
- Modular route organization
- Standardized response helpers for success/error formats

**Database Layer**:
- Sequelize ORM for database abstraction
- Connection pooling and authentication on startup
- Model-based data access patterns

## Data Storage

### Database Strategy
- **Primary Database**: PostgreSQL via Sequelize ORM
- **Connection Management**: Single sequelize instance with authentication check on server start
- **Schema Management**: Model-based approach (models not included in provided files)

### Client-Side Storage
- Session storage via NextAuth
- React Query cache for API responses
- Browser local storage (inferred from typical Next.js patterns)

## Authentication & Authorization

### Authentication Mechanisms
- **NextAuth.js** handles authentication flows
- Multiple providers: Email/Password and Google OAuth
- JWT token storage in session (access_token, refresh_token)
- OTP verification for email confirmation and password resets

### Authorization Strategy
- **Middleware-based route protection** using NextAuth callbacks
- Role-based access implied by separate student/admin applications
- Token validation in API requests via Authorization header
- Session checks on protected routes

### Token Management
- Access tokens passed in Authorization headers
- Automatic token refresh handling (inferred from API interceptor)
- Sign-out on 401 responses to handle expired sessions

## External Dependencies

### Third-Party Services

**Authentication**:
- NextAuth.js for session management
- Google OAuth integration

**Analytics & Advertising**:
- Google Analytics (GA4) - gaId: G-YWYY60L1FX
- Google Tag Manager - gtmId: AW-16665747725
- Google AdSense - account: ca-pub-3520797496480015

**Real-time Communication**:
- Socket.io server at api.kampusgratis.id/io
- Separate endpoints for inbox and notifications
- Screen time tracking via WebSocket heartbeats

**Media Storage**:
- Cloudinary for image hosting (res.cloudinary.com)
- Support for YouTube video embeds (i.ytimg.com)
- Multiple external image domains configured in Next.js

**UI Libraries**:
- Headless UI for accessible components
- NextUI component library
- Radix UI primitives (tooltips, slots)
- Framer Motion for animations
- Chart.js for data visualization

**Form Handling**:
- Formik for form state management
- React Dropzone for file uploads
- React Date Range for date selection

**Rich Text**:
- Draft.js for text editing
- Froala Editor for WYSIWYG editing

**Development Tools**:
- Nx Cloud for build caching (access token in nx.json)
- ESLint and Prettier for code quality
- Jest and Cypress for testing

### API Integration Patterns

**Axios Configuration**:
- Base URL from environment variable
- Request interceptor adds Bearer token from session
- Response interceptor handles 401 errors with automatic sign-out
- Centralized error handling

**API Request Patterns**:
- Custom hooks for data fetching (useQuery patterns)
- Typed request/response interfaces
- Metadata response wrappers with pagination support

### Build & Deployment

**Build Tools**:
- Nx for monorepo task orchestration
- Next.js compiler for production builds
- TypeScript compilation with strict mode
- Nx Cloud for distributed caching

**Environment Configuration**:
- Environment-specific API URLs
- Separate development/production configurations
- Build optimization for production (console removal in admin app)