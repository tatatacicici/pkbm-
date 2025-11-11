import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsAttributes {
  pk: number;
  id?: string;
  topic: string;
  description: string;
  thumbnail: string;
  thumbnail_id: number;
  case_study: string;
  rules: string;
  duration: number;
  major_id: string;
  subject_id: string;
  rubric_id: number;
  start_at: Date;
  end_at: Date;
  created_by: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type AssessmentsCreationAttributes = Optional<AssessmentsAttributes, 'id' | 'deleted_at'>;

export class Assessments extends Model<AssessmentsAttributes, AssessmentsCreationAttributes> implements AssessmentsAttributes {
  declare pk: number;
  declare id?: string;
  declare topic: string;
  declare description: string;
  declare thumbnail: string;
  declare thumbnail_id: number;
  declare case_study: string;
  declare rules: string;
  declare duration: number;
  declare major_id: string;
  declare subject_id: string;
  declare rubric_id: number;
  declare start_at: Date;
  declare end_at: Date;
  declare created_by: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Assessments {
    Assessments.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        topic: { type: DataTypes.TEXT, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
        thumbnail: { type: DataTypes.STRING, allowNull: false },
        thumbnail_id: { type: DataTypes.INTEGER, allowNull: false },
        case_study: { type: DataTypes.TEXT, allowNull: false },
        rules: { type: DataTypes.TEXT, allowNull: false },
        duration: { type: DataTypes.INTEGER, allowNull: false },
        major_id: { type: DataTypes.UUID, allowNull: false },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        rubric_id: { type: DataTypes.INTEGER, allowNull: false },
        start_at: { type: DataTypes.DATE, allowNull: false },
        end_at: { type: DataTypes.DATE, allowNull: false },
        created_by: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
