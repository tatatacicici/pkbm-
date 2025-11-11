# Sequelize Models - PKBM Database

Model Sequelize TypeScript yang di-generate otomatis dari dump SQL database PKBM.

## 📁 Struktur Direktori

```
src/models/
├── enums/              # 40 TypeScript enums dari database
│   ├── index.ts        # Export semua enums
│   └── *.ts            # Individual enum files
├── tables/             # 184 Model Sequelize
│   └── *.ts            # Individual model files
├── init-models.ts      # Inisialisasi model dan relasi
├── index.ts            # Main export file
└── README.md           # Dokumentasi ini
```

## 🚀 Instalasi Dependencies

```bash
npm install sequelize pg pg-hstore
npm install --save-dev @types/node
```

## 📖 Cara Penggunaan

### 1. Setup Database Connection

```typescript
import DatabaseConnection from './models';

// Inisialisasi koneksi database
const sequelize = DatabaseConnection.getInstance({
  database: 'pkbm_db',
  username: 'postgres',
  password: 'your_password',
  host: 'localhost',
  port: 5432,
  dialect: 'postgres',
});

// Koneksi ke database
await DatabaseConnection.connect();
```

### 2. Menggunakan Models

```typescript
import { DatabaseConnection } from './models';
import { Users, Subjects, Sessions } from './models';

// Dapatkan semua models
const models = DatabaseConnection.getModels();

// === CRUD Operations ===

// CREATE
const newUser = await models.Users.create({
  email: 'user@example.com',
  full_name: 'John Doe',
  password: 'hashed_password',
  created_at: new Date(),
  updated_at: new Date(),
});

// READ
const users = await models.Users.findAll({
  where: { is_banned: false },
  limit: 10,
});

const user = await models.Users.findByPk('user-uuid-here');

// UPDATE
await models.Users.update(
  { full_name: 'Jane Doe' },
  { where: { id: 'user-uuid-here' } }
);

// DELETE
await models.Users.destroy({
  where: { id: 'user-uuid-here' },
});
```

### 3. Menggunakan Relasi (Associations)

```typescript
// Subjects belongsTo Users (teacher)
const subject = await models.Subjects.findOne({
  where: { id: 'subject-uuid' },
  include: [
    {
      model: models.Users,
      as: 'teacher',
    },
  ],
});

// Users hasMany Subjects
const teacher = await models.Users.findOne({
  where: { id: 'teacher-uuid' },
  include: [
    {
      model: models.Subjects,
      as: 'subjects',
    },
  ],
});

// Complex queries dengan multiple relations
const sessionsWithDetails = await models.Sessions.findAll({
  include: [
    {
      model: models.Subjects,
      as: 'subject',
    },
  ],
  where: {
    session_no: {
      [Op.gte]: 1,
    },
  },
  limit: 10,
});
```

### 4. Query dengan Kondisi

```typescript
import { Op } from 'sequelize';

// Query dengan operator
const recentUsers = await models.Users.findAll({
  where: {
    created_at: {
      [Op.gte]: new Date('2024-01-01'),
    },
    is_banned: false,
  },
  order: [['created_at', 'DESC']],
  limit: 20,
});

// Query dengan LIKE
const searchSubjects = await models.Subjects.findAll({
  where: {
    name: {
      [Op.like]: '%Matematika%',
    },
    is_available: true,
  },
});
```

### 5. Transactions

```typescript
const t = await sequelize.transaction();

try {
  const user = await models.Users.create(
    {
      email: 'user@example.com',
      full_name: 'John Doe',
      created_at: new Date(),
      updated_at: new Date(),
    },
    { transaction: t }
  );

  const profile = await models.StudentProfiles.create(
    {
      user_id: user.id!,
      national_student_number: '2024001',
      current_gpa: 3.5,
      created_at: new Date(),
      updated_at: new Date(),
    },
    { transaction: t }
  );

  await t.commit();
  console.log('✅ Transaction committed');
} catch (error) {
  await t.rollback();
  console.error('❌ Transaction rolled back:', error);
}
```

### 6. Advanced Queries

```typescript
import { Op } from 'sequelize';

// Where clause dengan operators
const recentUsers = await models.Users.findAll({
  where: {
    created_at: {
      [Op.gte]: new Date('2024-01-01'),
    },
    email: {
      [Op.like]: '%@example.com',
    },
  },
});

// Aggregate functions
const userCount = await models.Users.count({
  where: { is_banned: false },
});

const stats = await models.Subjects.findAll({
  attributes: [
    'category',
    [sequelize.fn('COUNT', sequelize.col('id')), 'total'],
  ],
  group: ['category'],
});

// Raw queries (jika diperlukan)
const [results, metadata] = await sequelize.query(
  'SELECT * FROM users WHERE email = ?',
  {
    replacements: ['user@example.com'],
    type: QueryTypes.SELECT,
  }
);
```

