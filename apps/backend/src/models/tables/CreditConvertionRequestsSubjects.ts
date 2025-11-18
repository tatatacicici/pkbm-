import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CreditConvertionRequestsSubjectsAttributes {
  pk: number;
  uuid?: string;
  requestId: number;
  studentId: string;
  subjectId: string;
  totalSession?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type CreditConvertionRequestsSubjectsCreationAttributes = Optional<CreditConvertionRequestsSubjectsAttributes, 'id' | 'uuid' | 'totalSession' | 'deletedAt'>;

export class CreditConvertionRequestsSubjects extends Model<CreditConvertionRequestsSubjectsAttributes, CreditConvertionRequestsSubjectsCreationAttributes> implements CreditConvertionRequestsSubjectsAttributes {
  declare pk: number;
  declare uuid?: string;
  declare requestId: number;
  declare studentId: string;
  declare subjectId: string;
  declare totalSession?: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CreditConvertionRequestsSubjects {
    CreditConvertionRequestsSubjects.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        requestId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'request_id'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        },
        totalSession: { type: DataTypes.INTEGER, allowNull: true,
            field: 'total_session'
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
        tableName: 'credit_convertion_requests_subjects',
        timestamps: true,
        underscored: true,
      }
    );
    return CreditConvertionRequestsSubjects;
  }
}
