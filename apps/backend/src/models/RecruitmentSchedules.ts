import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RecruitmentSchedulesAttributes {
  pk: number;
  uuid?: string;
  departmentId: number;
  schedule: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RecruitmentSchedulesOptionalAttributes = "pk" | "uuid" | "deletedAt";
export type RecruitmentSchedulesCreationAttributes = Optional<RecruitmentSchedulesAttributes, RecruitmentSchedulesOptionalAttributes>;

export class RecruitmentSchedules extends Model<RecruitmentSchedulesAttributes, RecruitmentSchedulesCreationAttributes> implements RecruitmentSchedulesAttributes {
  pk!: number;
  uuid?: string;
  departmentId!: number;
  schedule!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof RecruitmentSchedules {
    return RecruitmentSchedules.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'department_id'
    },
    schedule: {
      type: DataTypes.DATE,
      allowNull: false
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
    tableName: 'recruitment_schedules',
    schema: 'public',
    timestamps: false
  });
  }
}
