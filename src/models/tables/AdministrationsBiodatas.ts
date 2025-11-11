import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdministrationsBiodatasAttributes {
  id?: any;
  administration_id?: any;
  gender?: any;
  birthdate?: any;
  birthplace?: any;
  address?: any;
  last_education?: any;
  nim?: any;
  university?: any;
  major?: any;
  semester?: any;
  created_at?: any;
  updated_at?: any;
  full_name?: any;
  phone_number?: any;
  deleted_at?: any;
  province?: any;
  province_id?: any;
  regency?: any;
  regency_id?: any;
  district?: any;
  district_id?: any;
  village?: any;
  village_id?: any;
  identity_number?: any;
  postal_code?: any;
  referral_source?: any;
  current_occupation?: any;
}

export type AdministrationsBiodatasCreationAttributes = Optional<AdministrationsBiodatasAttributes, 'id'>;

export class AdministrationsBiodatas extends Model<AdministrationsBiodatasAttributes, AdministrationsBiodatasCreationAttributes> implements AdministrationsBiodatasAttributes {
  declare id?: any;
  declare administration_id?: any;
  declare gender?: any;
  declare birthdate?: any;
  declare birthplace?: any;
  declare address?: any;
  declare last_education?: any;
  declare nim?: any;
  declare university?: any;
  declare major?: any;
  declare semester?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare full_name?: any;
  declare phone_number?: any;
  declare deleted_at?: any;
  declare province?: any;
  declare province_id?: any;
  declare regency?: any;
  declare regency_id?: any;
  declare district?: any;
  declare district_id?: any;
  declare village?: any;
  declare village_id?: any;
  declare identity_number?: any;
  declare postal_code?: any;
  declare referral_source?: any;
  declare current_occupation?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AdministrationsBiodatas {
    AdministrationsBiodatas.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        administration_id: { type: DataTypes.UUID, allowNull: false },
        gender: { type: DataTypes.STRING, allowNull: true },
        birthdate: { type: DataTypes.DATE, allowNull: true },
        birthplace: { type: DataTypes.STRING, allowNull: true },
        address: { type: DataTypes.STRING, allowNull: true },
        last_education: { type: DataTypes.STRING, allowNull: true },
        nim: { type: DataTypes.STRING, allowNull: true },
        university: { type: DataTypes.STRING, allowNull: true },
        major: { type: DataTypes.STRING, allowNull: true },
        semester: { type: DataTypes.INTEGER, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        full_name: { type: DataTypes.STRING, allowNull: true },
        phone_number: { type: DataTypes.STRING, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        province: { type: DataTypes.STRING, allowNull: true },
        province_id: { type: DataTypes.STRING, allowNull: true },
        regency: { type: DataTypes.STRING, allowNull: true },
        regency_id: { type: DataTypes.STRING, allowNull: true },
        district: { type: DataTypes.STRING, allowNull: true },
        district_id: { type: DataTypes.STRING, allowNull: true },
        village: { type: DataTypes.STRING, allowNull: true },
        village_id: { type: DataTypes.STRING, allowNull: true },
        identity_number: { type: DataTypes.STRING, allowNull: true },
        postal_code: { type: DataTypes.STRING, allowNull: true },
        referral_source: { type: DataTypes.STRING, allowNull: true },
        current_occupation: { type: DataTypes.STRING, allowNull: true }
      },
      {
        sequelize,
        tableName: 'administrations_biodatas',
        timestamps: true,
        underscored: true,
      }
    );
    return AdministrationsBiodatas;
  }
}
