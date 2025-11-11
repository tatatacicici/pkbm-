import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsRoomsAttributes {
  pk: number;
  id?: string;
  name: string;
  created_by: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type ChatsRoomsCreationAttributes = Optional<ChatsRoomsAttributes, 'id' | 'deleted_at'>;

export class ChatsRooms extends Model<ChatsRoomsAttributes, ChatsRoomsCreationAttributes> implements ChatsRoomsAttributes {
  declare pk: number;
  declare id?: string;
  declare name: string;
  declare created_by: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
