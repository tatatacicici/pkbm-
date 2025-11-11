import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdministrationsAttributes {
  id?: string;
  user_id: string;
  type: string;
  status: string;
  action_by?: string;
  created_at: Date;
  updated_at: Date;
  reason?: string;
  deleted_at?: Date;
  category?: string;
  approved_by?: string;
  approved_at?: Date;
}

export type AdministrationsCreationAttributes = Optional<AdministrationsAttributes, 'id' | 'action_by' | 'reason' | 'deleted_at' | 'category' | 'approved_by' | 'approved_at'>;

export class Administrations extends Model<AdministrationsAttributes, AdministrationsCreationAttributes> implements AdministrationsAttributes {
  declare id?: string;
  declare user_id: string;
  declare type: string;
  declare status: string;
  declare action_by?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare reason?: string;
  declare deleted_at?: Date;
  declare category?: string;
  declare approved_by?: string;
  declare approved_at?: Date;

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
