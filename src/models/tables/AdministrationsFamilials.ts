import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdministrationsFamilialsAttributes {
  id?: any;
  administration_id?: any;
  father_name?: any;
  father_occupation?: any;
  father_salary?: any;
  mother_name?: any;
  mother_occupation?: any;
  mother_salary?: any;
  self_salary?: any;
  live_with?: any;
  tuition_payer?: any;
  created_at?: any;
  updated_at?: any;
  self_occupation?: any;
  deleted_at?: any;
}

export type AdministrationsFamilialsCreationAttributes = Optional<AdministrationsFamilialsAttributes, 'id'>;

export class AdministrationsFamilials extends Model<AdministrationsFamilialsAttributes, AdministrationsFamilialsCreationAttributes> implements AdministrationsFamilialsAttributes {
  declare id?: any;
  declare administration_id?: any;
  declare father_name?: any;
  declare father_occupation?: any;
  declare father_salary?: any;
  declare mother_name?: any;
  declare mother_occupation?: any;
  declare mother_salary?: any;
  declare self_salary?: any;
  declare live_with?: any;
  declare tuition_payer?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare self_occupation?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AdministrationsFamilials {
    AdministrationsFamilials.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        administration_id: { type: DataTypes.UUID, allowNull: false },
        father_name: { type: DataTypes.STRING, allowNull: true },
        father_occupation: { type: DataTypes.STRING, allowNull: true },
        father_salary: { type: DataTypes.STRING, allowNull: true },
        mother_name: { type: DataTypes.STRING, allowNull: true },
        mother_occupation: { type: DataTypes.STRING, allowNull: true },
        mother_salary: { type: DataTypes.STRING, allowNull: true },
        self_salary: { type: DataTypes.STRING, allowNull: true },
        live_with: { type: DataTypes.STRING, allowNull: true },
        tuition_payer: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        self_occupation: { type: DataTypes.STRING, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'administrations_familials',
        timestamps: true,
        underscored: true,
      }
    );
    return AdministrationsFamilials;
  }
}
