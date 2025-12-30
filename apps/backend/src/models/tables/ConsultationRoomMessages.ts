import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ConsultationRoomMessagesAttributes {
  id?: string;
  consultationRoomId: string;
  senderId: string;
  message: string;
  images?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ConsultationRoomMessagesCreationAttributes = Optional<ConsultationRoomMessagesAttributes, 'id' | 'images' | 'deletedAt'>;

export class ConsultationRoomMessages extends Model<ConsultationRoomMessagesAttributes, ConsultationRoomMessagesCreationAttributes> implements ConsultationRoomMessagesAttributes {
  declare id?: string;
  declare consultationRoomId: string;
  declare senderId: string;
  declare message: string;
  declare images?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ConsultationRoomMessages {
    ConsultationRoomMessages.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        consultationRoomId: { type: DataTypes.UUID, allowNull: false,
            field: 'consultation_room_id'
        },
        senderId: { type: DataTypes.UUID, allowNull: false,
            field: 'sender_id'
        },
        message: { type: DataTypes.TEXT, allowNull: false,
            field: 'message'
        },
        images: { type: DataTypes.STRING, allowNull: true,
            field: 'images'
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
        tableName: 'consultation_room_messages',
        timestamps: true,
        underscored: true,
      }
    );
    return ConsultationRoomMessages;
  }
}
