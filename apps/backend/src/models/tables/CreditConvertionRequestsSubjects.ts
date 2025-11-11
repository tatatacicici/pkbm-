import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CreditConvertionRequestsSubjectsAttributes {
  pk: number;
  uuid?: string;
  request_id: number;
  student_id: string;
  subject_id: string;
  total_session?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type CreditConvertionRequestsSubjectsCreationAttributes = Optional<CreditConvertionRequestsSubjectsAttributes, 'id' | 'uuid' | 'total_session' | 'deleted_at'>;

export class CreditConvertionRequestsSubjects extends Model<CreditConvertionRequestsSubjectsAttributes, CreditConvertionRequestsSubjectsCreationAttributes> implements CreditConvertionRequestsSubjectsAttributes {
  declare pk: number;
  declare uuid?: string;
  declare request_id: number;
  declare student_id: string;
  declare subject_id: string;
  declare total_session?: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CreditConvertionRequestsSubjects {
    CreditConvertionRequestsSubjects.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        uuid: { type: DataTypes.UUID, allowNull: true },
        request_id: { type: DataTypes.INTEGER, allowNull: false },
        student_id: { type: DataTypes.UUID, allowNull: false },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        total_session: { type: DataTypes.INTEGER, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
