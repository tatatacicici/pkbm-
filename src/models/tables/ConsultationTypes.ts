import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ConsultationTypesAttributes {
  id?: any;
  name?: any;
  current_consultant_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ConsultationTypesCreationAttributes = Optional<ConsultationTypesAttributes, 'id'>;

export class ConsultationTypes extends Model<ConsultationTypesAttributes, ConsultationTypesCreationAttributes> implements ConsultationTypesAttributes {
  declare id?: any;
  declare name?: any;
  declare current_consultant_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
