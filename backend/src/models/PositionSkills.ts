import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface PositionSkillsAttributes {
  id: number;
  uuid: string;
  positionId?: number;
  name: string;
  target: string;
  detail: string;
  method: string;
}

export type PositionSkillsPk = "id";
export type PositionSkillsId = PositionSkills[PositionSkillsPk];
export type PositionSkillsOptionalAttributes = "id" | "positionId";
export type PositionSkillsCreationAttributes = Optional<PositionSkillsAttributes, PositionSkillsOptionalAttributes>;

export class PositionSkills extends Model<PositionSkillsAttributes, PositionSkillsCreationAttributes> implements PositionSkillsAttributes {
  id!: number;
  uuid!: string;
  positionId?: number;
  name!: string;
  target!: string;
  detail!: string;
  method!: string;


  static initModel(sequelize: Sequelize.Sequelize): typeof PositionSkills {
    return PositionSkills.init({
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
      allowNull: true,
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
    tableName: 'position_skills',
    schema: 'public',
    timestamps: false
  });
  }
}
