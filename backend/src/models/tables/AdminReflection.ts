import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdminReflectionAttributes {
  pk: number;
  id?: string;
  sessionId: string;
  userId: string;
  question: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AdminReflectionCreationAttributes = Optional<AdminReflectionAttributes, 'id' | 'deletedAt'>;

export class AdminReflection extends Model<AdminReflectionAttributes, AdminReflectionCreationAttributes> implements AdminReflectionAttributes {
  declare pk: number;
  declare id?: string;
  declare sessionId: string;
  declare userId: string;
  declare question: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AdminReflection {
    AdminReflection.init(
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
        question: { type: DataTypes.STRING, allowNull: false,
            field: 'question'
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
        tableName: 'admin_reflection',
        timestamps: true,
        underscored: true,
      }
    );
    return AdminReflection;
  }
}
