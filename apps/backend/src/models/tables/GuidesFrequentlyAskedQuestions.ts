import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface GuidesFrequentlyAskedQuestionsAttributes {
  id?: string;
  title?: string;
  content?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type GuidesFrequentlyAskedQuestionsCreationAttributes = Optional<GuidesFrequentlyAskedQuestionsAttributes, 'id' | 'title' | 'content' | 'deletedAt'>;

export class GuidesFrequentlyAskedQuestions extends Model<GuidesFrequentlyAskedQuestionsAttributes, GuidesFrequentlyAskedQuestionsCreationAttributes> implements GuidesFrequentlyAskedQuestionsAttributes {
  declare id?: string;
  declare title?: string;
  declare content?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof GuidesFrequentlyAskedQuestions {
    GuidesFrequentlyAskedQuestions.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        title: { type: DataTypes.TEXT, allowNull: true,
            field: 'title'
        },
        content: { type: DataTypes.TEXT, allowNull: true,
            field: 'content'
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
        tableName: 'guides_frequently_asked_questions',
        timestamps: true,
        underscored: true,
      }
    );
    return GuidesFrequentlyAskedQuestions;
  }
}
