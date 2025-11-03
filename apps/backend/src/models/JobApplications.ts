import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface JobApplicationsAttributes {
  id: string;
  userId: string;
  jobId: string;
  fullName: string;
  phoneNumber: string;
  cv: string;
  portofolio: string;
  applicationLetter: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type JobApplicationsPk = "id";
export type JobApplicationsId = JobApplications[JobApplicationsPk];
export type JobApplicationsOptionalAttributes = "deletedAt";
export type JobApplicationsCreationAttributes = Optional<JobApplicationsAttributes, JobApplicationsOptionalAttributes>;

export class JobApplications extends Model<JobApplicationsAttributes, JobApplicationsCreationAttributes> implements JobApplicationsAttributes {
  id!: string;
  userId!: string;
  jobId!: string;
  fullName!: string;
  phoneNumber!: string;
  cv!: string;
  portofolio!: string;
  applicationLetter!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof JobApplications {
    return JobApplications.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    jobId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'job_id'
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
    cv: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    portofolio: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    applicationLetter: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'application_letter'
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
    tableName: 'job_applications',
    schema: 'public',
    timestamps: false
  });
  }
}
