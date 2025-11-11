import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersAdministrationsAttributes {
  id?: any;
  uuid?: any;
  user_id?: any;
  cycle_id?: any;
  type?: any;
  status?: any;
  actions?: any;
  approved_by?: any;
  approved_at?: any;
}

export type UsersAdministrationsCreationAttributes = Optional<UsersAdministrationsAttributes, 'id'>;

export class UsersAdministrations extends Model<UsersAdministrationsAttributes, UsersAdministrationsCreationAttributes> implements UsersAdministrationsAttributes {
  declare id?: any;
  declare uuid?: any;
  declare user_id?: any;
  declare cycle_id?: any;
  declare type?: any;
  declare status?: any;
  declare actions?: any;
  declare approved_by?: any;
  declare approved_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

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
