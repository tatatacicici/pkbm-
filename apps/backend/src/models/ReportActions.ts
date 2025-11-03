import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ReportActionsAttributes {
  id: number;
  uuid: string;
  userId: string;
  reportId: number;
  mentorId: string;
  note: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ReportActionsPk = "id";
export type ReportActionsId = ReportActions[ReportActionsPk];
export type ReportActionsOptionalAttributes = "id" | "createdAt" | "updatedAt";
export type ReportActionsCreationAttributes = Optional<ReportActionsAttributes, ReportActionsOptionalAttributes>;

export class ReportActions extends Model<ReportActionsAttributes, ReportActionsCreationAttributes> implements ReportActionsAttributes {
  id!: number;
  uuid!: string;
  userId!: string;
  reportId!: number;
  mentorId!: string;
  note!: string;
  createdAt?: Date;
  updatedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ReportActions {
    return ReportActions.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    reportId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'report_id'
    },
    mentorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'mentor_id'
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    }
  }, {
    sequelize,
    tableName: 'report_actions',
    schema: 'public',
    timestamps: false
  });
  }
}
