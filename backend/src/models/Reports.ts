import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ReportsAttributes {
  id: number;
  userId: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  uuid: string;
  activityId: number;
  status: string;
  lessonsLearned?: string;
  weekNumber: number;
  startDate: Date;
  endDate: Date;
}

export type ReportsPk = "id";
export type ReportsId = Reports[ReportsPk];
export type ReportsOptionalAttributes = "id" | "deletedAt" | "lessonsLearned";
export type ReportsCreationAttributes = Optional<ReportsAttributes, ReportsOptionalAttributes>;

export class Reports extends Model<ReportsAttributes, ReportsCreationAttributes> implements ReportsAttributes {
  id!: number;
  userId!: string;
  type!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  uuid!: string;
  activityId!: number;
  status!: string;
  lessonsLearned?: string;
  weekNumber!: number;
  startDate!: Date;
  endDate!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Reports {
    return Reports.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    activityId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'activity_id'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    lessonsLearned: {
      type: DataTypes.TEXT,
      allowNull: true,
      field: 'lessons_learned'
    },
    weekNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'week_number'
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'end_date'
    }
  }, {
    sequelize,
    tableName: 'reports',
    schema: 'public',
    timestamps: false
  });
  }
}
