import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeProgramOfferingsAttributes {
  id?: string;
  college_academic_cohort_id: string;
  major_id: string;
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  start_date: Date;
  end_date: Date;
}

export type CollegeProgramOfferingsCreationAttributes = Optional<CollegeProgramOfferingsAttributes, 'id' | 'created_at' | 'updated_at' | 'deleted_at'>;

export class CollegeProgramOfferings extends Model<CollegeProgramOfferingsAttributes, CollegeProgramOfferingsCreationAttributes> implements CollegeProgramOfferingsAttributes {
  declare id?: string;
  declare college_academic_cohort_id: string;
  declare major_id: string;
  declare created_at?: Date;
  declare updated_at?: Date;
  declare deleted_at?: Date;
  declare start_date: Date;
  declare end_date: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof CollegeProgramOfferings {
    CollegeProgramOfferings.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        college_academic_cohort_id: { type: DataTypes.UUID, allowNull: false },
        major_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        start_date: { type: DataTypes.DATE, allowNull: false },
        end_date: { type: DataTypes.DATE, allowNull: false }
      },
      {
        sequelize,
        tableName: 'college_program_offerings',
        timestamps: true,
        underscored: true,
      }
    );
    return CollegeProgramOfferings;
  }
}
