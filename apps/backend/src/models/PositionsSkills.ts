import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface PositionsSkillsAttributes {
  id: number;
  uuid: string;
  positionId: number;
  name: string;
  target: string;
  detail: string;
  method: string;
  programPositionId?: number;
}

export type PositionsSkillsPk = "id";
export type PositionsSkillsId = PositionsSkills[PositionsSkillsPk];
export type PositionsSkillsOptionalAttributes = "id" | "programPositionId";
export type PositionsSkillsCreationAttributes = Optional<PositionsSkillsAttributes, PositionsSkillsOptionalAttributes>;

export class PositionsSkills extends Model<PositionsSkillsAttributes, PositionsSkillsCreationAttributes> implements PositionsSkillsAttributes {
  id!: number;
  uuid!: string;
  positionId!: number;
  name!: string;
  target!: string;
  detail!: string;
  method!: string;
  programPositionId?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof PositionsSkills {
    return PositionsSkills.init({
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
    },
    programPositionId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'program_position_id'
    }
  }, {
    sequelize,
    tableName: 'positions_skills',
    schema: 'public',
    timestamps: false
  });
  }
}
