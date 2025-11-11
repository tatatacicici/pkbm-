import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdministrationsBiodatasAttributes {
  id?: string;
  administration_id: string;
  gender?: string;
  birthdate?: Date;
  birthplace?: string;
  address?: string;
  last_education?: string;
  nim?: string;
  university?: string;
  major?: string;
  semester?: number;
  created_at: Date;
  updated_at: Date;
  full_name?: string;
  phone_number?: string;
  deleted_at?: Date;
  province?: string;
  province_id?: string;
  regency?: string;
  regency_id?: string;
  district?: string;
  district_id?: string;
  village?: string;
  village_id?: string;
  identity_number?: string;
  postal_code?: string;
  referral_source?: string;
  current_occupation?: string;
}

export type AdministrationsBiodatasCreationAttributes = Optional<AdministrationsBiodatasAttributes, 'id' | 'gender' | 'birthdate' | 'birthplace' | 'address' | 'last_education' | 'nim' | 'university' | 'major' | 'semester' | 'full_name' | 'phone_number' | 'deleted_at' | 'province' | 'province_id' | 'regency' | 'regency_id' | 'district' | 'district_id' | 'village' | 'village_id' | 'identity_number' | 'postal_code' | 'referral_source' | 'current_occupation'>;

export class AdministrationsBiodatas extends Model<AdministrationsBiodatasAttributes, AdministrationsBiodatasCreationAttributes> implements AdministrationsBiodatasAttributes {
  declare id?: string;
  declare administration_id: string;
  declare gender?: string;
  declare birthdate?: Date;
  declare birthplace?: string;
  declare address?: string;
  declare last_education?: string;
  declare nim?: string;
  declare university?: string;
  declare major?: string;
  declare semester?: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare full_name?: string;
  declare phone_number?: string;
  declare deleted_at?: Date;
  declare province?: string;
  declare province_id?: string;
  declare regency?: string;
  declare regency_id?: string;
  declare district?: string;
  declare district_id?: string;
  declare village?: string;
  declare village_id?: string;
  declare identity_number?: string;
  declare postal_code?: string;
  declare referral_source?: string;
  declare current_occupation?: string;

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
