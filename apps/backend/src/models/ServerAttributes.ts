import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ServerAttributesAttributes {
  id: string;
  key: string;
  value?: string;
}

export type ServerAttributesPk = "id";
export type ServerAttributesId = ServerAttributes[ServerAttributesPk];
export type ServerAttributesOptionalAttributes = "value";
export type ServerAttributesCreationAttributes = Optional<ServerAttributesAttributes, ServerAttributesOptionalAttributes>;

export class ServerAttributes extends Model<ServerAttributesAttributes, ServerAttributesCreationAttributes> implements ServerAttributesAttributes {
  id!: string;
  key!: string;
  value?: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ServerAttributes {
    return ServerAttributes.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    key: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    value: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'server_attributes',
    schema: 'public',
    timestamps: false
  });
  }
}
