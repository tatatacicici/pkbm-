import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubmissionsAttributes {
  pk: number;
  id?: string;
  userId: string;
  assignmentId: number;
  status: string;
  isGraded: boolean;
  score: number;
  documentPath: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SubmissionsCreationAttributes = Optional<SubmissionsAttributes, 'id' | 'deletedAt'>;

export class Submissions extends Model<SubmissionsAttributes, SubmissionsCreationAttributes> implements SubmissionsAttributes {
  declare pk: number;
  declare id?: string;
  declare userId: string;
  declare assignmentId: number;
  declare status: string;
  declare isGraded: boolean;
  declare score: number;
  declare documentPath: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Submissions {
    Submissions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.STRING, allowNull: false,
            field: 'user_id'
        },
        assignmentId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'assignment_id'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        isGraded: { type: DataTypes.BOOLEAN, allowNull: false,
            field: 'is_graded'
        },
        score: { type: DataTypes.INTEGER, allowNull: false,
            field: 'score'
        },
        documentPath: { type: DataTypes.STRING, allowNull: false,
            field: 'document_path'
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
        tableName: 'submissions',
        timestamps: true,
        underscored: false,
      }
    );
    return Submissions;
  }
}
