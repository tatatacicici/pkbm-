# Backend TypeScript - Express & Sequelize

Backend TypeScript lengkap dan siap produksi menggunakan Node.js v20, Express.js, dan Sequelize ORM dengan PostgreSQL.

## 🚀 Fitur

- **TypeScript** - Type-safe development
- **Express.js** - Web framework yang powerful dan minimalis
- **Sequelize ORM** - Object-Relational Mapping untuk PostgreSQL
- **PostgreSQL** - Database relational yang robust
- **ESLint + Prettier** - Code quality dan formatting
- **Jest** - Unit testing framework
- **Nodemon** - Hot reload untuk development
- **Error Handling** - Global error handler middleware
- **Request Logger** - Logging untuk setiap request
- **Response Helper** - Standardized JSON response format

## 📁 Struktur Folder

```
src/
├── config/
│   └── database.ts          # Konfigurasi koneksi Sequelize
├── models/
│   └── index.ts             # Export semua models
├── controllers/
│   └── base.controller.ts   # Base controller dengan ping endpoint
├── routes/
│   └── index.ts             # Definisi routes
├── middlewares/
│   ├── errorHandler.ts      # Global error handler
│   └── logger.ts            # Request logger
├── utils/
│   └── response.ts          # Helper untuk success/error response
├── app.ts                   # Inisialisasi Express app
└── server.ts                # Entry point aplikasi
```

## 🛠️ Setup

### Prerequisites

- Node.js v20
- PostgreSQL database

### Installation

```bash
cd apps/backend
npm install
```

### Environment Variables

Buat file `.env` berdasarkan `.env.example`:

```bash
cp .env.example .env
```

Edit `.env` dengan konfigurasi database Anda:

```env
PORT=3000
DB_HOST=localhost
DB_PORT=5432
DB_NAME=mydb
DB_USER=postgres
DB_PASS=postgres
```

## 🏃 Running

### Development

```bash
npm run dev
```

Server akan berjalan di `http://localhost:3000` dengan hot reload.

### Production

```bash
# Build TypeScript to JavaScript
npm run build

# Run production server
npm start
```

## 📝 Scripts

```json
{
  "dev": "nodemon src/server.ts",           // Development dengan hot reload
  "build": "tsc",                            // Compile TypeScript
  "start": "node dist/server.js",            // Run production build
  "lint": "eslint . --ext .ts",              // Lint code
  "lint:fix": "eslint . --ext .ts --fix",    // Fix lint issues
  "format": "prettier --write \"src/**/*.ts\"", // Format code
  "test": "jest --passWithNoTests"           // Run tests
}
```

## 🔍 API Endpoints

### Health Check

```http
GET /api/ping
```

**Response:**
```json
{
  "message": "pong"
}
```

## 📦 Dependencies

### Production

- `express` - Web framework
- `sequelize` - ORM untuk PostgreSQL
- `pg` & `pg-hstore` - PostgreSQL driver
- `dotenv` - Environment variables
- `cors` - CORS middleware

### Development

- `typescript` - TypeScript compiler
- `ts-node` - Execute TypeScript directly
- `nodemon` - Auto restart on file changes
- `eslint` & `@typescript-eslint/*` - Linting
- `prettier` - Code formatting
- `jest` & `ts-jest` - Testing
- `@types/*` - Type definitions

## 🎯 Response Format

### Success Response

```typescript
successResponse(res, message, data?, statusCode?)
```

**Example:**
```json
{
  "message": "Success message",
  "data": { ... }
}
```

### Error Response

```typescript
errorResponse(res, message, statusCode?, error?)
```

**Example:**
```json
{
  "message": "Error message",
  "error": { ... }
}
```

## 🔐 Security

- SSL/TLS untuk koneksi database
- CORS enabled
- Error handling yang aman (tidak expose sensitive info)

## 📊 Logging

Setiap request akan di-log dengan format:

```
[METHOD] /path - STATUS_CODE - DURATION
```

**Example:**
```
[GET] /api/ping - 200 - 5ms
```

## 🧪 Testing

```bash
npm test
```

Jest sudah dikonfigurasi dengan `ts-jest` untuk testing TypeScript files.

## 🎨 Code Quality

### Linting

```bash
npm run lint
npm run lint:fix
```

### Formatting

```bash
npm run format
```

## 📈 Next Steps

1. **Tambah Models** - Buat models di `src/models/`
2. **Tambah Controllers** - Implement business logic di `src/controllers/`
3. **Tambah Routes** - Define endpoints di `src/routes/`
4. **Tambah Middleware** - Custom middleware di `src/middlewares/`
5. **Write Tests** - Unit tests dengan Jest
6. **Database Migrations** - Setup Sequelize migrations

## 💡 Tips

- Gunakan `BaseController` sebagai template untuk controller lain
- Selalu gunakan `successResponse` dan `errorResponse` untuk konsistensi
- Logger middleware otomatis log semua request
- Error handler akan catch semua error dan return proper response

## 📝 License

MIT
