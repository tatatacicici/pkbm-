import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ModulesAdminAttributes {
  pk: number;
  id: string;
  sessionId: string;
  title: string;
  description: string;
  documentId?: string[];
  videoId?: string[];
  createdAt: Date;
  updatedAt: Date;
}

export type ModulesAdminPk = "id";
export type ModulesAdminId = ModulesAdmin[ModulesAdminPk];
export type ModulesAdminOptionalAttributes = "pk" | "documentId" | "videoId";
export type ModulesAdminCreationAttributes = Optional<ModulesAdminAttributes, ModulesAdminOptionalAttributes>;

export class ModulesAdmin extends Model<ModulesAdminAttributes, ModulesAdminCreationAttributes> implements ModulesAdminAttributes {
  pk!: number;
  id!: string;
  sessionId!: string;
  title!: string;
  description!: string;
  documentId?: string[];
  videoId?: string[];
  createdAt!: Date;
  updatedAt!: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof ModulesAdmin {
    return ModulesAdmin.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    sessionId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'session_id'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    documentId: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      field: 'document_id'
    },
    videoId: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
      field: 'video_id'
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
    }
  }, {
    sequelize,
    tableName: 'modules_admin',
    schema: 'public',
    timestamps: false
  });
  }
}
