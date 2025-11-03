import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface CollegeProgramOfferingsAttributes {
  id: string;
  collegeAcademicCohortId: string;
  majorId: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  startDate: Date;
  endDate: Date;
  status: "COMING_SOON" | "OPEN_FOR_REGISTRATION" | "ONGOING" | "COMPLETED";
}

export type CollegeProgramOfferingsPk = "id";
export type CollegeProgramOfferingsId = CollegeProgramOfferings[CollegeProgramOfferingsPk];
export type CollegeProgramOfferingsOptionalAttributes = "createdAt" | "updatedAt" | "deletedAt";
export type CollegeProgramOfferingsCreationAttributes = Optional<CollegeProgramOfferingsAttributes, CollegeProgramOfferingsOptionalAttributes>;

export class CollegeProgramOfferings extends Model<CollegeProgramOfferingsAttributes, CollegeProgramOfferingsCreationAttributes> implements CollegeProgramOfferingsAttributes {
  id!: string;
  collegeAcademicCohortId!: string;
  majorId!: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
  startDate!: Date;
  endDate!: Date;
  status!: "COMING_SOON" | "OPEN_FOR_REGISTRATION" | "ONGOING" | "COMPLETED";


  static initModel(sequelize: Sequelize.Sequelize): typeof CollegeProgramOfferings {
    return CollegeProgramOfferings.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    collegeAcademicCohortId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'college_academic_cohort_id'
    },
    majorId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'major_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'end_date'
    },
    status: {
      type: DataTypes.ENUM("COMING_SOON","OPEN_FOR_REGISTRATION","ONGOING","COMPLETED"),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'college_program_offerings',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "college_program_offerings_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
