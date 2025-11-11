import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesAdminAttributes {
  pk: number;
  id?: string;
  session_id: string;
  title: string;
  description: string;
  document_id?: string;
  video_id?: string;
  created_at: Date;
  updated_at: Date;
}

export type ModulesAdminCreationAttributes = Optional<ModulesAdminAttributes, 'id' | 'document_id' | 'video_id'>;

export class ModulesAdmin extends Model<ModulesAdminAttributes, ModulesAdminCreationAttributes> implements ModulesAdminAttributes {
  declare pk: number;
  declare id?: string;
  declare session_id: string;
  declare title: string;
  declare description: string;
  declare document_id?: string;
  declare video_id?: string;
  declare created_at: Date;
  declare updated_at: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ModulesAdmin {
    ModulesAdmin.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        id: { type: DataTypes.UUID, primaryKey: true },
        session_id: { type: DataTypes.UUID, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        document_id: { type: DataTypes.STRING, allowNull: true },
        video_id: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false }
      },
      {
        sequelize,
        tableName: 'modules_admin',
        timestamps: true,
        underscored: true,
      }
    );
    return ModulesAdmin;
  }
}
