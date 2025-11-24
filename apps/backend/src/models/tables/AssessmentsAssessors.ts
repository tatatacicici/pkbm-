import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentsAssessorsAttributes {
  pk: number;
  id?: string;
  assessmentId: number;
  assessorId: string;
  role: string;
  assignedAt: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentsAssessorsCreationAttributes = Optional<AssessmentsAssessorsAttributes, 'id' | 'deletedAt'>;

export class AssessmentsAssessors extends Model<AssessmentsAssessorsAttributes, AssessmentsAssessorsCreationAttributes> implements AssessmentsAssessorsAttributes {
  declare pk: number;
  declare id?: string;
  declare assessmentId: number;
  declare assessorId: string;
  declare role: string;
  declare assignedAt: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentsAssessors {
    AssessmentsAssessors.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        assessmentId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'assessment_id'
        },
        assessorId: { type: DataTypes.UUID, allowNull: false,
            field: 'assessor_id'
        },
        role: { type: DataTypes.STRING, allowNull: false,
            field: 'role'
        },
        assignedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'assigned_at'
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
        tableName: 'assessments_assessors',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentsAssessors;
  }
}
