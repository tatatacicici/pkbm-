import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GuidesFrequentlyAskedQuestionsAttributes {
  id?: any;
  title?: any;
  content?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type GuidesFrequentlyAskedQuestionsCreationAttributes = Optional<GuidesFrequentlyAskedQuestionsAttributes, 'id'>;

export class GuidesFrequentlyAskedQuestions extends Model<GuidesFrequentlyAskedQuestionsAttributes, GuidesFrequentlyAskedQuestionsCreationAttributes> implements GuidesFrequentlyAskedQuestionsAttributes {
  declare id?: any;
  declare title?: any;
  declare content?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
