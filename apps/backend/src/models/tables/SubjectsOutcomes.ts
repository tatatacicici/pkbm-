import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsOutcomesAttributes {
  pk: number;
  uuid?: string;
  criteria?: string;
  subject_id: string;
}

export type SubjectsOutcomesCreationAttributes = Optional<SubjectsOutcomesAttributes, 'id' | 'uuid' | 'criteria'>;

export class SubjectsOutcomes extends Model<SubjectsOutcomesAttributes, SubjectsOutcomesCreationAttributes> implements SubjectsOutcomesAttributes {
  declare pk: number;
  declare uuid?: string;
  declare criteria?: string;
  declare subject_id: string;

  public static initModel(sequelize: Sequelize): typeof SubjectsOutcomes {
    SubjectsOutcomes.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        uuid: { type: DataTypes.UUID, allowNull: true },
        criteria: { type: DataTypes.TEXT, allowNull: true },
        subject_id: { type: DataTypes.UUID, allowNull: false }
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
