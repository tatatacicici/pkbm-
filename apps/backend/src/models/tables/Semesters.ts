import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SemestersAttributes {
  id?: string;
  semester: number;
  batchyear: number;
  plan_date_start: Date;
  plan_date_end: Date;
  program_date_start: Date;
  program_date_end: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SemestersCreationAttributes = Optional<SemestersAttributes, 'id' | 'deleted_at'>;

export class Semesters extends Model<SemestersAttributes, SemestersCreationAttributes> implements SemestersAttributes {
  declare id?: string;
  declare semester: number;
  declare batchyear: number;
  declare plan_date_start: Date;
  declare plan_date_end: Date;
  declare program_date_start: Date;
  declare program_date_end: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
