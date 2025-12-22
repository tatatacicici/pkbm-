import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface GuidesFrequentlyAskedQuestionsAttributes {
  id: string;
  title?: string;
  content?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type GuidesFrequentlyAskedQuestionsPk = "id";
export type GuidesFrequentlyAskedQuestionsId = GuidesFrequentlyAskedQuestions[GuidesFrequentlyAskedQuestionsPk];
export type GuidesFrequentlyAskedQuestionsOptionalAttributes = "title" | "content" | "deletedAt";
export type GuidesFrequentlyAskedQuestionsCreationAttributes = Optional<GuidesFrequentlyAskedQuestionsAttributes, GuidesFrequentlyAskedQuestionsOptionalAttributes>;

export class GuidesFrequentlyAskedQuestions extends Model<GuidesFrequentlyAskedQuestionsAttributes, GuidesFrequentlyAskedQuestionsCreationAttributes> implements GuidesFrequentlyAskedQuestionsAttributes {
  id!: string;
  title?: string;
  content?: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof GuidesFrequentlyAskedQuestions {
    return GuidesFrequentlyAskedQuestions.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
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
    tableName: 'guides_frequently_asked_questions',
    schema: 'public',
    timestamps: false
  });
  }
}
