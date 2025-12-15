import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface JobApplicationsAttributes {
  id?: string;
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

export type JobApplicationsCreationAttributes = Optional<JobApplicationsAttributes, 'id' | 'deletedAt'>;

export class JobApplications extends Model<JobApplicationsAttributes, JobApplicationsCreationAttributes> implements JobApplicationsAttributes {
  declare id?: string;
  declare userId: string;
  declare jobId: string;
  declare fullName: string;
  declare phoneNumber: string;
  declare cv: string;
  declare portofolio: string;
  declare applicationLetter: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof JobApplications {
    JobApplications.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        jobId: { type: DataTypes.UUID, allowNull: false,
            field: 'job_id'
        },
        fullName: { type: DataTypes.STRING, allowNull: false,
            field: 'full_name'
        },
        phoneNumber: { type: DataTypes.STRING, allowNull: false,
            field: 'phone_number'
        },
        cv: { type: DataTypes.STRING, allowNull: false,
            field: 'cv'
        },
        portofolio: { type: DataTypes.STRING, allowNull: false,
            field: 'portofolio'
        },
        applicationLetter: { type: DataTypes.TEXT, allowNull: false,
            field: 'application_letter'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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
