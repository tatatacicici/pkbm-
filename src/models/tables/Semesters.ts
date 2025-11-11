import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SemestersAttributes {
  id?: any;
  semester?: any;
  batchyear?: any;
  plan_date_start?: any;
  plan_date_end?: any;
  program_date_start?: any;
  program_date_end?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SemestersCreationAttributes = Optional<SemestersAttributes, 'id'>;

export class Semesters extends Model<SemestersAttributes, SemestersCreationAttributes> implements SemestersAttributes {
  declare id?: any;
  declare semester?: any;
  declare batchyear?: any;
  declare plan_date_start?: any;
  declare plan_date_end?: any;
  declare program_date_start?: any;
  declare program_date_end?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Semesters {
    Semesters.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        semester: { type: DataTypes.INTEGER, allowNull: false },
        batchyear: { type: DataTypes.INTEGER, allowNull: false },
        plan_date_start: { type: DataTypes.DATE, allowNull: false },
        plan_date_end: { type: DataTypes.DATE, allowNull: false },
        program_date_start: { type: DataTypes.DATE, allowNull: false },
        program_date_end: { type: DataTypes.DATE, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
