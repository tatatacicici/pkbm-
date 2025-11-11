import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CreditConvertionRequestsSubjectsAttributes {
  pk?: any;
  uuid?: any;
  request_id?: any;
  student_id?: any;
  subject_id?: any;
  total_session?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type CreditConvertionRequestsSubjectsCreationAttributes = Optional<CreditConvertionRequestsSubjectsAttributes, 'id'>;

export class CreditConvertionRequestsSubjects extends Model<CreditConvertionRequestsSubjectsAttributes, CreditConvertionRequestsSubjectsCreationAttributes> implements CreditConvertionRequestsSubjectsAttributes {
  declare pk?: any;
  declare uuid?: any;
  declare request_id?: any;
  declare student_id?: any;
  declare subject_id?: any;
  declare total_session?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
