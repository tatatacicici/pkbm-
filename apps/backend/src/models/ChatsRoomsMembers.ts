import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ChatsRoomsMembersAttributes {
  pk: number;
  id: string;
  roomId: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ChatsRoomsMembersPk = "pk";
export type ChatsRoomsMembersId = ChatsRoomsMembers[ChatsRoomsMembersPk];
export type ChatsRoomsMembersOptionalAttributes = "pk" | "deletedAt";
export type ChatsRoomsMembersCreationAttributes = Optional<ChatsRoomsMembersAttributes, ChatsRoomsMembersOptionalAttributes>;

export class ChatsRoomsMembers extends Model<ChatsRoomsMembersAttributes, ChatsRoomsMembersCreationAttributes> implements ChatsRoomsMembersAttributes {
  pk!: number;
  id!: string;
  roomId!: number;
  userId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ChatsRoomsMembers {
    return ChatsRoomsMembers.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: "chats_rooms_members_id_key9"
    },
    roomId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'room_id'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'chats_rooms_members',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chats_rooms_members_id_key",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key10",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key11",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key12",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key13",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key14",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key15",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key16",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key17",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key18",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key19",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key2",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key20",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key21",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key22",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key23",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key24",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key25",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key26",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key3",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key4",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key5",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key6",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key7",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key8",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_id_key9",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_members_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}
