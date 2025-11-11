import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PositionSkillsAttributes {
  id?: number;
  uuid: string;
  position_id?: number;
  name: string;
  target: string;
  detail: string;
  method: string;
}

export type PositionSkillsCreationAttributes = Optional<PositionSkillsAttributes, 'id' | 'position_id'>;

export class PositionSkills extends Model<PositionSkillsAttributes, PositionSkillsCreationAttributes> implements PositionSkillsAttributes {
  declare id?: number;
  declare uuid: string;
  declare position_id?: number;
  declare name: string;
  declare target: string;
  declare detail: string;
  declare method: string;

  public static initModel(sequelize: Sequelize): typeof PositionSkills {
    PositionSkills.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        uuid: { type: DataTypes.UUID, allowNull: false },
        position_id: { type: DataTypes.INTEGER, allowNull: true },
        name: { type: DataTypes.STRING, allowNull: false },
        target: { type: DataTypes.STRING, allowNull: false },
        detail: { type: DataTypes.STRING, allowNull: false },
        method: { type: DataTypes.STRING, allowNull: false }
      },
      {
        sequelize,
        tableName: 'position_skills',
        timestamps: false,
        underscored: true,
      }
    );
    return PositionSkills;
  }
}
