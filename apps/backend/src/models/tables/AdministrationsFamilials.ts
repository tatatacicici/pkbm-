import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdministrationsFamilialsAttributes {
  id?: string;
  administration_id: string;
  father_name?: string;
  father_occupation?: string;
  father_salary?: string;
  mother_name?: string;
  mother_occupation?: string;
  mother_salary?: string;
  self_salary?: string;
  live_with?: string;
  tuition_payer?: string;
  created_at: Date;
  updated_at: Date;
  self_occupation?: string;
  deleted_at?: Date;
}

export type AdministrationsFamilialsCreationAttributes = Optional<AdministrationsFamilialsAttributes, 'id' | 'father_name' | 'father_occupation' | 'father_salary' | 'mother_name' | 'mother_occupation' | 'mother_salary' | 'self_salary' | 'live_with' | 'tuition_payer' | 'self_occupation' | 'deleted_at'>;

export class AdministrationsFamilials extends Model<AdministrationsFamilialsAttributes, AdministrationsFamilialsCreationAttributes> implements AdministrationsFamilialsAttributes {
  declare id?: string;
  declare administration_id: string;
  declare father_name?: string;
  declare father_occupation?: string;
  declare father_salary?: string;
  declare mother_name?: string;
  declare mother_occupation?: string;
  declare mother_salary?: string;
  declare self_salary?: string;
  declare live_with?: string;
  declare tuition_payer?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare self_occupation?: string;
  declare deleted_at?: Date;

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
