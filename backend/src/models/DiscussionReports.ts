import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DiscussionReportsAttributes {
  id: string;
  userId: string;
  resourceId: string;
  resourceType: string;
  reportType: string;
  reportDetail: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type DiscussionReportsPk = "id";
export type DiscussionReportsId = DiscussionReports[DiscussionReportsPk];
export type DiscussionReportsOptionalAttributes = "deletedAt";
export type DiscussionReportsCreationAttributes = Optional<DiscussionReportsAttributes, DiscussionReportsOptionalAttributes>;

export class DiscussionReports extends Model<DiscussionReportsAttributes, DiscussionReportsCreationAttributes> implements DiscussionReportsAttributes {
  id!: string;
  userId!: string;
  resourceId!: string;
  resourceType!: string;
  reportType!: string;
  reportDetail!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof DiscussionReports {
    return DiscussionReports.init({
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
    resourceId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'resource_id'
    },
    resourceType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'resource_type'
    },
    reportType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'report_type'
    },
    reportDetail: {
      type: DataTypes.TEXT,
      allowNull: false,
      field: 'report_detail'
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
    tableName: 'discussion_reports',
    schema: 'public',
    timestamps: false
  });
  }
}
