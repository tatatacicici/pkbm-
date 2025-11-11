import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersActivesAttributes {
  pk?: any;
  uuid?: any;
  user_id?: any;
  date?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  last_active?: any;
}

export type UsersActivesCreationAttributes = Optional<UsersActivesAttributes, 'id'>;

export class UsersActives extends Model<UsersActivesAttributes, UsersActivesCreationAttributes> implements UsersActivesAttributes {
  declare pk?: any;
  declare uuid?: any;
  declare user_id?: any;
  declare date?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare last_active?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof UsersActives {
    UsersActives.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        uuid: { type: DataTypes.UUID, allowNull: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        date: { type: DataTypes.DATEONLY, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        last_active: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'users_actives',
        timestamps: true,
        underscored: true,
      }
    );
    return UsersActives;
  }
}
