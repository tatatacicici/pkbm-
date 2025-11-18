import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsOutcomesAttributes {
  pk: number;
  uuid?: string;
  criteria?: string;
  subjectId: string;
}

export type SubjectsOutcomesCreationAttributes = Optional<SubjectsOutcomesAttributes, 'id' | 'uuid' | 'criteria'>;

export class SubjectsOutcomes extends Model<SubjectsOutcomesAttributes, SubjectsOutcomesCreationAttributes> implements SubjectsOutcomesAttributes {
  declare pk: number;
  declare uuid?: string;
  declare criteria?: string;
  declare subjectId: string;

  public static initModel(sequelize: Sequelize): typeof SubjectsOutcomes {
    SubjectsOutcomes.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        criteria: { type: DataTypes.TEXT, allowNull: true,
            field: 'criteria'
        },
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        }
      },
      {
        sequelize,
        tableName: 'subjects_outcomes',
        timestamps: false,
        underscored: true,
      }
    );
    return SubjectsOutcomes;
  }
}
