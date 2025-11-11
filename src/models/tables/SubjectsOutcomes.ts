import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectsOutcomesAttributes {
  pk?: any;
  uuid?: any;
  criteria?: any;
  subject_id?: any;
}

export type SubjectsOutcomesCreationAttributes = Optional<SubjectsOutcomesAttributes, 'id'>;

export class SubjectsOutcomes extends Model<SubjectsOutcomesAttributes, SubjectsOutcomesCreationAttributes> implements SubjectsOutcomesAttributes {
  declare pk?: any;
  declare uuid?: any;
  declare criteria?: any;
  declare subject_id?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

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
