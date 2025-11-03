import { Subjects, SubjectsAttributes, SubjectsCreationAttributes } from '../models/Subjects';
import { v4 as uuidv4 } from 'uuid';
import { Op } from 'sequelize';

interface GetSubjectsParams {
  page: number;
  limit: number;
  search?: string;
  majorId?: string;
}

export class SubjectService {
  async getAllSubjects(params: GetSubjectsParams) {
    const { page, limit, search, majorId } = params;
    const offset = (page - 1) * limit;

    const where: any = { deletedAt: null };

    if (search) {
      where[Op.or] = [
        { name: { [Op.iLike]: `%${search}%` } },
        { subjectCode: { [Op.iLike]: `%${search}%` } },
      ];
    }

    const { rows: subjects, count: total } = await Subjects.findAndCountAll({
      where,
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    return {
      subjects,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getSubjectById(id: string) {
    return await Subjects.findOne({
      where: { id, deletedAt: null },
    });
  }

  async createSubject(data: Partial<SubjectsCreationAttributes>) {
    const subject = await Subjects.create({
      id: uuidv4(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as SubjectsCreationAttributes);

    return subject;
  }

  async updateSubject(id: string, data: Partial<SubjectsAttributes>) {
    const subject = await Subjects.findOne({
      where: { id, deletedAt: null },
    });

    if (!subject) {
      throw new Error('Subject not found');
    }

    await subject.update(data);
    return subject;
  }

  async deleteSubject(id: string) {
    const subject = await Subjects.findOne({
      where: { id, deletedAt: null },
    });

    if (!subject) {
      throw new Error('Subject not found');
    }

    await subject.update({ deletedAt: new Date() });
  }
}
