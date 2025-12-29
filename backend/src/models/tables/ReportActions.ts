import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReportActionsAttributes {
  id?: number;
  uuid: string;
  userId: string;
  reportId: number;
  mentorId: string;
  note: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export type ReportActionsCreationAttributes = Optional<ReportActionsAttributes, 'id' | 'createdAt' | 'updatedAt'>;

export class ReportActions extends Model<ReportActionsAttributes, ReportActionsCreationAttributes> implements ReportActionsAttributes {
  declare id?: number;
  declare uuid: string;
  declare userId: string;
  declare reportId: number;
  declare mentorId: string;
  declare note: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ReportActions {
    ReportActions.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: false,
            field: 'uuid'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        reportId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'report_id'
        },
        mentorId: { type: DataTypes.UUID, allowNull: false,
            field: 'mentor_id'
        },
        note: { type: DataTypes.TEXT, allowNull: false,
            field: 'note'
        },
        createdAt: { type: DataTypes.DATE, allowNull: true,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'updated_at'
        }
      },
      {
        sequelize,
        tableName: 'report_actions',
        timestamps: true,
        underscored: true,
      }
    );
    return ReportActions;
  }
}
