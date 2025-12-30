import sequelize from '../config/database';
import { QueryTypes } from 'sequelize';

export class SubjectService {
  async getAll() {
    try {
      return await sequelize.query(
        `SELECT * FROM subjects WHERE deleted_at IS NULL ORDER BY created_at DESC`,
        { type: QueryTypes.SELECT }
      );
    } catch (error: any) {
      throw new Error(`Failed to fetch subjects: ${error.message}`);
    }
  }

  async getById(id: string) {
    try {
      const subject = await sequelize.query(
        `SELECT * FROM subjects WHERE id = $1 AND deleted_at IS NULL`,
        { bind: [id], type: QueryTypes.SELECT }
      );

      if (!subject || subject.length === 0) {
        throw new Error('Subject not found');
      }

      return subject[0];
    } catch (error: any) {
      throw new Error(`Failed to fetch subject: ${error.message}`);
    }
  }

  async create(data: any) {
    try {
      const result = await sequelize.query(
        `INSERT INTO subjects (id, title, description, code, created_at, updated_at)
         VALUES (gen_random_uuid(), $1, $2, $3, NOW(), NOW())
         RETURNING *`,
        { bind: [data.title, data.description, data.code], type: QueryTypes.INSERT }
      );

      return result[0];
    } catch (error: any) {
      throw new Error(`Failed to create subject: ${error.message}`);
    }
  }

  async update(id: string, data: any) {
    try {
      const result = await sequelize.query(
        `UPDATE subjects SET title = $2, description = $3, code = $4, updated_at = NOW()
         WHERE id = $1 AND deleted_at IS NULL
         RETURNING *`,
        { bind: [id, data.title, data.description, data.code], type: QueryTypes.UPDATE }
      );

      return result[0];
    } catch (error: any) {
      throw new Error(`Failed to update subject: ${error.message}`);
    }
  }

  async delete(id: string) {
    try {
      await sequelize.query(
        `UPDATE subjects SET deleted_at = NOW() WHERE id = $1`,
        { bind: [id], type: QueryTypes.UPDATE }
      );

      return { success: true, message: 'Subject deleted' };
    } catch (error: any) {
      throw new Error(`Failed to delete subject: ${error.message}`);
    }
  }
}