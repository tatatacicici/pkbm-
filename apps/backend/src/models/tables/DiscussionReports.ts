import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionReportsAttributes {
  id?: string;
  user_id: string;
  resource_id: string;
  resource_type: string;
  report_type: string;
  report_detail: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type DiscussionReportsCreationAttributes = Optional<DiscussionReportsAttributes, 'id' | 'deleted_at'>;

export class DiscussionReports extends Model<DiscussionReportsAttributes, DiscussionReportsCreationAttributes> implements DiscussionReportsAttributes {
  declare id?: string;
  declare user_id: string;
  declare resource_id: string;
  declare resource_type: string;
  declare report_type: string;
  declare report_detail: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof DiscussionReports {
    DiscussionReports.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        resource_id: { type: DataTypes.UUID, allowNull: false },
        resource_type: { type: DataTypes.STRING, allowNull: false },
        report_type: { type: DataTypes.STRING, allowNull: false },
        report_detail: { type: DataTypes.TEXT, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'discussion_reports',
        timestamps: true,
        underscored: true,
      }
    );
    return DiscussionReports;
  }
}
