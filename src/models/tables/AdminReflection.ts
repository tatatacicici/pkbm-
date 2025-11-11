import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdminReflectionAttributes {
  pk?: any;
  id?: any;
  session_id?: any;
  user_id?: any;
  question?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type AdminReflectionCreationAttributes = Optional<AdminReflectionAttributes, 'id'>;

export class AdminReflection extends Model<AdminReflectionAttributes, AdminReflectionCreationAttributes> implements AdminReflectionAttributes {
  declare pk?: any;
  declare id?: any;
  declare session_id?: any;
  declare user_id?: any;
  declare question?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AdminReflection {
    AdminReflection.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        session_id: { type: DataTypes.UUID, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        question: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'admin_reflection',
        timestamps: true,
        underscored: true,
      }
    );
    return AdminReflection;
  }
}
