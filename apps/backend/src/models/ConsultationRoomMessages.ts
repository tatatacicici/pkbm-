import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ConsultationRoomMessagesAttributes {
  id: string;
  consultationRoomId: string;
  senderId: string;
  message: string;
  images?: string[];
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ConsultationRoomMessagesPk = "id";
export type ConsultationRoomMessagesId = ConsultationRoomMessages[ConsultationRoomMessagesPk];
export type ConsultationRoomMessagesOptionalAttributes = "images" | "deletedAt";
export type ConsultationRoomMessagesCreationAttributes = Optional<ConsultationRoomMessagesAttributes, ConsultationRoomMessagesOptionalAttributes>;

export class ConsultationRoomMessages extends Model<ConsultationRoomMessagesAttributes, ConsultationRoomMessagesCreationAttributes> implements ConsultationRoomMessagesAttributes {
  id!: string;
  consultationRoomId!: string;
  senderId!: string;
  message!: string;
  images?: string[];
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ConsultationRoomMessages {
    return ConsultationRoomMessages.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    consultationRoomId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'consultation_room_id'
    },
    senderId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'sender_id'
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
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
    tableName: 'consultation_room_messages',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "consultation_room_messages_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
