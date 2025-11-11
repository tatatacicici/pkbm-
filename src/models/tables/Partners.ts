import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface PartnersAttributes {
  id?: any;
  user_id?: any;
  official_name?: any;
  category_name?: any;
  organization_name?: any;
  industrial_sector?: any;
  main_office_address?: any;
  province_name?: any;
  regency_name?: any;
  website?: any;
  contact_person?: any;
  contact_phone_number?: any;
  logo?: any;
  province_code?: any;
  regency_code?: any;
  description?: any;
  slogan?: any;
}

export type PartnersCreationAttributes = Optional<PartnersAttributes, 'id'>;

export class Partners extends Model<PartnersAttributes, PartnersCreationAttributes> implements PartnersAttributes {
  declare id?: any;
  declare user_id?: any;
  declare official_name?: any;
  declare category_name?: any;
  declare organization_name?: any;
  declare industrial_sector?: any;
  declare main_office_address?: any;
  declare province_name?: any;
  declare regency_name?: any;
  declare website?: any;
  declare contact_person?: any;
  declare contact_phone_number?: any;
  declare logo?: any;
  declare province_code?: any;
  declare regency_code?: any;
  declare description?: any;
  declare slogan?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

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
