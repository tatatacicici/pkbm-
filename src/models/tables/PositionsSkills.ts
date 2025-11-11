import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PositionsSkillsAttributes {
  id?: any;
  uuid?: any;
  position_id?: any;
  name?: any;
  target?: any;
  detail?: any;
  method?: any;
  program_position_id?: any;
}

export type PositionsSkillsCreationAttributes = Optional<PositionsSkillsAttributes, 'id'>;

export class PositionsSkills extends Model<PositionsSkillsAttributes, PositionsSkillsCreationAttributes> implements PositionsSkillsAttributes {
  declare id?: any;
  declare uuid?: any;
  declare position_id?: any;
  declare name?: any;
  declare target?: any;
  declare detail?: any;
  declare method?: any;
  declare program_position_id?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

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
