import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ChatsRoomsMembersAttributes {
  pk: number;
  id?: string;
  roomId: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ChatsRoomsMembersCreationAttributes = Optional<ChatsRoomsMembersAttributes, 'id' | 'deletedAt'>;

export class ChatsRoomsMembers extends Model<ChatsRoomsMembersAttributes, ChatsRoomsMembersCreationAttributes> implements ChatsRoomsMembersAttributes {
  declare pk: number;
  declare id?: string;
  declare roomId: number;
  declare userId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ChatsRoomsMembers {
    ChatsRoomsMembers.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        roomId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'room_id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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
