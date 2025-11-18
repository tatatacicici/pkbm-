import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface TeachersRegistrationsAttributes {
  id?: string;
  fullName: string;
  email?: string;
  phoneNumber: string;
  address: string;
  organization: string;
  linkedinUrl: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  department: string;
  lastEducation: string;
  birthDate: Date;
  interestField: string;
  feedback: string;
  contributions?: string;
  userId?: string;
  status?: string;
}

export type TeachersRegistrationsCreationAttributes = Optional<TeachersRegistrationsAttributes, 'id' | 'email' | 'deletedAt' | 'contributions' | 'userId' | 'status'>;

export class TeachersRegistrations extends Model<TeachersRegistrationsAttributes, TeachersRegistrationsCreationAttributes> implements TeachersRegistrationsAttributes {
  declare id?: string;
  declare fullName: string;
  declare email?: string;
  declare phoneNumber: string;
  declare address: string;
  declare organization: string;
  declare linkedinUrl: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare department: string;
  declare lastEducation: string;
  declare birthDate: Date;
  declare interestField: string;
  declare feedback: string;
  declare contributions?: string;
  declare userId?: string;
  declare status?: string;

  public static initModel(sequelize: Sequelize): typeof TeachersRegistrations {
    TeachersRegistrations.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        fullName: { type: DataTypes.STRING, allowNull: false,
            field: 'full_name'
        },
        email: { type: DataTypes.STRING, allowNull: true,
            field: 'email'
        },
        phoneNumber: { type: DataTypes.STRING, allowNull: false,
            field: 'phone_number'
        },
        address: { type: DataTypes.TEXT, allowNull: false,
            field: 'address'
        },
        organization: { type: DataTypes.STRING, allowNull: false,
            field: 'organization'
        },
        linkedinUrl: { type: DataTypes.STRING, allowNull: false,
            field: 'linkedin_url'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        department: { type: DataTypes.STRING, allowNull: false,
            field: 'department'
        },
        lastEducation: { type: DataTypes.STRING, allowNull: false,
            field: 'last_education'
        },
        birthDate: { type: DataTypes.DATE, allowNull: false,
            field: 'birth_date'
        },
        interestField: { type: DataTypes.STRING, allowNull: false,
            field: 'interest_field'
        },
        feedback: { type: DataTypes.TEXT, allowNull: false,
            field: 'feedback'
        },
        contributions: { type: DataTypes.STRING, allowNull: true,
            field: 'contributions'
        },
        userId: { type: DataTypes.UUID, allowNull: true,
            field: 'user_id'
        },
        status: { type: DataTypes.STRING, allowNull: true,
            field: 'status'
        }
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
