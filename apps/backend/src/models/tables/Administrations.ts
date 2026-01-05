import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdministrationsAttributes {
  id?: string;
  userId: string;
  type: string;
  status: string;
  actionBy?: string;
  createdAt: Date;
  updatedAt: Date;
  reason?: string;
  deletedAt?: Date;
  category?: string;
  approvedBy?: string;
  approvedAt?: Date;
}

export type AdministrationsCreationAttributes = Optional<
  AdministrationsAttributes,
  'id' | 'actionBy' | 'reason' | 'deletedAt' | 'category' | 'approvedBy' | 'approvedAt'
>;

export class Administrations extends Model<
  AdministrationsAttributes,
  AdministrationsCreationAttributes
> implements AdministrationsAttributes {
  declare id?: string;
  declare userId: string;
  declare type: string;
  declare status: string;
  declare actionBy?: string;
  declare reason?: string;
  declare deletedAt?: Date;
  declare category?: string;
  declare approvedBy?: string;
  declare approvedAt?: Date;

  declare readonly createdAt: Date;
  declare readonly updatedAt: Date;

  public static initModel(sequelize: Sequelize): typeof Administrations {
    Administrations.init(
      {
        id: { field: 'id', type: DataTypes.UUID, primaryKey: true },
        userId: { field: 'user_id', type: DataTypes.UUID, allowNull: false },
        type: { field: 'type', type: DataTypes.STRING, allowNull: false },
        status: { field: 'status', type: DataTypes.STRING, allowNull: false },
        actionBy: { field: 'action_by', type: DataTypes.STRING, allowNull: true },
        createdAt: { field: 'created_at', type: DataTypes.DATE, allowNull: false },
        updatedAt: { field: 'updated_at', type: DataTypes.DATE, allowNull: false },
        reason: { field: 'reason', type: DataTypes.STRING, allowNull: true },
        deletedAt: { field: 'deleted_at', type: DataTypes.DATE, allowNull: true },
        category: { field: 'category', type: DataTypes.STRING, allowNull: true },
        approvedBy: { field: 'approved_by', type: DataTypes.UUID, allowNull: true },
        approvedAt: { field: 'approved_at', type: DataTypes.DATE, allowNull: true },
      },
      {
        sequelize,
        tableName: 'administrations',
        timestamps: true,
        underscored: false,
      }
    );
    return Administrations;
  }
}
