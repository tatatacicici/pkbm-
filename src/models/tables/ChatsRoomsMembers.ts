import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsRoomsMembersAttributes {
  pk?: any;
  id?: any;
  room_id?: any;
  user_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ChatsRoomsMembersCreationAttributes = Optional<ChatsRoomsMembersAttributes, 'id'>;

export class ChatsRoomsMembers extends Model<ChatsRoomsMembersAttributes, ChatsRoomsMembersCreationAttributes> implements ChatsRoomsMembersAttributes {
  declare pk?: any;
  declare id?: any;
  declare room_id?: any;
  declare user_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ChatsRoomsMembers {
    ChatsRoomsMembers.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        room_id: { type: DataTypes.INTEGER, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'chats_rooms_members',
        timestamps: true,
        underscored: true,
      }
    );
    return ChatsRoomsMembers;
  }
}
