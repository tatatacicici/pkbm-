import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionReportsAttributes {
  id?: any;
  user_id?: any;
  resource_id?: any;
  resource_type?: any;
  report_type?: any;
  report_detail?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type DiscussionReportsCreationAttributes = Optional<DiscussionReportsAttributes, 'id'>;

export class DiscussionReports extends Model<DiscussionReportsAttributes, DiscussionReportsCreationAttributes> implements DiscussionReportsAttributes {
  declare id?: any;
  declare user_id?: any;
  declare resource_id?: any;
  declare resource_type?: any;
  declare report_type?: any;
  declare report_detail?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
