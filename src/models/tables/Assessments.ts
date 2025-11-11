import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsAttributes {
  pk?: any;
  id?: any;
  topic?: any;
  description?: any;
  thumbnail?: any;
  thumbnail_id?: any;
  case_study?: any;
  rules?: any;
  duration?: any;
  major_id?: any;
  subject_id?: any;
  rubric_id?: any;
  start_at?: any;
  end_at?: any;
  created_by?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type AssessmentsCreationAttributes = Optional<AssessmentsAttributes, 'id'>;

export class Assessments extends Model<AssessmentsAttributes, AssessmentsCreationAttributes> implements AssessmentsAttributes {
  declare pk?: any;
  declare id?: any;
  declare topic?: any;
  declare description?: any;
  declare thumbnail?: any;
  declare thumbnail_id?: any;
  declare case_study?: any;
  declare rules?: any;
  declare duration?: any;
  declare major_id?: any;
  declare subject_id?: any;
  declare rubric_id?: any;
  declare start_at?: any;
  declare end_at?: any;
  declare created_by?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
