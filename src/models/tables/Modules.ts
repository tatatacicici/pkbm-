import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesAttributes {
  id?: any;
  session_id?: any;
  document_id?: any;
  video_id?: any;
  title?: any;
  description?: any;
  duration_sec?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type ModulesCreationAttributes = Optional<ModulesAttributes, 'id'>;

export class Modules extends Model<ModulesAttributes, ModulesCreationAttributes> implements ModulesAttributes {
  declare id?: any;
  declare session_id?: any;
  declare document_id?: any;
  declare video_id?: any;
  declare title?: any;
  declare description?: any;
  declare duration_sec?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
