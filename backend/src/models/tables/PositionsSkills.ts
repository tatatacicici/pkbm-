import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PositionsSkillsAttributes {
  id?: number;
  uuid: string;
  positionId: number;
  name: string;
  target: string;
  detail: string;
  method: string;
  programPositionId?: number;
}

export type PositionsSkillsCreationAttributes = Optional<PositionsSkillsAttributes, 'id' | 'programPositionId'>;

export class PositionsSkills extends Model<PositionsSkillsAttributes, PositionsSkillsCreationAttributes> implements PositionsSkillsAttributes {
  declare id?: number;
  declare uuid: string;
  declare positionId: number;
  declare name: string;
  declare target: string;
  declare detail: string;
  declare method: string;
  declare programPositionId?: number;

  public static initModel(sequelize: Sequelize): typeof PositionsSkills {
    PositionsSkills.init(
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
        },
        programPositionId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'program_position_id'
        }
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
