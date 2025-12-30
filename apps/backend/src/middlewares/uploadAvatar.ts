import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { RequestHandler } from 'express'; // <-- tambahkan ini

const uploadDir = path.join(__dirname, '../../upploads/avatar');

if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, uploadDir);
  },
  filename: (_req, file, cb) => {
    const unique = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, unique + ext);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 2 * 1024 * 1024 },
  fileFilter: (_req, file, cb) => {
    const allowed = ['image/jpeg', 'image/jpg', 'image/png'];
    if (!allowed.includes(file.mimetype)) {
      return cb(new Error('Only .jpeg, .jpg and .png format allowed!'));
    }
    cb(null, true);
  },
});

// === PERBAIKAN DI SINI ===
export const uploadAvatar: RequestHandler = upload.single('avatar');
