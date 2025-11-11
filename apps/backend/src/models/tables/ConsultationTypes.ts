import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ConsultationTypesAttributes {
  id?: string;
  name: string;
  current_consultant_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type ConsultationTypesCreationAttributes = Optional<ConsultationTypesAttributes, 'id' | 'deleted_at'>;

export class ConsultationTypes extends Model<ConsultationTypesAttributes, ConsultationTypesCreationAttributes> implements ConsultationTypesAttributes {
  declare id?: string;
  declare name: string;
  declare current_consultant_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ConsultationTypes {
    ConsultationTypes.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        current_consultant_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'consultation_types',
        timestamps: true,
        underscored: true,
      }
    );
    return ConsultationTypes;
  }
}
