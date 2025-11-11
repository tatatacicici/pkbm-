import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplaysAttributes {
  pk?: any;
  id?: any;
  topic?: any;
  description?: any;
  case_study?: any;
  rules?: any;
  duration?: any;
  subject_id?: any;
  session_id?: any;
  rubric_id?: any;
  start_at?: any;
  end_at?: any;
  created_by?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type RoleplaysCreationAttributes = Optional<RoleplaysAttributes, 'id'>;

export class Roleplays extends Model<RoleplaysAttributes, RoleplaysCreationAttributes> implements RoleplaysAttributes {
  declare pk?: any;
  declare id?: any;
  declare topic?: any;
  declare description?: any;
  declare case_study?: any;
  declare rules?: any;
  declare duration?: any;
  declare subject_id?: any;
  declare session_id?: any;
  declare rubric_id?: any;
  declare start_at?: any;
  declare end_at?: any;
  declare created_by?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
