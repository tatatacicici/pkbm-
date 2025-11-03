import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

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

export type CreditConvertionRequestsSubjectsOptionalAttributes = "pk" | "uuid" | "totalSession" | "deletedAt";
export type CreditConvertionRequestsSubjectsCreationAttributes = Optional<CreditConvertionRequestsSubjectsAttributes, CreditConvertionRequestsSubjectsOptionalAttributes>;

export class CreditConvertionRequestsSubjects extends Model<CreditConvertionRequestsSubjectsAttributes, CreditConvertionRequestsSubjectsCreationAttributes> implements CreditConvertionRequestsSubjectsAttributes {
  pk!: number;
  uuid?: string;
  requestId!: number;
  studentId!: string;
  subjectId!: string;
  totalSession?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof CreditConvertionRequestsSubjects {
    return CreditConvertionRequestsSubjects.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    requestId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'request_id'
    },
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id'
    },
    totalSession: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'total_session'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'credit_convertion_requests_subjects',
    schema: 'public',
    timestamps: false
  });
  }
}
