import { Subjects } from "../../models/tables/Subjects";
import { Op, Sequelize } from "sequelize";
import { v4 as uuidv4 } from "uuid";

export class SubjectService {
  async getAll() {
    return Subjects.findAll({
      where: { deletedAt: { [Op.is]: null } },
      order: [["createdAt", "DESC"]],
    });
  }

  async getById(id: string) {
    return Subjects.findOne({
      where: { id, deletedAt: { [Op.is]: null } },
    });
  }

  async create(data: Partial<Subjects>) {
    const subject = await Subjects.create({
      id: uuidv4(),
      name: data.name,
      subjectCode: data.subjectCode,
      thumbnail: data.thumbnail,
      slug: data.slug,
      category: data.category,
      isAvailable: data.isAvailable ?? true,
      description: data.description,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as Subjects);

    return subject;
  }

  async update(id: string, data: Partial<Subjects>) {
    const subject = await Subjects.findOne({
      where: { id, deletedAt: { [Op.is]: null } },
    });

    if (!subject) {
      throw new Error("Subject not found");
    }

    await subject.update({
      ...data,
      updatedAt: new Date(),
    });

    return subject;
  }

  async delete(id: string) {
    const subject = await Subjects.findOne({
      where: { id, deletedAt: { [Op.is]: null } },
    });

    if (!subject) {
      throw new Error("Subject not found");
    }

    await subject.update({
      deletedAt: new Date(),
      updatedAt: new Date(),
    });

    return true;
  }
}
