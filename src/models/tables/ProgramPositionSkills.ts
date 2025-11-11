import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ProgramPositionSkillsAttributes {
  id?: number;
  uuid: string;
  position_id: number;
  name: string;
  target: string;
  detail: string;
  method: string;
}

export type ProgramPositionSkillsCreationAttributes = Optional<ProgramPositionSkillsAttributes, 'id'>;

export class ProgramPositionSkills extends Model<ProgramPositionSkillsAttributes, ProgramPositionSkillsCreationAttributes> implements ProgramPositionSkillsAttributes {
  declare id?: number;
  declare uuid: string;
  declare position_id: number;
  declare name: string;
  declare target: string;
  declare detail: string;
  declare method: string;

  public static initModel(sequelize: Sequelize): typeof ProgramPositionSkills {
    ProgramPositionSkills.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: false },
        position_id: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        target: { type: DataTypes.STRING, allowNull: false },
        detail: { type: DataTypes.STRING, allowNull: false },
        method: { type: DataTypes.STRING, allowNull: false }
      },
      {
        sequelize,
        tableName: 'program_position_skills',
        timestamps: false,
        underscored: true,
      }
    );
    return ProgramPositionSkills;
  }
}
