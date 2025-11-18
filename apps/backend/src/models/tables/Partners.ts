import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PartnersAttributes {
  id?: string;
  userId?: string;
  officialName: string;
  categoryName: string;
  organizationName: string;
  industrialSector: string;
  mainOfficeAddress: string;
  provinceName: string;
  regencyName: string;
  website?: string;
  contactPerson: string;
  contactPhoneNumber: string;
  logo?: string;
  provinceCode: string;
  regencyCode: string;
  description?: string;
  slogan?: string;
}

export type PartnersCreationAttributes = Optional<PartnersAttributes, 'id' | 'userId' | 'website' | 'logo' | 'description' | 'slogan'>;

export class Partners extends Model<PartnersAttributes, PartnersCreationAttributes> implements PartnersAttributes {
  declare id?: string;
  declare userId?: string;
  declare officialName: string;
  declare categoryName: string;
  declare organizationName: string;
  declare industrialSector: string;
  declare mainOfficeAddress: string;
  declare provinceName: string;
  declare regencyName: string;
  declare website?: string;
  declare contactPerson: string;
  declare contactPhoneNumber: string;
  declare logo?: string;
  declare provinceCode: string;
  declare regencyCode: string;
  declare description?: string;
  declare slogan?: string;

  public static initModel(sequelize: Sequelize): typeof Partners {
    Partners.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: true,
            field: 'user_id'
        },
        officialName: { type: DataTypes.STRING, allowNull: false,
            field: 'official_name'
        },
        categoryName: { type: DataTypes.STRING, allowNull: false,
            field: 'category_name'
        },
        organizationName: { type: DataTypes.STRING, allowNull: false,
            field: 'organization_name'
        },
        industrialSector: { type: DataTypes.STRING, allowNull: false,
            field: 'industrial_sector'
        },
        mainOfficeAddress: { type: DataTypes.TEXT, allowNull: false,
            field: 'main_office_address'
        },
        provinceName: { type: DataTypes.STRING, allowNull: false,
            field: 'province_name'
        },
        regencyName: { type: DataTypes.STRING, allowNull: false,
            field: 'regency_name'
        },
        website: { type: DataTypes.STRING, allowNull: true,
            field: 'website'
        },
        contactPerson: { type: DataTypes.STRING, allowNull: false,
            field: 'contact_person'
        },
        contactPhoneNumber: { type: DataTypes.STRING, allowNull: false,
            field: 'contact_phone_number'
        },
        logo: { type: DataTypes.STRING, allowNull: true,
            field: 'logo'
        },
        provinceCode: { type: DataTypes.STRING, allowNull: false,
            field: 'province_code'
        },
        regencyCode: { type: DataTypes.STRING, allowNull: false,
            field: 'regency_code'
        },
        description: { type: DataTypes.STRING, allowNull: true,
            field: 'description'
        },
        slogan: { type: DataTypes.STRING, allowNull: true,
            field: 'slogan'
        }
      },
      {
        sequelize,
        tableName: 'partners',
        timestamps: false,
        underscored: false,
      }
    );
    return Partners;
  }
}
