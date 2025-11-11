import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsSessionsContentOrdersAttributes {
  id?: string;
  session_id: string;
  content_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SubjectsSessionsContentOrdersCreationAttributes = Optional<SubjectsSessionsContentOrdersAttributes, 'id' | 'deleted_at'>;

export class SubjectsSessionsContentOrders extends Model<SubjectsSessionsContentOrdersAttributes, SubjectsSessionsContentOrdersCreationAttributes> implements SubjectsSessionsContentOrdersAttributes {
  declare id?: string;
  declare session_id: string;
  declare content_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SubjectsSessionsContentOrders {
    SubjectsSessionsContentOrders.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        session_id: { type: DataTypes.UUID, allowNull: false },
        content_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'subjects_sessions_content_orders',
        timestamps: true,
        underscored: true,
      }
    );
    return SubjectsSessionsContentOrders;
  }
}
