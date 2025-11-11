import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PartnersAttributes {
  id?: string;
  user_id?: string;
  official_name: string;
  category_name: string;
  organization_name: string;
  industrial_sector: string;
  main_office_address: string;
  province_name: string;
  regency_name: string;
  website?: string;
  contact_person: string;
  contact_phone_number: string;
  logo?: string;
  province_code: string;
  regency_code: string;
  description?: string;
  slogan?: string;
}

export type PartnersCreationAttributes = Optional<PartnersAttributes, 'id' | 'user_id' | 'website' | 'logo' | 'description' | 'slogan'>;

export class Partners extends Model<PartnersAttributes, PartnersCreationAttributes> implements PartnersAttributes {
  declare id?: string;
  declare user_id?: string;
  declare official_name: string;
  declare category_name: string;
  declare organization_name: string;
  declare industrial_sector: string;
  declare main_office_address: string;
  declare province_name: string;
  declare regency_name: string;
  declare website?: string;
  declare contact_person: string;
  declare contact_phone_number: string;
  declare logo?: string;
  declare province_code: string;
  declare regency_code: string;
  declare description?: string;
  declare slogan?: string;

  public static initModel(sequelize: Sequelize): typeof Partners {
    Partners.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: true },
        official_name: { type: DataTypes.STRING, allowNull: false },
        category_name: { type: DataTypes.STRING, allowNull: false },
        organization_name: { type: DataTypes.STRING, allowNull: false },
        industrial_sector: { type: DataTypes.STRING, allowNull: false },
        main_office_address: { type: DataTypes.TEXT, allowNull: false },
        province_name: { type: DataTypes.STRING, allowNull: false },
        regency_name: { type: DataTypes.STRING, allowNull: false },
        website: { type: DataTypes.STRING, allowNull: true },
        contact_person: { type: DataTypes.STRING, allowNull: false },
        contact_phone_number: { type: DataTypes.STRING, allowNull: false },
        logo: { type: DataTypes.STRING, allowNull: true },
        province_code: { type: DataTypes.STRING, allowNull: false },
        regency_code: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: true },
        slogan: { type: DataTypes.STRING, allowNull: true }
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
