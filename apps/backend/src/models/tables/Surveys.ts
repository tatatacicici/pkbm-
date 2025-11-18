import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysAttributes {
  pk: number;
  uuid?: string;
  name: string;
  description?: string;
  isActive?: boolean;
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SurveysCreationAttributes = Optional<SurveysAttributes, 'id' | 'uuid' | 'description' | 'isActive' | 'endDate' | 'deletedAt'>;

export class Surveys extends Model<SurveysAttributes, SurveysCreationAttributes> implements SurveysAttributes {
  declare pk: number;
  declare uuid?: string;
  declare name: string;
  declare description?: string;
  declare isActive?: boolean;
  declare startDate: Date;
  declare endDate?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Surveys {
    Surveys.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
        },
        isActive: { type: DataTypes.BOOLEAN, allowNull: true,
            field: 'is_active'
        },
        startDate: { type: DataTypes.DATE, allowNull: false,
            field: 'start_date'
        },
        endDate: { type: DataTypes.DATE, allowNull: true,
            field: 'end_date'
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
        tableName: 'surveys',
        timestamps: true,
        underscored: false,
      }
    );
    return Surveys;
  }
}
