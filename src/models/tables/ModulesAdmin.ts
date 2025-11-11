import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ModulesAdminAttributes {
  pk?: any;
  id?: any;
  session_id?: any;
  title?: any;
  description?: any;
  document_id?: any;
  video_id?: any;
  created_at?: any;
  updated_at?: any;
}

export type ModulesAdminCreationAttributes = Optional<ModulesAdminAttributes, 'id'>;

export class ModulesAdmin extends Model<ModulesAdminAttributes, ModulesAdminCreationAttributes> implements ModulesAdminAttributes {
  declare pk?: any;
  declare id?: any;
  declare session_id?: any;
  declare title?: any;
  declare description?: any;
  declare document_id?: any;
  declare video_id?: any;
  declare created_at?: any;
  declare updated_at?: any;

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
