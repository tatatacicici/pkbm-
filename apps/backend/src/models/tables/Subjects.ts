import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsAttributes {
  id?: string;
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
  credits?: number;
  semester?: number;
  instructorId?: string;
}

export type SubjectsCreationAttributes = Optional<SubjectsAttributes, 'id' | 'durationHours' | 'level' | 'teacherId' | 'indicator' | 'studyExperience' | 'teachingMaterials' | 'basicCompetencies' | 'toolsNeeded' | 'scoring' | 'description' | 'credit' | 'deletedAt' | 'thumbnailId' | 'isAvailable' | 'type' | 'startAt' | 'brochure' | 'linkWhatsappGroup' | 'category' | 'credits' | 'semester' | 'instructorId'>;

export class Subjects extends Model<SubjectsAttributes, SubjectsCreationAttributes> implements SubjectsAttributes {
  declare id?: string;
  declare name: string;
  declare subjectCode: string;
  declare durationHours?: number;
  declare level?: number;
  declare teacherId?: string;
  declare indicator?: string;
  declare studyExperience?: string;
  declare teachingMaterials?: string;
  declare basicCompetencies?: string;
  declare toolsNeeded?: string;
  declare scoring?: string;
  declare description?: string;
  declare thumbnail: string;
  declare credit?: number;
  declare slug: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare thumbnailId?: number;
  declare isAvailable?: boolean;
  declare type?: string;
  declare startAt?: Date;
  declare brochure?: string;
  declare linkWhatsappGroup?: string;
  declare category?: string;
  declare credits?: number;
  declare semester?: number;
  declare instructorId?: string;

  public static initModel(sequelize: Sequelize): typeof Subjects {
    Subjects.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        subjectCode: { type: DataTypes.STRING, allowNull: false,
            field: 'subject_code'
        },
        durationHours: { type: DataTypes.INTEGER, allowNull: true,
            field: 'duration_hours'
        },
        level: { type: DataTypes.INTEGER, allowNull: true,
            field: 'level'
        },
        teacherId: { type: DataTypes.UUID, allowNull: true,
            field: 'teacher_id'
        },
        indicator: { type: DataTypes.TEXT, allowNull: true,
            field: 'indicator'
        },
        studyExperience: { type: DataTypes.TEXT, allowNull: true,
            field: 'study_experience'
        },
        teachingMaterials: { type: DataTypes.TEXT, allowNull: true,
            field: 'teaching_materials'
        },
        basicCompetencies: { type: DataTypes.TEXT, allowNull: true,
            field: 'basic_competencies'
        },
        toolsNeeded: { type: DataTypes.TEXT, allowNull: true,
            field: 'tools_needed'
        },
        scoring: { type: DataTypes.TEXT, allowNull: true,
            field: 'scoring'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
        },
        thumbnail: { type: DataTypes.TEXT, allowNull: false,
            field: 'thumbnail'
        },
        credit: { type: DataTypes.INTEGER, allowNull: true,
            field: 'credit'
        },
        slug: { type: DataTypes.STRING, allowNull: false,
            field: 'slug'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        thumbnailId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'thumbnail_id'
        },
        isAvailable: { type: DataTypes.BOOLEAN, allowNull: true,
            field: 'is_available'
        },
        type: { type: DataTypes.STRING, allowNull: true,
            field: 'type'
        },
        startAt: { type: DataTypes.DATE, allowNull: true,
            field: 'start_at'
        },
        brochure: { type: DataTypes.TEXT, allowNull: true,
            field: 'brochure'
        },
        linkWhatsappGroup: { type: DataTypes.STRING, allowNull: true,
            field: 'link_whatsapp_group'
        },
        category: { type: DataTypes.STRING, allowNull: true,
            field: 'category'
        },
        credits: { type: DataTypes.INTEGER,
            field: 'credits'
        },
        semester: { type: DataTypes.INTEGER, allowNull: true,
            field: 'semester'
        },
        instructorId: { type: DataTypes.UUID, allowNull: true,
            field: 'instructor_id'
        }
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
