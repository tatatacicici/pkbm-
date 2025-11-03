import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface JobsAttributes {
  id: string;
  position: string;
  company: string;
  companyLogo: string;
  location: string;
  minSalary: number;
  maxSalary: number;
  workhourStart: string;
  workhourEnd: string;
  workday: string[];
  experience: string;
  description: string[];
  type: string;
  tag: string;
  closingDate: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type JobsPk = "id";
export type JobsId = Jobs[JobsPk];
export type JobsOptionalAttributes = "deletedAt";
export type JobsCreationAttributes = Optional<JobsAttributes, JobsOptionalAttributes>;

export class Jobs extends Model<JobsAttributes, JobsCreationAttributes> implements JobsAttributes {
  id!: string;
  position!: string;
  company!: string;
  companyLogo!: string;
  location!: string;
  minSalary!: number;
  maxSalary!: number;
  workhourStart!: string;
  workhourEnd!: string;
  workday!: string[];
  experience!: string;
  description!: string[];
  type!: string;
  tag!: string;
  closingDate!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Jobs {
    return Jobs.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    position: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    company: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    companyLogo: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'company_logo'
    },
    location: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    minSalary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'min_salary'
    },
    maxSalary: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'max_salary'
    },
    workhourStart: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'workhour_start'
    },
    workhourEnd: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'workhour_end'
    },
    workday: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    experience: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    tag: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    closingDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'closing_date'
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
    tableName: 'jobs',
    schema: 'public',
    timestamps: false
  });
  }
}
