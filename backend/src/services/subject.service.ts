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
      // Preserve "Subject not found" error message
      if (error.message === 'Subject not found') {
        throw error;
      }
      throw new Error(`Failed to fetch subject: ${error.message}`);
    }
  }

  async create(data: any) {
    try {
      const result = await sequelize.query(
        `INSERT INTO subjects (id, name, description, subject_code, slug, thumbnail, created_at, updated_at)
         VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, NOW(), NOW())
         RETURNING *`,
        { 
          bind: [
            data.name || data.title, 
            data.description, 
            data.subject_code || data.code,
            data.slug || (data.name || data.title || '').toLowerCase().replace(/\s+/g, '-'),
            data.thumbnail || 'default-thumbnail.jpg'
          ], 
          type: QueryTypes.INSERT 
        }
      );

      return result[0];
    } catch (error: any) {
      throw new Error(`Failed to create subject: ${error.message}`);
    }
  }

  async update(id: string, data: any) {
    try {
      // Build dynamic update query based on provided fields
      const updates: string[] = [];
      const binds: any[] = [id];
      let bindIndex = 2;

      if (data.name !== undefined || data.title !== undefined) {
        updates.push(`name = $${bindIndex}`);
        binds.push(data.name || data.title);
        bindIndex++;
      }
      if (data.description !== undefined) {
        updates.push(`description = $${bindIndex}`);
        binds.push(data.description);
        bindIndex++;
      }
      if (data.subject_code !== undefined || data.code !== undefined) {
        updates.push(`subject_code = $${bindIndex}`);
        binds.push(data.subject_code || data.code);
        bindIndex++;
      }

      if (updates.length === 0) {
        throw new Error('No fields to update');
      }

      updates.push('updated_at = NOW()');

      const result = await sequelize.query(
        `UPDATE subjects SET ${updates.join(', ')}
         WHERE id = $1 AND deleted_at IS NULL
         RETURNING *`,
        { bind: binds, type: QueryTypes.SELECT }
      );

      // QueryTypes.SELECT returns array of rows
      if (!result || (result as any[]).length === 0) {
        throw new Error('Subject not found');
      }

      return result[0];
    } catch (error: any) {
      if (error.message === 'Subject not found' || error.message === 'No fields to update') {
        throw error;
      }
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