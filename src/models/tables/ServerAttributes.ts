import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ServerAttributesAttributes {
  id?: any;
  key?: any;
  value?: any;
}

export type ServerAttributesCreationAttributes = Optional<ServerAttributesAttributes, 'id'>;

export class ServerAttributes extends Model<ServerAttributesAttributes, ServerAttributesCreationAttributes> implements ServerAttributesAttributes {
  declare id?: any;
  declare key?: any;
  declare value?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ServerAttributes {
    ServerAttributes.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        key: { type: DataTypes.TEXT, allowNull: false },
        value: { type: DataTypes.TEXT, allowNull: true }
      },
      {
        sequelize,
        tableName: 'server_attributes',
        timestamps: false,
        underscored: true,
      }
    );
    return ServerAttributes;
  }
}
