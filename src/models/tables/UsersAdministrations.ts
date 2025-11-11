import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersAdministrationsAttributes {
  id?: number;
  uuid?: string;
  user_id: string;
  cycle_id: number;
  type: string;
  status: string;
  actions?: any;
  approved_by?: string;
  approved_at?: Date;
}

export type UsersAdministrationsCreationAttributes = Optional<UsersAdministrationsAttributes, 'id' | 'uuid' | 'actions' | 'approved_by' | 'approved_at'>;

export class UsersAdministrations extends Model<UsersAdministrationsAttributes, UsersAdministrationsCreationAttributes> implements UsersAdministrationsAttributes {
  declare id?: number;
  declare uuid?: string;
  declare user_id: string;
  declare cycle_id: number;
  declare type: string;
  declare status: string;
  declare actions?: any;
  declare approved_by?: string;
  declare approved_at?: Date;

  public static initModel(sequelize: Sequelize): typeof UsersAdministrations {
    UsersAdministrations.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        cycle_id: { type: DataTypes.INTEGER, allowNull: false },
        type: { type: DataTypes.STRING, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
        actions: { type: DataTypes.JSON, allowNull: true },
        approved_by: { type: DataTypes.STRING, allowNull: true },
        approved_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'users_administrations',
        timestamps: false,
        underscored: true,
      }
    );
    return UsersAdministrations;
  }
}
