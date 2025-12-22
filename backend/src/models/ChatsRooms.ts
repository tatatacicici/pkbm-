import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ChatsRoomsAttributes {
  pk: number;
  id: string;
  name: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ChatsRoomsPk = "pk";
export type ChatsRoomsId = ChatsRooms[ChatsRoomsPk];
export type ChatsRoomsOptionalAttributes = "pk" | "deletedAt";
export type ChatsRoomsCreationAttributes = Optional<ChatsRoomsAttributes, ChatsRoomsOptionalAttributes>;

export class ChatsRooms extends Model<ChatsRoomsAttributes, ChatsRoomsCreationAttributes> implements ChatsRoomsAttributes {
  pk!: number;
  id!: string;
  name!: string;
  createdBy!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ChatsRooms {
    return ChatsRooms.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      unique: "chats_rooms_id_key9"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdBy: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'created_by'
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
    tableName: 'chats_rooms',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "chats_rooms_id_key",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key1",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key10",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key11",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key12",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key13",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key14",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key15",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key16",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key17",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key18",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key19",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key2",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key20",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key21",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key22",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key23",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key24",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key25",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key26",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key3",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key4",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key5",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key6",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key7",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key8",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_id_key9",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "chats_rooms_pkey",
        unique: true,
        fields: [
          { name: "pk" },
        ]
      },
    ]
  });
  }
}
