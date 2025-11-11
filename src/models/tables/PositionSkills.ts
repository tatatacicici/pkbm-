import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PositionSkillsAttributes {
  id?: any;
  uuid?: any;
  position_id?: any;
  name?: any;
  target?: any;
  detail?: any;
  method?: any;
}

export type PositionSkillsCreationAttributes = Optional<PositionSkillsAttributes, 'id'>;

export class PositionSkills extends Model<PositionSkillsAttributes, PositionSkillsCreationAttributes> implements PositionSkillsAttributes {
  declare id?: any;
  declare uuid?: any;
  declare position_id?: any;
  declare name?: any;
  declare target?: any;
  declare detail?: any;
  declare method?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

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
