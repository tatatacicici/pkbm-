import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsAttributes {
  id?: any;
  name?: any;
  subject_code?: any;
  duration_hours?: any;
  level?: any;
  teacher_id?: any;
  indicator?: any;
  study_experience?: any;
  teaching_materials?: any;
  basic_competencies?: any;
  tools_needed?: any;
  scoring?: any;
  description?: any;
  thumbnail?: any;
  credit?: any;
  slug?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  thumbnail_id?: any;
  is_available?: any;
  type?: any;
  start_at?: any;
  brochure?: any;
  link_whatsapp_group?: any;
  category?: any;
  credits?: any;
  semester?: any;
  instructor_id?: any;
}

export type SubjectsCreationAttributes = Optional<SubjectsAttributes, 'id'>;

export class Subjects extends Model<SubjectsAttributes, SubjectsCreationAttributes> implements SubjectsAttributes {
  declare id?: any;
  declare name?: any;
  declare subject_code?: any;
  declare duration_hours?: any;
  declare level?: any;
  declare teacher_id?: any;
  declare indicator?: any;
  declare study_experience?: any;
  declare teaching_materials?: any;
  declare basic_competencies?: any;
  declare tools_needed?: any;
  declare scoring?: any;
  declare description?: any;
  declare thumbnail?: any;
  declare credit?: any;
  declare slug?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare thumbnail_id?: any;
  declare is_available?: any;
  declare type?: any;
  declare start_at?: any;
  declare brochure?: any;
  declare link_whatsapp_group?: any;
  declare category?: any;
  declare credits?: any;
  declare semester?: any;
  declare instructor_id?: any;

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
