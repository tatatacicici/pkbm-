import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ConsultationRoomMessagesAttributes {
  id?: string;
  consultation_room_id: string;
  sender_id: string;
  message: string;
  images?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type ConsultationRoomMessagesCreationAttributes = Optional<ConsultationRoomMessagesAttributes, 'id' | 'images' | 'deleted_at'>;

export class ConsultationRoomMessages extends Model<ConsultationRoomMessagesAttributes, ConsultationRoomMessagesCreationAttributes> implements ConsultationRoomMessagesAttributes {
  declare id?: string;
  declare consultation_room_id: string;
  declare sender_id: string;
  declare message: string;
  declare images?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ConsultationRoomMessages {
    ConsultationRoomMessages.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        consultation_room_id: { type: DataTypes.UUID, allowNull: false },
        sender_id: { type: DataTypes.UUID, allowNull: false },
        message: { type: DataTypes.TEXT, allowNull: false },
        images: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'consultation_room_messages',
        timestamps: true,
        underscored: true,
      }
    );
    return ConsultationRoomMessages;
  }
}
