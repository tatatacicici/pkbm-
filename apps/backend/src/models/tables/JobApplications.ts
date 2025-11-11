import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface JobApplicationsAttributes {
  id?: string;
  user_id: string;
  job_id: string;
  full_name: string;
  phone_number: string;
  cv: string;
  portofolio: string;
  application_letter: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type JobApplicationsCreationAttributes = Optional<JobApplicationsAttributes, 'id' | 'deleted_at'>;

export class JobApplications extends Model<JobApplicationsAttributes, JobApplicationsCreationAttributes> implements JobApplicationsAttributes {
  declare id?: string;
  declare user_id: string;
  declare job_id: string;
  declare full_name: string;
  declare phone_number: string;
  declare cv: string;
  declare portofolio: string;
  declare application_letter: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof JobApplications {
    JobApplications.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        job_id: { type: DataTypes.UUID, allowNull: false },
        full_name: { type: DataTypes.STRING, allowNull: false },
        phone_number: { type: DataTypes.STRING, allowNull: false },
        cv: { type: DataTypes.STRING, allowNull: false },
        portofolio: { type: DataTypes.STRING, allowNull: false },
        application_letter: { type: DataTypes.TEXT, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'job_applications',
        timestamps: true,
        underscored: true,
      }
    );
    return JobApplications;
  }
}
