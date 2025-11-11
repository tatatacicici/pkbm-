import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface TeachersRegistrationsAttributes {
  id?: string;
  full_name: string;
  email?: string;
  phone_number: string;
  address: string;
  organization: string;
  linkedin_url: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  department: string;
  last_education: string;
  birth_date: Date;
  interest_field: string;
  feedback: string;
  contributions?: string;
  user_id?: string;
  status?: string;
}

export type TeachersRegistrationsCreationAttributes = Optional<TeachersRegistrationsAttributes, 'id' | 'email' | 'deleted_at' | 'contributions' | 'user_id' | 'status'>;

export class TeachersRegistrations extends Model<TeachersRegistrationsAttributes, TeachersRegistrationsCreationAttributes> implements TeachersRegistrationsAttributes {
  declare id?: string;
  declare full_name: string;
  declare email?: string;
  declare phone_number: string;
  declare address: string;
  declare organization: string;
  declare linkedin_url: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare department: string;
  declare last_education: string;
  declare birth_date: Date;
  declare interest_field: string;
  declare feedback: string;
  declare contributions?: string;
  declare user_id?: string;
  declare status?: string;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof TeachersRegistrations {
    TeachersRegistrations.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        full_name: { type: DataTypes.STRING, allowNull: false },
        email: { type: DataTypes.STRING, allowNull: true },
        phone_number: { type: DataTypes.STRING, allowNull: false },
        address: { type: DataTypes.TEXT, allowNull: false },
        organization: { type: DataTypes.STRING, allowNull: false },
        linkedin_url: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        department: { type: DataTypes.STRING, allowNull: false },
        last_education: { type: DataTypes.STRING, allowNull: false },
        birth_date: { type: DataTypes.DATE, allowNull: false },
        interest_field: { type: DataTypes.STRING, allowNull: false },
        feedback: { type: DataTypes.TEXT, allowNull: false },
        contributions: { type: DataTypes.STRING, allowNull: true },
        user_id: { type: DataTypes.UUID, allowNull: true },
        status: { type: DataTypes.STRING, allowNull: true }
      },
      {
        sequelize,
        tableName: 'teachers_registrations',
        timestamps: true,
        underscored: true,
      }
    );
    return TeachersRegistrations;
  }
}
