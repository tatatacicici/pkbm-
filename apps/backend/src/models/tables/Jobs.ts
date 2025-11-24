import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface JobsAttributes {
  id?: string;
  company: string;
  companyLogo: string;
  location: string;
  minSalary: number;
  maxSalary: number;
  workhourStart: string;
  workhourEnd: string;
  workday: string;
  experience: string;
  description: string;
  type: string;
  tag: string;
  closingDate: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type JobsCreationAttributes = Optional<JobsAttributes, 'id' | 'deletedAt'>;

export class Jobs extends Model<JobsAttributes, JobsCreationAttributes> implements JobsAttributes {
  declare id?: string;
  declare company: string;
  declare companyLogo: string;
  declare location: string;
  declare minSalary: number;
  declare maxSalary: number;
  declare workhourStart: string;
  declare workhourEnd: string;
  declare workday: string;
  declare experience: string;
  declare description: string;
  declare type: string;
  declare tag: string;
  declare closingDate: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Jobs {
    Jobs.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        company: { type: DataTypes.STRING, allowNull: false,
            field: 'company'
        },
        companyLogo: { type: DataTypes.STRING, allowNull: false,
            field: 'company_logo'
        },
        location: { type: DataTypes.STRING, allowNull: false,
            field: 'location'
        },
        minSalary: { type: DataTypes.INTEGER, allowNull: false,
            field: 'min_salary'
        },
        maxSalary: { type: DataTypes.INTEGER, allowNull: false,
            field: 'max_salary'
        },
        workhourStart: { type: DataTypes.STRING, allowNull: false,
            field: 'workhour_start'
        },
        workhourEnd: { type: DataTypes.STRING, allowNull: false,
            field: 'workhour_end'
        },
        workday: { type: DataTypes.STRING, allowNull: false,
            field: 'workday'
        },
        experience: { type: DataTypes.STRING, allowNull: false,
            field: 'experience'
        },
        description: { type: DataTypes.STRING, allowNull: false,
            field: 'description'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        tag: { type: DataTypes.STRING, allowNull: false,
            field: 'tag'
        },
        closingDate: { type: DataTypes.DATE, allowNull: false,
            field: 'closing_date'
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
        tableName: 'jobs',
        timestamps: true,
        underscored: false,
      }
    );
    return Jobs;
  }
}
