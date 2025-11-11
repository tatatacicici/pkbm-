import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysAttributes {
  pk: number;
  uuid?: string;
  name: string;
  description?: string;
  is_active?: boolean;
  start_date: Date;
  end_date?: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SurveysCreationAttributes = Optional<SurveysAttributes, 'id' | 'uuid' | 'description' | 'is_active' | 'end_date' | 'deleted_at'>;

export class Surveys extends Model<SurveysAttributes, SurveysCreationAttributes> implements SurveysAttributes {
  declare pk: number;
  declare uuid?: string;
  declare name: string;
  declare description?: string;
  declare is_active?: boolean;
  declare start_date: Date;
  declare end_date?: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
