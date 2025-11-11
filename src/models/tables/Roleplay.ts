import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RoleplayAttributes {
  id?: any;
  uuid?: any;
  topic?: any;
  description?: any;
  assessor_id?: any;
  session?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type RoleplayCreationAttributes = Optional<RoleplayAttributes, 'id'>;

export class Roleplay extends Model<RoleplayAttributes, RoleplayCreationAttributes> implements RoleplayAttributes {
  declare id?: any;
  declare uuid?: any;
  declare topic?: any;
  declare description?: any;
  declare assessor_id?: any;
  declare session?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Roleplay {
    Roleplay.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: true },
        topic: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false },
        assessor_id: { type: DataTypes.UUID, allowNull: false },
        session: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'roleplay',
        timestamps: true,
        underscored: false,
      }
    );
    return Roleplay;
  }
}
