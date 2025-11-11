import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsSessionsContentOrdersAttributes {
  id?: any;
  session_id?: any;
  content_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SubjectsSessionsContentOrdersCreationAttributes = Optional<SubjectsSessionsContentOrdersAttributes, 'id'>;

export class SubjectsSessionsContentOrders extends Model<SubjectsSessionsContentOrdersAttributes, SubjectsSessionsContentOrdersCreationAttributes> implements SubjectsSessionsContentOrdersAttributes {
  declare id?: any;
  declare session_id?: any;
  declare content_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
