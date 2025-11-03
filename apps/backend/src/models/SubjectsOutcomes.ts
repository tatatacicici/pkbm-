import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SubjectsOutcomesAttributes {
  pk: number;
  uuid?: string;
  criteria?: string;
  subjectId: string;
}

export type SubjectsOutcomesOptionalAttributes = "pk" | "uuid" | "criteria";
export type SubjectsOutcomesCreationAttributes = Optional<SubjectsOutcomesAttributes, SubjectsOutcomesOptionalAttributes>;

export class SubjectsOutcomes extends Model<SubjectsOutcomesAttributes, SubjectsOutcomesCreationAttributes> implements SubjectsOutcomesAttributes {
  pk!: number;
  uuid?: string;
  criteria?: string;
  subjectId!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof SubjectsOutcomes {
    return SubjectsOutcomes.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: true
    },
    criteria: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    subjectId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'subject_id'
    }
  }, {
    sequelize,
    tableName: 'subjects_outcomes',
    schema: 'public',
    timestamps: false
  });
  }
}
