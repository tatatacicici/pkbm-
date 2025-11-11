import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface TeachersRegistrationsAttributes {
  id?: any;
  full_name?: any;
  email?: any;
  phone_number?: any;
  address?: any;
  organization?: any;
  linkedin_url?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  department?: any;
  last_education?: any;
  birth_date?: any;
  interest_field?: any;
  feedback?: any;
  contributions?: any;
  user_id?: any;
  status?: any;
}

export type TeachersRegistrationsCreationAttributes = Optional<TeachersRegistrationsAttributes, 'id'>;

export class TeachersRegistrations extends Model<TeachersRegistrationsAttributes, TeachersRegistrationsCreationAttributes> implements TeachersRegistrationsAttributes {
  declare id?: any;
  declare full_name?: any;
  declare email?: any;
  declare phone_number?: any;
  declare address?: any;
  declare organization?: any;
  declare linkedin_url?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare department?: any;
  declare last_education?: any;
  declare birth_date?: any;
  declare interest_field?: any;
  declare feedback?: any;
  declare contributions?: any;
  declare user_id?: any;
  declare status?: any;

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
