import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssignmentsAttributes {
  id?: string;
  sessionId: string;
  title: string;
  durationDays: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  moduleId?: string;
  exercise?: string;
}

export type AssignmentsCreationAttributes = Optional<AssignmentsAttributes, 'id' | 'deletedAt' | 'moduleId' | 'exercise'>;

export class Assignments extends Model<AssignmentsAttributes, AssignmentsCreationAttributes> implements AssignmentsAttributes {
  declare id?: string;
  declare sessionId: string;
  declare title: string;
  declare durationDays: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare moduleId?: string;
  declare exercise?: string;

  public static initModel(sequelize: Sequelize): typeof Assignments {
    Assignments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        title: { type: DataTypes.STRING, allowNull: false,
            field: 'title'
        },
        durationDays: { type: DataTypes.INTEGER, allowNull: false,
            field: 'duration_days'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        moduleId: { type: DataTypes.UUID, allowNull: true,
            field: 'module_id'
        },
        exercise: { type: DataTypes.TEXT, allowNull: true,
            field: 'exercise'
        }
      },
      {
        sequelize,
        tableName: 'assignments',
        timestamps: true,
        underscored: false,
      }
    );
    return Assignments;
  }
}
