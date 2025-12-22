import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ConsultationRoomsAttributes {
  id: string;
  consultationTypeId: string;
  consultantId: string;
  clientId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ConsultationRoomsPk = "id";
export type ConsultationRoomsId = ConsultationRooms[ConsultationRoomsPk];
export type ConsultationRoomsOptionalAttributes = "deletedAt";
export type ConsultationRoomsCreationAttributes = Optional<ConsultationRoomsAttributes, ConsultationRoomsOptionalAttributes>;

export class ConsultationRooms extends Model<ConsultationRoomsAttributes, ConsultationRoomsCreationAttributes> implements ConsultationRoomsAttributes {
  id!: string;
  consultationTypeId!: string;
  consultantId!: string;
  clientId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ConsultationRooms {
    return ConsultationRooms.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    consultationTypeId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'consultation_type_id'
    },
    consultantId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'consultant_id'
    },
    clientId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'client_id'
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
    tableName: 'consultation_rooms',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "consultation_rooms_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
