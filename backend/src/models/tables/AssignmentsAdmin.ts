import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssignmentsAdminAttributes {
  pk: number;
  id?: string;
  sessionId: string;
  moduleId: string;
  title: string;
  deadline: number;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export type AssignmentsAdminCreationAttributes = Optional<AssignmentsAdminAttributes, 'id' | 'createdAt' | 'updatedAt' | 'deletedAt'>;

export class AssignmentsAdmin extends Model<AssignmentsAdminAttributes, AssignmentsAdminCreationAttributes> implements AssignmentsAdminAttributes {
  declare pk: number;
  declare id?: string;
  declare sessionId: string;
  declare moduleId: string;
  declare title: string;
  declare deadline: number;
  declare createdAt?: Date;
  declare updatedAt?: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssignmentsAdmin {
    AssignmentsAdmin.init(
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
        moduleId: { type: DataTypes.UUID, allowNull: false,
            field: 'module_id'
        },
        title: { type: DataTypes.STRING, allowNull: false,
            field: 'title'
        },
        deadline: { type: DataTypes.INTEGER, allowNull: false,
            field: 'deadline'
        },
        createdAt: { type: DataTypes.DATE, allowNull: true,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
      },
      {
        sequelize,
        tableName: 'assignments_admin',
        timestamps: true,
        underscored: true,
      }
    );
    return AssignmentsAdmin;
  }
}