## 📝 Model yang Tersedia

Database ini memiliki **184 tabel** dengan model yang di-generate:

### Core Models
- **Users** - User accounts
- **Subjects** - Educational subjects
- **Sessions** - Learning sessions
- **Modules** - Course modules
- **Assignments** - Student assignments
- **Quizzes** - Quiz/exam system
- **Articles** - Blog/article system

### Academic Models
- **CollegeAcademicCohorts** - Academic cohorts
- **CollegeClasses** - Classes
- **CollegeStudentRegistrations** - Student registrations
- **StudentProfiles** - Student profiles

### Assessment Models
- **Assessments** - Assessment system
- **GradingRubrics** - Grading criteria
- **SubmissionDocuments** - Submission docs

### Communication Models
- **ChatsConversations** - Chat system
- **DiscussionForums** - Forum discussions
- **Notifications** - Notification system

Dan banyak lagi... (total 184 models)

## 🎯 Enums yang Tersedia

**40 enums** tersedia untuk berbagai status dan kategori:

- `AdministrationsApprovalStatusEnum` - PENDING, APPROVED, REJECTED
- `ArticlesStatusEnum` - DRAFT, PUBLISHED
- `ModulesStatusEnum` - DRAFT, PUBLISHED
- `UsersGenderEnum` - Male, Female
- `SessionsStatusEnum` - DRAFT, PUBLISHED
- Dan 35 enums lainnya...

Lihat `src/models/enums/` untuk daftar lengkap.

## 🔗 Relasi Antar Model

Semua **197 foreign key relationships** dari database sudah di-convert menjadi Sequelize associations:

- **belongsTo** - Untuk referensi foreign key
- **hasMany** - Untuk reverse relationships
- **belongsToMany** - Untuk many-to-many (jika ada junction tables)

Contoh relasi otomatis:
```typescript
// Sessions belongsTo Subjects
Sessions.belongsTo(Subjects, { foreignKey: 'subject_id', as: 'subject' });

// Subjects hasMany Sessions
Subjects.hasMany(Sessions, { foreignKey: 'subject_id', as: 'sessions' });
```

## 🛠️ Development Tips

### Sync Database (Hati-hati di Production!)

```typescript
// HANYA UNTUK DEVELOPMENT!
// Jangan gunakan di production!

// Sync tanpa menghapus data
await DatabaseConnection.sync({ alter: true });

// Force sync (MENGHAPUS SEMUA DATA!)
await DatabaseConnection.sync({ force: true });
```

### Environment Variables

Buat file `.env`:

```env
DB_HOST=localhost
DB_PORT=5432
DB_NAME=pkbm_db
DB_USER=postgres
DB_PASSWORD=your_password
```

Gunakan dengan dotenv:

```typescript
import dotenv from 'dotenv';
dotenv.config();

const sequelize = DatabaseConnection.getInstance({
  database: process.env.DB_NAME!,
  username: process.env.DB_USER!,
  password: process.env.DB_PASSWORD!,
  host: process.env.DB_HOST!,
  port: parseInt(process.env.DB_PORT || '5432'),
  dialect: 'postgres',
});
```

## 📚 Resources

- [Sequelize Documentation](https://sequelize.org/docs/v6/)
- [Sequelize TypeScript](https://sequelize.org/docs/v6/other-topics/typescript/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)

## 🤝 Contributing

Model ini di-generate otomatis dari dump SQL. Jika ada perubahan pada schema database:

1. Export dump SQL baru
2. Jalankan script generator:
   ```bash
   node scripts/generate-models.js
   node scripts/create-models-improved.js
   ```

## ⚠️ Important Notes

- **Timestamps**: Model sudah dikonfigurasi dengan `timestamps: true` jika tabel memiliki `created_at` dan `updated_at`
- **Underscored**: Nama kolom menggunakan snake_case sesuai dengan database asli
- **Table Names**: Nama tabel tetap sama dengan database (tidak di-pluralize)
- **Type Safety**: Semua model sudah full TypeScript dengan type safety

## 📞 Support

Untuk pertanyaan atau issue, silakan buat issue di repository ini.

---

**Generated**: November 2025  
**Database**: PKBM (184 tables, 40 enums, 197 foreign keys)
