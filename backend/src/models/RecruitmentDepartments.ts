import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface RecruitmentDepartmentsAttributes {
  pk: number;
  uuid?: string;
  name: string;
  description: string;
  quota: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RecruitmentDepartmentsOptionalAttributes = "pk" | "uuid" | "quota" | "deletedAt";
export type RecruitmentDepartmentsCreationAttributes = Optional<RecruitmentDepartmentsAttributes, RecruitmentDepartmentsOptionalAttributes>;

export class RecruitmentDepartments extends Model<RecruitmentDepartmentsAttributes, RecruitmentDepartmentsCreationAttributes> implements RecruitmentDepartmentsAttributes {
  pk!: number;
  uuid?: string;
  name!: string;
  description!: string;
  quota!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof RecruitmentDepartments {
    return RecruitmentDepartments.init({
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    quota: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
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
    tableName: 'recruitment_departments',
    schema: 'public',
    timestamps: false
  });
  }
}
