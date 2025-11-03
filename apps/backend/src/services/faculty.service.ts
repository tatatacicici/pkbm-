import { Faculties, FacultiesAttributes, FacultiesCreationAttributes } from '../models/Faculties';
import { v4 as uuidv4 } from 'uuid';

export class FacultyService {
  async getAllFaculties() {
    return await Faculties.findAll({
      where: { deletedAt: null as any },
      order: [['name', 'ASC']],
    });
  }

  async getFacultyById(id: string) {
    return await Faculties.findOne({
      where: { id, deletedAt: null as any },
    });
  }

  async createFaculty(data: Partial<FacultiesCreationAttributes>) {
    const faculty = await Faculties.create({
      id: uuidv4(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as FacultiesCreationAttributes);

    return faculty;
  }

  async updateFaculty(id: string, data: Partial<FacultiesAttributes>) {
    const faculty = await Faculties.findOne({
      where: { id, deletedAt: null as any },
    });

    if (!faculty) {
      throw new Error('Faculty not found');
    }

    await faculty.update(data);
    return faculty;
  }

  async deleteFaculty(id: string) {
    const faculty = await Faculties.findOne({
      where: { id, deletedAt: null as any },
    });

    if (!faculty) {
      throw new Error('Faculty not found');
    }

    await faculty.update({ deletedAt: new Date() });
  }
}
