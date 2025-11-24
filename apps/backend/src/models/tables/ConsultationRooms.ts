import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ConsultationRoomsAttributes {
  id?: string;
  consultationTypeId: string;
  consultantId: string;
  clientId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ConsultationRoomsCreationAttributes = Optional<ConsultationRoomsAttributes, 'id' | 'deletedAt'>;

export class ConsultationRooms extends Model<ConsultationRoomsAttributes, ConsultationRoomsCreationAttributes> implements ConsultationRoomsAttributes {
  declare id?: string;
  declare consultationTypeId: string;
  declare consultantId: string;
  declare clientId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ConsultationRooms {
    ConsultationRooms.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        consultationTypeId: { type: DataTypes.UUID, allowNull: false,
            field: 'consultation_type_id'
        },
        consultantId: { type: DataTypes.UUID, allowNull: false,
            field: 'consultant_id'
        },
        clientId: { type: DataTypes.UUID, allowNull: false,
            field: 'client_id'
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
        tableName: 'consultation_rooms',
        timestamps: true,
        underscored: true,
      }
    );
    return ConsultationRooms;
  }
}
