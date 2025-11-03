# PKBM Monorepo

Monorepo ini berisi **aplikasi Backend, Frontend User (KG), dan Frontend Admin (KG Admin)** untuk sistem PKBM.  
Dikelola menggunakan **[Nx](https://nx.dev/)** agar manajemen dependensi, build, dan run antar project lebih efisien.

---

## 📂 Struktur Project

```
pkbm-/
├── apps/
│   ├── backend/       → REST API (Express/Node)
│   ├── kg/            → Frontend user (Next.js)
│   ├── kg-admin/      → Frontend admin (Next.js)
│   ├── kg-e2e/        → Testing end-to-end untuk KG
│   └── kg-admin-e2e/  → Testing end-to-end untuk KG Admin
├── nx.json
├── package.json
├── tsconfig.base.json
└── ...
```

---

## 🧰 Prasyarat

Sebelum memulai, pastikan kamu sudah install:

- **Node.js** ≥ 16
- **pnpm** (direkomendasikan)
  ```bash
  npm install -g pnpm
  pnpm setup
  source ~/.bashrc
  ```
- **Nx CLI (opsional tapi disarankan)**
  ```bash
  pnpm add -g nx
  ```

---

## ⚙️ Instalasi

Clone repo ini dan install semua dependensi dari root:

```bash
pnpm install
```

> Nx dan pnpm akan otomatis mendeteksi semua dependency di setiap app.

---

## 🔑 Konfigurasi Environment

Setiap aplikasi memiliki file `.env` sendiri:

```
apps/
├── backend/.env
├── kg/.env
└── kg-admin/.env
```

Contoh konfigurasi:

**apps/backend/.env**
```
PORT=4000
DATABASE_URL=postgres://user:pass@localhost:5432/db_pkbm
NODE_ENV=development
```

**apps/kg/.env**
```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

**apps/kg-admin/.env**
```
NEXT_PUBLIC_API_URL=http://localhost:4000/admin
```

---

## 🚀 Menjalankan Aplikasi

Kamu bisa menjalankan aplikasi langsung dari Nx CLI:

### 1. Jalankan backend
```bash
npx nx serve backend
```

### 2. Jalankan frontend user
```bash
npx nx serve kg
```

### 3. Jalankan frontend admin
```bash
npx nx serve kg-admin
```

### 4. Jalankan semuanya bersamaan (opsional)
```bash
npx nx run-many --target=serve --all
```

---

## 🧩 Nx Commands Berguna

| Command | Deskripsi |
|----------|------------|
| `npx nx graph` | Lihat visualisasi hubungan antar project |
| `npx nx build <project>` | Build project tertentu |
| `npx nx serve <project>` | Jalankan project |
| `npx nx lint <project>` | Jalankan linting |
| `npx nx test <project>` | Jalankan test |
| `npx nx run-many --target=serve --all` | Jalankan semua app sekaligus |

---

## 🧠 Catatan Pengembangan

- Pastikan environment masing-masing app sudah sesuai sebelum menjalankan.
- Gunakan `pnpm` agar caching & dependency antar project lebih efisien.
- Semua perubahan di dalam `apps/backend` atau `apps/kg` otomatis terdeteksi Nx saat development mode (`serve`).

---

## 👥 Kontributor

- **Pengembang PKBM**
- Open for internal collaboration and further extension.

---

## 📄 Lisensi

Proyek ini bersifat internal dan digunakan untuk keperluan PKBM.  
Silakan hubungi maintainer sebelum menggunakan di luar konteks proyek ini.
