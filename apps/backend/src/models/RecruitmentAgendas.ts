import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RecruitmentAgendasAttributes {
  pk: number;
  uuid?: string;
  studentId: string;
  participantId: number;
  scheduleId: number;
  departmentId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RecruitmentAgendasOptionalAttributes = "pk" | "uuid" | "deletedAt";
export type RecruitmentAgendasCreationAttributes = Optional<RecruitmentAgendasAttributes, RecruitmentAgendasOptionalAttributes>;

export class RecruitmentAgendas extends Model<RecruitmentAgendasAttributes, RecruitmentAgendasCreationAttributes> implements RecruitmentAgendasAttributes {
  pk!: number;
  uuid?: string;
  studentId!: string;
  participantId!: number;
  scheduleId!: number;
  departmentId!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof RecruitmentAgendas {
    return RecruitmentAgendas.init({
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
    studentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'student_id'
    },
    participantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'participant_id'
    },
    scheduleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'schedule_id'
    },
    departmentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'department_id'
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
    tableName: 'recruitment_agendas',
    schema: 'public',
    timestamps: false
  });
  }
}
