import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsSessionsContentOrdersAttributes {
  id?: string;
  sessionId: string;
  contentId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SubjectsSessionsContentOrdersCreationAttributes = Optional<SubjectsSessionsContentOrdersAttributes, 'id' | 'deletedAt'>;

export class SubjectsSessionsContentOrders extends Model<SubjectsSessionsContentOrdersAttributes, SubjectsSessionsContentOrdersCreationAttributes> implements SubjectsSessionsContentOrdersAttributes {
  declare id?: string;
  declare sessionId: string;
  declare contentId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SubjectsSessionsContentOrders {
    SubjectsSessionsContentOrders.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        contentId: { type: DataTypes.UUID, allowNull: false,
            field: 'content_id'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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
