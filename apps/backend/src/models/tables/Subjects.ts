import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsAttributes {
  id?: string;
  name: string;
  subject_code: string;
  duration_hours?: number;
  level?: number;
  teacher_id?: string;
  indicator?: string;
  study_experience?: string;
  teaching_materials?: string;
  basic_competencies?: string;
  tools_needed?: string;
  scoring?: string;
  description?: string;
  thumbnail: string;
  credit?: number;
  slug: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  thumbnail_id?: number;
  is_available?: boolean;
  type?: string;
  start_at?: Date;
  brochure?: string;
  link_whatsapp_group?: string;
  category?: string;
  credits?: number;
  semester?: number;
  instructor_id?: string;
}

export type SubjectsCreationAttributes = Optional<SubjectsAttributes, 'id' | 'duration_hours' | 'level' | 'teacher_id' | 'indicator' | 'study_experience' | 'teaching_materials' | 'basic_competencies' | 'tools_needed' | 'scoring' | 'description' | 'credit' | 'deleted_at' | 'thumbnail_id' | 'is_available' | 'type' | 'start_at' | 'brochure' | 'link_whatsapp_group' | 'category' | 'credits' | 'semester' | 'instructor_id'>;

export class Subjects extends Model<SubjectsAttributes, SubjectsCreationAttributes> implements SubjectsAttributes {
  declare id?: string;
  declare name: string;
  declare subject_code: string;
  declare duration_hours?: number;
  declare level?: number;
  declare teacher_id?: string;
  declare indicator?: string;
  declare study_experience?: string;
  declare teaching_materials?: string;
  declare basic_competencies?: string;
  declare tools_needed?: string;
  declare scoring?: string;
  declare description?: string;
  declare thumbnail: string;
  declare credit?: number;
  declare slug: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare thumbnail_id?: number;
  declare is_available?: boolean;
  declare type?: string;
  declare start_at?: Date;
  declare brochure?: string;
  declare link_whatsapp_group?: string;
  declare category?: string;
  declare credits?: number;
  declare semester?: number;
  declare instructor_id?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Subjects {
    Subjects.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        subject_code: { type: DataTypes.STRING, allowNull: false },
        duration_hours: { type: DataTypes.INTEGER, allowNull: true },
        level: { type: DataTypes.INTEGER, allowNull: true },
        teacher_id: { type: DataTypes.UUID, allowNull: true },
        indicator: { type: DataTypes.TEXT, allowNull: true },
        study_experience: { type: DataTypes.TEXT, allowNull: true },
        teaching_materials: { type: DataTypes.TEXT, allowNull: true },
        basic_competencies: { type: DataTypes.TEXT, allowNull: true },
        tools_needed: { type: DataTypes.TEXT, allowNull: true },
        scoring: { type: DataTypes.TEXT, allowNull: true },
        description: { type: DataTypes.TEXT, allowNull: true },
        thumbnail: { type: DataTypes.TEXT, allowNull: false },
        credit: { type: DataTypes.INTEGER, allowNull: true },
        slug: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        thumbnail_id: { type: DataTypes.INTEGER, allowNull: true },
        is_available: { type: DataTypes.BOOLEAN, allowNull: true },
        type: { type: DataTypes.STRING, allowNull: true },
        start_at: { type: DataTypes.DATE, allowNull: true },
        brochure: { type: DataTypes.TEXT, allowNull: true },
        link_whatsapp_group: { type: DataTypes.STRING, allowNull: true },
        category: { type: DataTypes.STRING, allowNull: true },
        credits: { type: DataTypes.INTEGER },
        semester: { type: DataTypes.INTEGER, allowNull: true },
        instructor_id: { type: DataTypes.UUID, allowNull: true }
      },
      {
        sequelize,
        tableName: 'subjects',
        timestamps: true,
        underscored: false,
      }
    );
    return Subjects;
  }
}
