import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdminAttendenceAttributes {
  pk: number;
  id?: string;
  session_id: string;
  user_id: string;
  is_present?: boolean;
  status: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type AdminAttendenceCreationAttributes = Optional<AdminAttendenceAttributes, 'id' | 'is_present' | 'deleted_at'>;

export class AdminAttendence extends Model<AdminAttendenceAttributes, AdminAttendenceCreationAttributes> implements AdminAttendenceAttributes {
  declare pk: number;
  declare id?: string;
  declare session_id: string;
  declare user_id: string;
  declare is_present?: boolean;
  declare status: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AdminAttendence {
    AdminAttendence.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        session_id: { type: DataTypes.UUID, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        is_present: { type: DataTypes.BOOLEAN },
        status: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'admin_attendence',
        timestamps: true,
        underscored: true,
      }
    );
    return AdminAttendence;
  }
}
