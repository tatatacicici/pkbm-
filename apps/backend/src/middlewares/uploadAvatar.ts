import multer from 'multer';
import path from 'path';
import fs from 'fs';


const uploadDir = path.join(__dirname, '../../upploads/avatar');

if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
    }

const storage = multer.diskStorage({
    destination:(_req, _file, cb) =>{
        cb(null, uploadDir);
    },
    filename:(_req, file, cb) =>{
        const unique = Date.now( ) + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, unique + ext);
    }
    });
const upload = multer({
    storage,
    limits: {
        fileSize: 2 * 1024 *1024
    },
    fileFilter: (_req, file, cb) =>{
        const alowed = ['image/jpeg', 'image/jpg', 'image/png'];
        if (!alowed.includes(file.mimetype)) {
            return cb(new Error('Only .jpeg, .jpg and .png format allowed!'));
        }
        cb(null, true);
    }
 });

 export const uploadAvatar = upload.single('avatar');