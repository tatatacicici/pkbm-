import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ConsultationTypesAttributes {
  id?: string;
  name: string;
  currentConsultantId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ConsultationTypesCreationAttributes = Optional<ConsultationTypesAttributes, 'id' | 'deletedAt'>;

export class ConsultationTypes extends Model<ConsultationTypesAttributes, ConsultationTypesCreationAttributes> implements ConsultationTypesAttributes {
  declare id?: string;
  declare name: string;
  declare currentConsultantId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ConsultationTypes {
    ConsultationTypes.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        currentConsultantId: { type: DataTypes.UUID, allowNull: false,
            field: 'current_consultant_id'
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
        tableName: 'consultation_types',
        timestamps: true,
        underscored: true,
      }
    );
    return ConsultationTypes;
  }
}
