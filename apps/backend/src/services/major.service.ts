import { Majors, MajorsAttributes, MajorsCreationAttributes } from '../models/Majors';
import { StudentMajors } from '../models/StudentMajors';
import { v4 as uuidv4 } from 'uuid';

export class MajorService {
  async getAllMajors(facultyId?: string) {
    const where: any = { deletedAt: null };
    
    if (facultyId) {
      where.facultyId = facultyId;
    }

    return await Majors.findAll({
      where,
      order: [['name', 'ASC']],
    });
  }

  async getMajorById(id: string) {
    return await Majors.findOne({
      where: { id, deletedAt: null as any },
    });
  }

  async enrollStudent(userId: string, majorId: string) {
    const major = await Majors.findByPk(majorId);
    
    if (!major) {
      throw new Error('Major not found');
    }

    const existing = await StudentMajors.findOne({
      where: { studentId: userId, majorId },
    });

    if (existing) {
      throw new Error('Already enrolled in this major');
    }

    const enrollment = await StudentMajors.create({
      id: uuidv4(),
      studentId: userId,
      majorId,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    return enrollment;
  }

  async createMajor(data: Partial<MajorsCreationAttributes>) {
    const major = await Majors.create({
      id: uuidv4(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as MajorsCreationAttributes);

    return major;
  }

  async updateMajor(id: string, data: Partial<MajorsAttributes>) {
    const major = await Majors.findOne({
      where: { id, deletedAt: null as any },
    });

    if (!major) {
      throw new Error('Major not found');
    }

    await major.update(data);
    return major;
  }

  async deleteMajor(id: string) {
    const major = await Majors.findOne({
      where: { id, deletedAt: null as any },
    });

    if (!major) {
      throw new Error('Major not found');
    }

    await major.update({ deletedAt: new Date() });
  }
}
