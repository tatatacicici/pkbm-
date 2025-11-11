import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface CollegeProgramOfferingsAttributes {
  id?: any;
  college_academic_cohort_id?: any;
  major_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  start_date?: any;
  end_date?: any;
}

export type CollegeProgramOfferingsCreationAttributes = Optional<CollegeProgramOfferingsAttributes, 'id'>;

export class CollegeProgramOfferings extends Model<CollegeProgramOfferingsAttributes, CollegeProgramOfferingsCreationAttributes> implements CollegeProgramOfferingsAttributes {
  declare id?: any;
  declare college_academic_cohort_id?: any;
  declare major_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare start_date?: any;
  declare end_date?: any;

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
