import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysAttributes {
  pk?: any;
  uuid?: any;
  name?: any;
  description?: any;
  is_active?: any;
  start_date?: any;
  end_date?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SurveysCreationAttributes = Optional<SurveysAttributes, 'id'>;

export class Surveys extends Model<SurveysAttributes, SurveysCreationAttributes> implements SurveysAttributes {
  declare pk?: any;
  declare uuid?: any;
  declare name?: any;
  declare description?: any;
  declare is_active?: any;
  declare start_date?: any;
  declare end_date?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Surveys {
    Surveys.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        uuid: { type: DataTypes.UUID, allowNull: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true },
        is_active: { type: DataTypes.BOOLEAN, allowNull: true },
        start_date: { type: DataTypes.DATE, allowNull: false },
        end_date: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
