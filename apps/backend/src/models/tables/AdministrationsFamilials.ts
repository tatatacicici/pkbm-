import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface AdministrationsFamilialsAttributes {
  id?: string;
  administrationId: string;
  fatherName?: string;
  fatherOccupation?: string;
  fatherSalary?: string;
  motherName?: string;
  motherOccupation?: string;
  motherSalary?: string;
  selfSalary?: string;
  liveWith?: string;
  tuitionPayer?: string;
  createdAt: Date;
  updatedAt: Date;
  selfOccupation?: string;
  deletedAt?: Date;
}

export type AdministrationsFamilialsCreationAttributes = Optional<AdministrationsFamilialsAttributes, 'id' | 'fatherName' | 'fatherOccupation' | 'fatherSalary' | 'motherName' | 'motherOccupation' | 'motherSalary' | 'selfSalary' | 'liveWith' | 'tuitionPayer' | 'selfOccupation' | 'deletedAt'>;

export class AdministrationsFamilials extends Model<AdministrationsFamilialsAttributes, AdministrationsFamilialsCreationAttributes> implements AdministrationsFamilialsAttributes {
  declare id?: string;
  declare administrationId: string;
  declare fatherName?: string;
  declare fatherOccupation?: string;
  declare fatherSalary?: string;
  declare motherName?: string;
  declare motherOccupation?: string;
  declare motherSalary?: string;
  declare selfSalary?: string;
  declare liveWith?: string;
  declare tuitionPayer?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare selfOccupation?: string;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof AdministrationsFamilials {
    AdministrationsFamilials.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        administrationId: { type: DataTypes.UUID, allowNull: false,
            field: 'administration_id'
        },
        fatherName: { type: DataTypes.STRING, allowNull: true,
            field: 'father_name'
        },
        fatherOccupation: { type: DataTypes.STRING, allowNull: true,
            field: 'father_occupation'
        },
        fatherSalary: { type: DataTypes.STRING, allowNull: true,
            field: 'father_salary'
        },
        motherName: { type: DataTypes.STRING, allowNull: true,
            field: 'mother_name'
        },
        motherOccupation: { type: DataTypes.STRING, allowNull: true,
            field: 'mother_occupation'
        },
        motherSalary: { type: DataTypes.STRING, allowNull: true,
            field: 'mother_salary'
        },
        selfSalary: { type: DataTypes.STRING, allowNull: true,
            field: 'self_salary'
        },
        liveWith: { type: DataTypes.STRING, allowNull: true,
            field: 'live_with'
        },
        tuitionPayer: { type: DataTypes.STRING, allowNull: true,
            field: 'tuition_payer'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        selfOccupation: { type: DataTypes.STRING, allowNull: true,
            field: 'self_occupation'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
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
