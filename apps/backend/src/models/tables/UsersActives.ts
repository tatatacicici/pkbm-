import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersActivesAttributes {
  pk: number;
  uuid?: string;
  user_id: string;
  date: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  last_active?: Date;
}

export type UsersActivesCreationAttributes = Optional<UsersActivesAttributes, 'id' | 'uuid' | 'deleted_at' | 'last_active'>;

export class UsersActives extends Model<UsersActivesAttributes, UsersActivesCreationAttributes> implements UsersActivesAttributes {
  declare pk: number;
  declare uuid?: string;
  declare user_id: string;
  declare date: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare last_active?: Date;

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
