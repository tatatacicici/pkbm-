import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ConsultationRoomsAttributes {
  id?: string;
  consultation_type_id: string;
  consultant_id: string;
  client_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type ConsultationRoomsCreationAttributes = Optional<ConsultationRoomsAttributes, 'id' | 'deleted_at'>;

export class ConsultationRooms extends Model<ConsultationRoomsAttributes, ConsultationRoomsCreationAttributes> implements ConsultationRoomsAttributes {
  declare id?: string;
  declare consultation_type_id: string;
  declare consultant_id: string;
  declare client_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ConsultationRooms {
    ConsultationRooms.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        consultation_type_id: { type: DataTypes.UUID, allowNull: false },
        consultant_id: { type: DataTypes.UUID, allowNull: false },
        client_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'consultation_rooms',
        timestamps: true,
        underscored: true,
      }
    );
    return ConsultationRooms;
  }
}
