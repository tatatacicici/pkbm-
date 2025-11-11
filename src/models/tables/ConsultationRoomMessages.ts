import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ConsultationRoomMessagesAttributes {
  id?: any;
  consultation_room_id?: any;
  sender_id?: any;
  message?: any;
  images?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ConsultationRoomMessagesCreationAttributes = Optional<ConsultationRoomMessagesAttributes, 'id'>;

export class ConsultationRoomMessages extends Model<ConsultationRoomMessagesAttributes, ConsultationRoomMessagesCreationAttributes> implements ConsultationRoomMessagesAttributes {
  declare id?: any;
  declare consultation_room_id?: any;
  declare sender_id?: any;
  declare message?: any;
  declare images?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
