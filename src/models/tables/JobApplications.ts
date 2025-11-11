import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface JobApplicationsAttributes {
  id?: any;
  user_id?: any;
  job_id?: any;
  full_name?: any;
  phone_number?: any;
  cv?: any;
  portofolio?: any;
  application_letter?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type JobApplicationsCreationAttributes = Optional<JobApplicationsAttributes, 'id'>;

export class JobApplications extends Model<JobApplicationsAttributes, JobApplicationsCreationAttributes> implements JobApplicationsAttributes {
  declare id?: any;
  declare user_id?: any;
  declare job_id?: any;
  declare full_name?: any;
  declare phone_number?: any;
  declare cv?: any;
  declare portofolio?: any;
  declare application_letter?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
