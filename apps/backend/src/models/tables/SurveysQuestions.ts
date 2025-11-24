import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysQuestionsAttributes {
  pk: number;
  uuid?: string;
  surveyId: number;
  question: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SurveysQuestionsCreationAttributes = Optional<SurveysQuestionsAttributes, 'pk' | 'uuid' | 'deletedAt'>;

export class SurveysQuestions extends Model<SurveysQuestionsAttributes, SurveysQuestionsCreationAttributes> implements SurveysQuestionsAttributes {
  declare pk: number;
  declare uuid?: string;
  declare surveyId: number;
  declare question: string;
  declare type: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SurveysQuestions {
    SurveysQuestions.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        surveyId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'survey_id'
        },
        question: { type: DataTypes.TEXT, allowNull: false,
            field: 'question'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
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
        tableName: 'surveys_questions',
        timestamps: true,
        underscored: true,
      }
    );
    return SurveysQuestions;
  }
}
