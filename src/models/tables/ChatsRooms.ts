import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsRoomsAttributes {
  pk?: any;
  id?: any;
  name?: any;
  created_by?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ChatsRoomsCreationAttributes = Optional<ChatsRoomsAttributes, 'id'>;

export class ChatsRooms extends Model<ChatsRoomsAttributes, ChatsRoomsCreationAttributes> implements ChatsRoomsAttributes {
  declare pk?: any;
  declare id?: any;
  declare name?: any;
  declare created_by?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ChatsRooms {
    ChatsRooms.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        created_by: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'chats_rooms',
        timestamps: true,
        underscored: true,
      }
    );
    return ChatsRooms;
  }
}
