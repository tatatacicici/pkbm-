import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ReportDetailsAttributes {
  id?: number;
  uuid: string;
  userId: string;
  reportId: number;
  detail: string;
  expresionLevel: number;
  date: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ReportDetailsCreationAttributes = Optional<ReportDetailsAttributes, 'id' | 'deletedAt'>;

export class ReportDetails extends Model<ReportDetailsAttributes, ReportDetailsCreationAttributes> implements ReportDetailsAttributes {
  declare id?: number;
  declare uuid: string;
  declare userId: string;
  declare reportId: number;
  declare detail: string;
  declare expresionLevel: number;
  declare date: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ReportDetails {
    ReportDetails.init(
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
        detail: { type: DataTypes.TEXT, allowNull: false,
            field: 'detail'
        },
        expresionLevel: { type: DataTypes.INTEGER, allowNull: false,
            field: 'expresion_level'
        },
        date: { type: DataTypes.DATE, allowNull: false,
            field: 'date'
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
        tableName: 'report_details',
        timestamps: true,
        underscored: true,
      }
    );
    return ReportDetails;
  }
}
