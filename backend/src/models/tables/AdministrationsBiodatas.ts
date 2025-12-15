import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdministrationsBiodatasAttributes {
  id?: string;
  administrationId: string;
  gender?: string;
  birthdate?: Date;
  birthplace?: string;
  address?: string;
  lastEducation?: string;
  nim?: string;
  university?: string;
  major?: string;
  semester?: number;
  createdAt: Date;
  updatedAt: Date;
  fullName?: string;
  phoneNumber?: string;
  deletedAt?: Date;
  province?: string;
  provinceId?: string;
  regency?: string;
  regencyId?: string;
  district?: string;
  districtId?: string;
  village?: string;
  villageId?: string;
  identityNumber?: string;
  postalCode?: string;
  referralSource?: string;
  currentOccupation?: string;
}

export type AdministrationsBiodatasCreationAttributes = Optional<AdministrationsBiodatasAttributes, 'id' | 'gender' | 'birthdate' | 'birthplace' | 'address' | 'lastEducation' | 'nim' | 'university' | 'major' | 'semester' | 'fullName' | 'phoneNumber' | 'deletedAt' | 'province' | 'provinceId' | 'regency' | 'regencyId' | 'district' | 'districtId' | 'village' | 'villageId' | 'identityNumber' | 'postalCode' | 'referralSource' | 'currentOccupation'>;

export class AdministrationsBiodatas extends Model<AdministrationsBiodatasAttributes, AdministrationsBiodatasCreationAttributes> implements AdministrationsBiodatasAttributes {
  declare id?: string;
  declare administrationId: string;
  declare gender?: string;
  declare birthdate?: Date;
  declare birthplace?: string;
  declare address?: string;
  declare lastEducation?: string;
  declare nim?: string;
  declare university?: string;
  declare major?: string;
  declare semester?: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare fullName?: string;
  declare phoneNumber?: string;
  declare deletedAt?: Date;
  declare province?: string;
  declare provinceId?: string;
  declare regency?: string;
  declare regencyId?: string;
  declare district?: string;
  declare districtId?: string;
  declare village?: string;
  declare villageId?: string;
  declare identityNumber?: string;
  declare postalCode?: string;
  declare referralSource?: string;
  declare currentOccupation?: string;

  public static initModel(sequelize: Sequelize): typeof AdministrationsBiodatas {
    AdministrationsBiodatas.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        administrationId: { type: DataTypes.UUID, allowNull: false,
            field: 'administration_id'
        },
        gender: { type: DataTypes.STRING, allowNull: true,
            field: 'gender'
        },
        birthdate: { type: DataTypes.DATE, allowNull: true,
            field: 'birthdate'
        },
        birthplace: { type: DataTypes.STRING, allowNull: true,
            field: 'birthplace'
        },
        address: { type: DataTypes.STRING, allowNull: true,
            field: 'address'
        },
        lastEducation: { type: DataTypes.STRING, allowNull: true,
            field: 'last_education'
        },
        nim: { type: DataTypes.STRING, allowNull: true,
            field: 'nim'
        },
        university: { type: DataTypes.STRING, allowNull: true,
            field: 'university'
        },
        major: { type: DataTypes.STRING, allowNull: true,
            field: 'major'
        },
        semester: { type: DataTypes.INTEGER, allowNull: true,
            field: 'semester'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        fullName: { type: DataTypes.STRING, allowNull: true,
            field: 'full_name'
        },
        phoneNumber: { type: DataTypes.STRING, allowNull: true,
            field: 'phone_number'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        province: { type: DataTypes.STRING, allowNull: true,
            field: 'province'
        },
        provinceId: { type: DataTypes.STRING, allowNull: true,
            field: 'province_id'
        },
        regency: { type: DataTypes.STRING, allowNull: true,
            field: 'regency'
        },
        regencyId: { type: DataTypes.STRING, allowNull: true,
            field: 'regency_id'
        },
        district: { type: DataTypes.STRING, allowNull: true,
            field: 'district'
        },
        districtId: { type: DataTypes.STRING, allowNull: true,
            field: 'district_id'
        },
        village: { type: DataTypes.STRING, allowNull: true,
            field: 'village'
        },
        villageId: { type: DataTypes.STRING, allowNull: true,
            field: 'village_id'
        },
        identityNumber: { type: DataTypes.STRING, allowNull: true,
            field: 'identity_number'
        },
        postalCode: { type: DataTypes.STRING, allowNull: true,
            field: 'postal_code'
        },
        referralSource: { type: DataTypes.STRING, allowNull: true,
            field: 'referral_source'
        },
        currentOccupation: { type: DataTypes.STRING, allowNull: true,
            field: 'current_occupation'
        }
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
