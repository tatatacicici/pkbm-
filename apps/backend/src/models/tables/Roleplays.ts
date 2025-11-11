import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplaysAttributes {
  pk: number;
  id?: string;
  topic: string;
  description?: string;
  case_study?: string;
  rules?: string;
  duration: number;
  subject_id: string;
  session_id: string;
  rubric_id: number;
  start_at: Date;
  end_at: Date;
  created_by: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type RoleplaysCreationAttributes = Optional<RoleplaysAttributes, 'id' | 'description' | 'case_study' | 'rules' | 'deleted_at'>;

export class Roleplays extends Model<RoleplaysAttributes, RoleplaysCreationAttributes> implements RoleplaysAttributes {
  declare pk: number;
  declare id?: string;
  declare topic: string;
  declare description?: string;
  declare case_study?: string;
  declare rules?: string;
  declare duration: number;
  declare subject_id: string;
  declare session_id: string;
  declare rubric_id: number;
  declare start_at: Date;
  declare end_at: Date;
  declare created_by: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Roleplays {
    Roleplays.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        topic: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true },
        case_study: { type: DataTypes.TEXT, allowNull: true },
        rules: { type: DataTypes.TEXT, allowNull: true },
        duration: { type: DataTypes.INTEGER, allowNull: false },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        session_id: { type: DataTypes.UUID, allowNull: false },
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
        tableName: 'roleplays',
        timestamps: true,
        underscored: false,
      }
    );
    return Roleplays;
  }
}
