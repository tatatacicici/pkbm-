import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface JobsAttributes {
  id?: string;
  company: string;
  company_logo: string;
  location: string;
  min_salary: number;
  max_salary: number;
  workhour_start: string;
  workhour_end: string;
  workday: string;
  experience: string;
  description: string;
  type: string;
  tag: string;
  closing_date: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type JobsCreationAttributes = Optional<JobsAttributes, 'id' | 'deleted_at'>;

export class Jobs extends Model<JobsAttributes, JobsCreationAttributes> implements JobsAttributes {
  declare id?: string;
  declare company: string;
  declare company_logo: string;
  declare location: string;
  declare min_salary: number;
  declare max_salary: number;
  declare workhour_start: string;
  declare workhour_end: string;
  declare workday: string;
  declare experience: string;
  declare description: string;
  declare type: string;
  declare tag: string;
  declare closing_date: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
