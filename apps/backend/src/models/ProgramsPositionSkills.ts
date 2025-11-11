import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ProgramsPositionSkillsAttributes {
  id: number;
  uuid: string;
  positionId: number;
  name: string;
  target: string;
  detail: string;
  method: string;
}

export type ProgramsPositionSkillsPk = "id";
export type ProgramsPositionSkillsId = ProgramsPositionSkills[ProgramsPositionSkillsPk];
export type ProgramsPositionSkillsOptionalAttributes = "id";
export type ProgramsPositionSkillsCreationAttributes = Optional<ProgramsPositionSkillsAttributes, ProgramsPositionSkillsOptionalAttributes>;

export class ProgramsPositionSkills extends Model<ProgramsPositionSkillsAttributes, ProgramsPositionSkillsCreationAttributes> implements ProgramsPositionSkillsAttributes {
  id!: number;
  uuid!: string;
  positionId!: number;
  name!: string;
  target!: string;
  detail!: string;
  method!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ProgramsPositionSkills {
    return ProgramsPositionSkills.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    positionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'position_id'
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    target: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    detail: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    method: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'programs_position_skills',
    schema: 'public',
    timestamps: false
  });
  }
}
