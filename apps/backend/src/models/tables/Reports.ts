import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReportsAttributes {
  id?: number;
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
  user_Id?: string;
}

export type ReportsCreationAttributes = Optional<ReportsAttributes, 'id' | 'deletedAt' | 'lessonsLearned' | 'user_Id'>;

export class Reports extends Model<ReportsAttributes, ReportsCreationAttributes> implements ReportsAttributes {
  declare id?: number;
  declare userId: string;
  declare type: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare uuid: string;
  declare activityId: number;
  declare status: string;
  declare lessonsLearned?: string;
  declare weekNumber: number;
  declare startDate: Date;
  declare endDate: Date;
  declare user_Id?: string;

  public static initModel(sequelize: Sequelize): typeof Reports {
    Reports.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        uuid: { type: DataTypes.UUID, allowNull: false,
            field: 'uuid'
        },
        activityId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'activity_id'
        },
        status: { type: DataTypes.STRING, allowNull: false,
            field: 'status'
        },
        lessonsLearned: { type: DataTypes.TEXT, allowNull: true,
            field: 'lessons_learned'
        },
        weekNumber: { type: DataTypes.INTEGER, allowNull: false,
            field: 'week_number'
        },
        startDate: { type: DataTypes.DATE, allowNull: false,
            field: 'start_date'
        },
        endDate: { type: DataTypes.DATE, allowNull: false,
            field: 'end_date'
        },
        user_Id: { type: DataTypes.UUID, allowNull: true,
            field: 'user__id'
        }
      },
      {
        sequelize,
        tableName: 'reports',
        timestamps: true,
        underscored: false,
      }
    );
    return Reports;
  }
}
