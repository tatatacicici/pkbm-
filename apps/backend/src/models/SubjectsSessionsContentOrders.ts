import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SubjectsSessionsContentOrdersAttributes {
  id: string;
  sessionId: string;
  contentType: "MODULE" | "QUIZ" | "DISCUSSION" | "ASSIGNMENT" | "REFLECTION" | "ASSESSMENT";
  contentId: string;
  order: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SubjectsSessionsContentOrdersPk = "id";
export type SubjectsSessionsContentOrdersId = SubjectsSessionsContentOrders[SubjectsSessionsContentOrdersPk];
export type SubjectsSessionsContentOrdersOptionalAttributes = "deletedAt";
export type SubjectsSessionsContentOrdersCreationAttributes = Optional<SubjectsSessionsContentOrdersAttributes, SubjectsSessionsContentOrdersOptionalAttributes>;

export class SubjectsSessionsContentOrders extends Model<SubjectsSessionsContentOrdersAttributes, SubjectsSessionsContentOrdersCreationAttributes> implements SubjectsSessionsContentOrdersAttributes {
  id!: string;
  sessionId!: string;
  contentType!: "MODULE" | "QUIZ" | "DISCUSSION" | "ASSIGNMENT" | "REFLECTION" | "ASSESSMENT";
  contentId!: string;
  order!: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SubjectsSessionsContentOrders {
    return SubjectsSessionsContentOrders.init({
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
    contentType: {
      type: DataTypes.ENUM("MODULE","QUIZ","DISCUSSION","ASSIGNMENT","REFLECTION","ASSESSMENT"),
      allowNull: false,
      field: 'content_type'
    },
    contentId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'content_id'
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'subjects_sessions_content_orders',
    schema: 'public',
    timestamps: false
  });
  }
}
