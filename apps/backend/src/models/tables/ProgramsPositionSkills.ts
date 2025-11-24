import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ProgramsPositionSkillsAttributes {
  id?: number;
  uuid: string;
  positionId: number;
  name: string;
  target: string;
  detail: string;
  method: string;
}

export type ProgramsPositionSkillsCreationAttributes = Optional<ProgramsPositionSkillsAttributes, 'id'>;

export class ProgramsPositionSkills extends Model<ProgramsPositionSkillsAttributes, ProgramsPositionSkillsCreationAttributes> implements ProgramsPositionSkillsAttributes {
  declare id?: number;
  declare uuid: string;
  declare positionId: number;
  declare name: string;
  declare target: string;
  declare detail: string;
  declare method: string;

  public static initModel(sequelize: Sequelize): typeof ProgramsPositionSkills {
    ProgramsPositionSkills.init(
      {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true,
            field: 'id'
        },
        uuid: { type: DataTypes.UUID, allowNull: false,
            field: 'uuid'
        },
        positionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'position_id'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        target: { type: DataTypes.STRING, allowNull: false,
            field: 'target'
        },
        detail: { type: DataTypes.STRING, allowNull: false,
            field: 'detail'
        },
        method: { type: DataTypes.STRING, allowNull: false,
            field: 'method'
        }
      },
      {
        sequelize,
        tableName: 'programs_position_skills',
        timestamps: false,
        underscored: true,
      }
    );
    return ProgramsPositionSkills;
  }
}
