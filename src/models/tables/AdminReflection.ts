import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdminReflectionAttributes {
  pk: number;
  id?: string;
  session_id: string;
  user_id: string;
  question: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type AdminReflectionCreationAttributes = Optional<AdminReflectionAttributes, 'id' | 'deleted_at'>;

export class AdminReflection extends Model<AdminReflectionAttributes, AdminReflectionCreationAttributes> implements AdminReflectionAttributes {
  declare pk: number;
  declare id?: string;
  declare session_id: string;
  declare user_id: string;
  declare question: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
