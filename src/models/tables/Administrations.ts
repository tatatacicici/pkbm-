import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdministrationsAttributes {
  id?: any;
  user_id?: any;
  type?: any;
  status?: any;
  action_by?: any;
  created_at?: any;
  updated_at?: any;
  reason?: any;
  deleted_at?: any;
  category?: any;
  approved_by?: any;
  approved_at?: any;
}

export type AdministrationsCreationAttributes = Optional<AdministrationsAttributes, 'id'>;

export class Administrations extends Model<AdministrationsAttributes, AdministrationsCreationAttributes> implements AdministrationsAttributes {
  declare id?: any;
  declare user_id?: any;
  declare type?: any;
  declare status?: any;
  declare action_by?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare reason?: any;
  declare deleted_at?: any;
  declare category?: any;
  declare approved_by?: any;
  declare approved_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Administrations {
    Administrations.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        action_by: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        reason: { type: DataTypes.STRING, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        category: { type: DataTypes.STRING, allowNull: true },
        approved_by: { type: DataTypes.UUID, allowNull: true },
        approved_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'administrations',
        timestamps: true,
        underscored: false,
      }
    );
    return Administrations;
  }
}
