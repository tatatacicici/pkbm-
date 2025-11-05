import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RecruitmentParticipantsAttributes {
  pk: number;
  uuid?: string;
  token: string;
  departmentId: number;
  emailAddress: string;
  fullName: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RecruitmentParticipantsOptionalAttributes = "pk" | "uuid" | "deletedAt";
export type RecruitmentParticipantsCreationAttributes = Optional<RecruitmentParticipantsAttributes, RecruitmentParticipantsOptionalAttributes>;

export class RecruitmentParticipants extends Model<RecruitmentParticipantsAttributes, RecruitmentParticipantsCreationAttributes> implements RecruitmentParticipantsAttributes {
  pk!: number;
  uuid?: string;
  token!: string;
  departmentId!: number;
  emailAddress!: string;
  fullName!: string;
  phoneNumber!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof RecruitmentParticipants {
    return RecruitmentParticipants.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'department_id'
    },
    emailAddress: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'email_address'
    },
    fullName: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'full_name'
    },
    phoneNumber: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'phone_number'
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
    tableName: 'recruitment_participants',
    schema: 'public',
    timestamps: false
  });
  }
}
