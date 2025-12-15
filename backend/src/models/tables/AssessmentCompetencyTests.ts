import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AssessmentCompetencyTestsAttributes {
  pk: number;
  id?: string;
  title: string;
  details: string;
  thumbnail: string;
  type: string;
  price: number;
  mentorId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type AssessmentCompetencyTestsCreationAttributes = Optional<AssessmentCompetencyTestsAttributes, 'id' | 'deletedAt'>;

export class AssessmentCompetencyTests extends Model<AssessmentCompetencyTestsAttributes, AssessmentCompetencyTestsCreationAttributes> implements AssessmentCompetencyTestsAttributes {
  declare pk: number;
  declare id?: string;
  declare title: string;
  declare details: string;
  declare thumbnail: string;
  declare type: string;
  declare price: number;
  declare mentorId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AssessmentCompetencyTests {
    AssessmentCompetencyTests.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        title: { type: DataTypes.STRING, allowNull: false,
            field: 'title'
        },
        details: { type: DataTypes.TEXT, allowNull: false,
            field: 'details'
        },
        thumbnail: { type: DataTypes.STRING, allowNull: false,
            field: 'thumbnail'
        },
        type: { type: DataTypes.STRING, allowNull: false,
            field: 'type'
        },
        price: { type: DataTypes.DOUBLE, allowNull: false,
            field: 'price'
        },
        mentorId: { type: DataTypes.UUID, allowNull: false,
            field: 'mentor_id'
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
        tableName: 'assessment_competency_tests',
        timestamps: true,
        underscored: true,
      }
    );
    return AssessmentCompetencyTests;
  }
}
