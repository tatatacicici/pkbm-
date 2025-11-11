import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ConsultationRoomsAttributes {
  id?: any;
  consultation_type_id?: any;
  consultant_id?: any;
  client_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ConsultationRoomsCreationAttributes = Optional<ConsultationRoomsAttributes, 'id'>;

export class ConsultationRooms extends Model<ConsultationRoomsAttributes, ConsultationRoomsCreationAttributes> implements ConsultationRoomsAttributes {
  declare id?: any;
  declare consultation_type_id?: any;
  declare consultant_id?: any;
  declare client_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
