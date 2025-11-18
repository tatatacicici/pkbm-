import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SurveysResponsesAttributes {
  pk: number;
  uuid?: string;
  surveyId: number;
  userId: string;
  startDate: Date;
  endDate?: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SurveysResponsesCreationAttributes = Optional<SurveysResponsesAttributes, 'id' | 'uuid' | 'endDate' | 'deletedAt'>;

export class SurveysResponses extends Model<SurveysResponsesAttributes, SurveysResponsesCreationAttributes> implements SurveysResponsesAttributes {
  declare pk: number;
  declare uuid?: string;
  declare surveyId: number;
  declare userId: string;
  declare startDate: Date;
  declare endDate?: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SurveysResponses {
    SurveysResponses.init(
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
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        startDate: { type: DataTypes.DATE, allowNull: false,
            field: 'start_date'
        },
        endDate: { type: DataTypes.DATE, allowNull: true,
            field: 'end_date'
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
        tableName: 'surveys_responses',
        timestamps: true,
        underscored: true,
      }
    );
    return SurveysResponses;
  }
}
