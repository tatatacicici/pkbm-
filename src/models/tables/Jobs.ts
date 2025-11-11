import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface JobsAttributes {
  id?: any;
  company?: any;
  company_logo?: any;
  location?: any;
  min_salary?: any;
  max_salary?: any;
  workhour_start?: any;
  workhour_end?: any;
  workday?: any;
  experience?: any;
  description?: any;
  type?: any;
  tag?: any;
  closing_date?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type JobsCreationAttributes = Optional<JobsAttributes, 'id'>;

export class Jobs extends Model<JobsAttributes, JobsCreationAttributes> implements JobsAttributes {
  declare id?: any;
  declare company?: any;
  declare company_logo?: any;
  declare location?: any;
  declare min_salary?: any;
  declare max_salary?: any;
  declare workhour_start?: any;
  declare workhour_end?: any;
  declare workday?: any;
  declare experience?: any;
  declare description?: any;
  declare type?: any;
  declare tag?: any;
  declare closing_date?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Jobs {
    Jobs.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        company: { type: DataTypes.STRING, allowNull: false },
        company_logo: { type: DataTypes.STRING, allowNull: false },
        location: { type: DataTypes.STRING, allowNull: false },
        min_salary: { type: DataTypes.INTEGER, allowNull: false },
        max_salary: { type: DataTypes.INTEGER, allowNull: false },
        workhour_start: { type: DataTypes.STRING, allowNull: false },
        workhour_end: { type: DataTypes.STRING, allowNull: false },
        workday: { type: DataTypes.STRING, allowNull: false },
        experience: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        tag: { type: DataTypes.STRING, allowNull: false },
        closing_date: { type: DataTypes.DATE, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
