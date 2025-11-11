import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdminAttendenceAttributes {
  pk?: any;
  id?: any;
  session_id?: any;
  user_id?: any;
  is_present?: any;
  status?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type AdminAttendenceCreationAttributes = Optional<AdminAttendenceAttributes, 'id'>;

export class AdminAttendence extends Model<AdminAttendenceAttributes, AdminAttendenceCreationAttributes> implements AdminAttendenceAttributes {
  declare pk?: any;
  declare id?: any;
  declare session_id?: any;
  declare user_id?: any;
  declare is_present?: any;
  declare status?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
