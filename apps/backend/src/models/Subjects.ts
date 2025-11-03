import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SubjectsAttributes {
  id: string;
  name: string;
  subjectCode: string;
  durationHours?: number;
  level?: number;
  teacherId?: string;
  indicator?: string;
  studyExperience?: string;
  teachingMaterials?: string;
  basicCompetencies?: string;
  toolsNeeded?: string;
  scoring?: string;
  description?: string;
  thumbnail: string;
  credit?: number;
  slug: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  thumbnailId?: number;
  isAvailable?: boolean;
  type?: string;
  startAt?: Date;
  brochure?: string;
  linkWhatsappGroup?: string;
  category?: string;
  credits: number;
  semester?: number;
  status: "ACTIVE" | "INACTIVE" | "DRAFT";
  instructorId?: string;
}

export type SubjectsPk = "id";
export type SubjectsId = Subjects[SubjectsPk];
export type SubjectsOptionalAttributes = "durationHours" | "level" | "teacherId" | "indicator" | "studyExperience" | "teachingMaterials" | "basicCompetencies" | "toolsNeeded" | "scoring" | "description" | "credit" | "deletedAt" | "thumbnailId" | "isAvailable" | "type" | "startAt" | "brochure" | "linkWhatsappGroup" | "category" | "credits" | "semester" | "status" | "instructorId";
export type SubjectsCreationAttributes = Optional<SubjectsAttributes, SubjectsOptionalAttributes>;

export class Subjects extends Model<SubjectsAttributes, SubjectsCreationAttributes> implements SubjectsAttributes {
  id!: string;
  name!: string;
  subjectCode!: string;
  durationHours?: number;
  level?: number;
  teacherId?: string;
  indicator?: string;
  studyExperience?: string;
  teachingMaterials?: string;
  basicCompetencies?: string;
  toolsNeeded?: string;
  scoring?: string;
  description?: string;
  thumbnail!: string;
  credit?: number;
  slug!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  thumbnailId?: number;
  isAvailable?: boolean;
  type?: string;
  startAt?: Date;
  brochure?: string;
  linkWhatsappGroup?: string;
  category?: string;
  credits!: number;
  semester?: number;
  status!: "ACTIVE" | "INACTIVE" | "DRAFT";
  instructorId?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof Subjects {
    return Subjects.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    subjectCode: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'subject_code'
    },
    durationHours: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      field: 'duration_hours'
    },
    level: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    teacherId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'teacher_id'
    },
    indicator: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    studyExperience: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'study_experience'
    },
    teachingMaterials: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'teaching_materials'
    },
    basicCompetencies: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'basic_competencies'
    },
    toolsNeeded: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'tools_needed'
    },
    scoring: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    thumbnail: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    credit: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    slug: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    },
    thumbnailId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'thumbnail_id'
    },
    isAvailable: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false,
      field: 'is_available'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    startAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'start_at'
    },
    brochure: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    linkWhatsappGroup: {
      type: DataTypes.STRING(255),
      allowNull: true,
      field: 'link_whatsapp_group'
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    credits: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    status: {
      type: DataTypes.ENUM("ACTIVE","INACTIVE","DRAFT"),
      allowNull: false,
      defaultValue: "DRAFT"
    },
    instructorId: {
      type: DataTypes.UUID,
      allowNull: true,
      field: 'instructor_id'
    }
  }, {
    sequelize,
    tableName: 'subjects',
    schema: 'public',
    timestamps: false
  });
  }
}
