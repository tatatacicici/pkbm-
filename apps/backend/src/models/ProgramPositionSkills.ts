import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ProgramPositionSkillsAttributes {
  id: number;
  uuid: string;
  positionId: number;
  name: string;
  target: string;
  detail: string;
  method: string;
}

export type ProgramPositionSkillsPk = "id";
export type ProgramPositionSkillsId = ProgramPositionSkills[ProgramPositionSkillsPk];
export type ProgramPositionSkillsOptionalAttributes = "id";
export type ProgramPositionSkillsCreationAttributes = Optional<ProgramPositionSkillsAttributes, ProgramPositionSkillsOptionalAttributes>;

export class ProgramPositionSkills extends Model<ProgramPositionSkillsAttributes, ProgramPositionSkillsCreationAttributes> implements ProgramPositionSkillsAttributes {
  id!: number;
  uuid!: string;
  positionId!: number;
  name!: string;
  target!: string;
  detail!: string;
  method!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof ProgramPositionSkills {
    return ProgramPositionSkills.init({
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
    tableName: 'program_position_skills',
    schema: 'public',
    timestamps: false
  });
  }
}
