import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesAttributes {
  id?: string;
  session_id: string;
  document_id?: string;
  video_id?: string;
  title: string;
  description: string;
  duration_sec?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type ModulesCreationAttributes = Optional<ModulesAttributes, 'id' | 'document_id' | 'video_id' | 'duration_sec' | 'deleted_at'>;

export class Modules extends Model<ModulesAttributes, ModulesCreationAttributes> implements ModulesAttributes {
  declare id?: string;
  declare session_id: string;
  declare document_id?: string;
  declare video_id?: string;
  declare title: string;
  declare description: string;
  declare duration_sec?: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Modules {
    Modules.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        session_id: { type: DataTypes.UUID, allowNull: false },
        document_id: { type: DataTypes.STRING, allowNull: true },
        video_id: { type: DataTypes.STRING, allowNull: true },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
        duration_sec: { type: DataTypes.INTEGER, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'modules',
        timestamps: true,
        underscored: false,
      }
    );
    return Modules;
  }
}
