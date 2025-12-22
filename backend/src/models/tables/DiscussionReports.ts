import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionReportsAttributes {
  id?: string;
  userId: string;
  resourceId: string;
  resourceType: string;
  reportType: string;
  reportDetail: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type DiscussionReportsCreationAttributes = Optional<DiscussionReportsAttributes, 'id' | 'deletedAt'>;

export class DiscussionReports extends Model<DiscussionReportsAttributes, DiscussionReportsCreationAttributes> implements DiscussionReportsAttributes {
  declare id?: string;
  declare userId: string;
  declare resourceId: string;
  declare resourceType: string;
  declare reportType: string;
  declare reportDetail: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof DiscussionReports {
    DiscussionReports.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        resourceId: { type: DataTypes.UUID, allowNull: false,
            field: 'resource_id'
        },
        resourceType: { type: DataTypes.STRING, allowNull: false,
            field: 'resource_type'
        },
        reportType: { type: DataTypes.STRING, allowNull: false,
            field: 'report_type'
        },
        reportDetail: { type: DataTypes.TEXT, allowNull: false,
            field: 'report_detail'
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
        tableName: 'discussion_reports',
        timestamps: true,
        underscored: true,
      }
    );
    return DiscussionReports;
  }
}
