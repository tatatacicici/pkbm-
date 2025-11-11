import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GuidesFrequentlyAskedQuestionsAttributes {
  id?: string;
  title?: string;
  content?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type GuidesFrequentlyAskedQuestionsCreationAttributes = Optional<GuidesFrequentlyAskedQuestionsAttributes, 'id' | 'title' | 'content' | 'deleted_at'>;

export class GuidesFrequentlyAskedQuestions extends Model<GuidesFrequentlyAskedQuestionsAttributes, GuidesFrequentlyAskedQuestionsCreationAttributes> implements GuidesFrequentlyAskedQuestionsAttributes {
  declare id?: string;
  declare title?: string;
  declare content?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof GuidesFrequentlyAskedQuestions {
    GuidesFrequentlyAskedQuestions.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        title: { type: DataTypes.TEXT, allowNull: true },
        content: { type: DataTypes.TEXT, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'guides_frequently_asked_questions',
        timestamps: true,
        underscored: true,
      }
    );
    return GuidesFrequentlyAskedQuestions;
  }
}
