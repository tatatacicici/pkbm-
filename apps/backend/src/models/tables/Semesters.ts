import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SemestersAttributes {
  id?: string;
  semester: number;
  batchyear: number;
  planDateStart: Date;
  planDateEnd: Date;
  programDateStart: Date;
  programDateEnd: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SemestersCreationAttributes = Optional<SemestersAttributes, 'id' | 'deletedAt'>;

export class Semesters extends Model<SemestersAttributes, SemestersCreationAttributes> implements SemestersAttributes {
  declare id?: string;
  declare semester: number;
  declare batchyear: number;
  declare planDateStart: Date;
  declare planDateEnd: Date;
  declare programDateStart: Date;
  declare programDateEnd: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Semesters {
    Semesters.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        semester: { type: DataTypes.INTEGER, allowNull: false,
            field: 'semester'
        },
        batchyear: { type: DataTypes.INTEGER, allowNull: false,
            field: 'batchyear'
        },
        planDateStart: { type: DataTypes.DATE, allowNull: false,
            field: 'plan_date_start'
        },
        planDateEnd: { type: DataTypes.DATE, allowNull: false,
            field: 'plan_date_end'
        },
        programDateStart: { type: DataTypes.DATE, allowNull: false,
            field: 'program_date_start'
        },
        programDateEnd: { type: DataTypes.DATE, allowNull: false,
            field: 'program_date_end'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
      },
      {
        sequelize,
        tableName: 'semesters',
        timestamps: true,
        underscored: false,
      }
    );
    return Semesters;
  }
}
