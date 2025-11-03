import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SemestersAttributes {
  id: string;
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

export type SemestersPk = "id";
export type SemestersId = Semesters[SemestersPk];
export type SemestersOptionalAttributes = "deletedAt";
export type SemestersCreationAttributes = Optional<SemestersAttributes, SemestersOptionalAttributes>;

export class Semesters extends Model<SemestersAttributes, SemestersCreationAttributes> implements SemestersAttributes {
  id!: string;
  semester!: number;
  batchyear!: number;
  planDateStart!: Date;
  planDateEnd!: Date;
  programDateStart!: Date;
  programDateEnd!: Date;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Semesters {
    return Semesters.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    semester: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    batchyear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    planDateStart: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'plan_date_start'
    },
    planDateEnd: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'plan_date_end'
    },
    programDateStart: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'program_date_start'
    },
    programDateEnd: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'program_date_end'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'semesters',
    schema: 'public',
    timestamps: false
  });
  }
}
