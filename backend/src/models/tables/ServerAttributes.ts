import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ServerAttributesAttributes {
  id?: string;
  key: string;
  value?: string;
}

export type ServerAttributesCreationAttributes = Optional<ServerAttributesAttributes, 'id' | 'value'>;

export class ServerAttributes extends Model<ServerAttributesAttributes, ServerAttributesCreationAttributes> implements ServerAttributesAttributes {
  declare id?: string;
  declare key: string;
  declare value?: string;

  public static initModel(sequelize: Sequelize): typeof ServerAttributes {
    ServerAttributes.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        key: { type: DataTypes.TEXT, allowNull: false,
            field: 'key'
        },
        value: { type: DataTypes.TEXT, allowNull: true,
            field: 'value'
        }
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
