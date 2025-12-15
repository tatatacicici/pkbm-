import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdminAttendenceAttributes {
  pk: number;
  id?: string;
  sessionId: string;
  userId: string;
  isPresent?: boolean;
  status: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AdminAttendenceCreationAttributes = Optional<AdminAttendenceAttributes, 'id' | 'isPresent' | 'deletedAt'>;

export class AdminAttendence extends Model<AdminAttendenceAttributes, AdminAttendenceCreationAttributes> implements AdminAttendenceAttributes {
  declare pk: number;
  declare id?: string;
  declare sessionId: string;
  declare userId: string;
  declare isPresent?: boolean;
  declare status: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AdminAttendence {
    AdminAttendence.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        isPresent: { type: DataTypes.BOOLEAN,
            field: 'is_present'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
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
        tableName: 'admin_attendence',
        timestamps: true,
        underscored: true,
      }
    );
    return AdminAttendence;
  }
}
