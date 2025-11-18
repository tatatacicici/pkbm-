import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsAttributes {
  pk: number;
  id?: string;
  topic: string;
  description: string;
  thumbnail: string;
  thumbnailId: number;
  caseStudy: string;
  rules: string;
  duration: number;
  majorId: string;
  subjectId: string;
  rubricId: number;
  startAt: Date;
  endAt: Date;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsCreationAttributes = Optional<AssessmentsAttributes, 'id' | 'deletedAt'>;

export class Assessments extends Model<AssessmentsAttributes, AssessmentsCreationAttributes> implements AssessmentsAttributes {
  declare pk: number;
  declare id?: string;
  declare topic: string;
  declare description: string;
  declare thumbnail: string;
  declare thumbnailId: number;
  declare caseStudy: string;
  declare rules: string;
  declare duration: number;
  declare majorId: string;
  declare subjectId: string;
  declare rubricId: number;
  declare startAt: Date;
  declare endAt: Date;
  declare createdBy: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Assessments {
    Assessments.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        topic: { type: DataTypes.TEXT, allowNull: false,
            field: 'topic'
        },
        description: { type: DataTypes.TEXT, allowNull: false,
            field: 'description'
        },
        thumbnail: { type: DataTypes.STRING, allowNull: false,
            field: 'thumbnail'
        },
        thumbnailId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'thumbnail_id'
        },
        caseStudy: { type: DataTypes.TEXT, allowNull: false,
            field: 'case_study'
        },
        rules: { type: DataTypes.TEXT, allowNull: false,
            field: 'rules'
        },
        duration: { type: DataTypes.INTEGER, allowNull: false,
            field: 'duration'
        },
        majorId: { type: DataTypes.UUID, allowNull: false,
            field: 'major_id'
        },
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        },
        rubricId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'rubric_id'
        },
        startAt: { type: DataTypes.DATE, allowNull: false,
            field: 'start_at'
        },
        endAt: { type: DataTypes.DATE, allowNull: false,
            field: 'end_at'
        },
        createdBy: { type: DataTypes.UUID, allowNull: false,
            field: 'created_by'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
      },
      {
        sequelize,
        tableName: 'assessments',
        timestamps: true,
        underscored: false,
      }
    );
    return Assessments;
  }
}
