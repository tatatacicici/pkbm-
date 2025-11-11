import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PositionsSkillsAttributes {
  id?: number;
  uuid: string;
  position_id: number;
  name: string;
  target: string;
  detail: string;
  method: string;
  program_position_id?: number;
}

export type PositionsSkillsCreationAttributes = Optional<PositionsSkillsAttributes, 'id' | 'program_position_id'>;

export class PositionsSkills extends Model<PositionsSkillsAttributes, PositionsSkillsCreationAttributes> implements PositionsSkillsAttributes {
  declare id?: number;
  declare uuid: string;
  declare position_id: number;
  declare name: string;
  declare target: string;
  declare detail: string;
  declare method: string;
  declare program_position_id?: number;

  public static initModel(sequelize: Sequelize): typeof PositionsSkills {
    PositionsSkills.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: false },
        position_id: { type: DataTypes.INTEGER, allowNull: false },
        name: { type: DataTypes.STRING, allowNull: false },
        target: { type: DataTypes.STRING, allowNull: false },
        detail: { type: DataTypes.STRING, allowNull: false },
        method: { type: DataTypes.STRING, allowNull: false },
        program_position_id: { type: DataTypes.INTEGER, allowNull: true }
      },
      {
        sequelize,
        tableName: 'positions_skills',
        timestamps: false,
        underscored: true,
      }
    );
    return PositionsSkills;
  }
}
