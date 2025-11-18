import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RecruitmentDepartmentsAttributes {
  pk: number;
  uuid?: string;
  name: string;
  description: string;
  quota?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RecruitmentDepartmentsCreationAttributes = Optional<RecruitmentDepartmentsAttributes, 'id' | 'uuid' | 'quota' | 'deletedAt'>;

export class RecruitmentDepartments extends Model<RecruitmentDepartmentsAttributes, RecruitmentDepartmentsCreationAttributes> implements RecruitmentDepartmentsAttributes {
  declare pk: number;
  declare uuid?: string;
  declare name: string;
  declare description: string;
  declare quota?: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RecruitmentDepartments {
    RecruitmentDepartments.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        name: { type: DataTypes.STRING, allowNull: false,
            field: 'name'
        },
        description: { type: DataTypes.TEXT, allowNull: false,
            field: 'description'
        },
        quota: { type: DataTypes.INTEGER,
            field: 'quota'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        }
      },
      {
        sequelize,
        tableName: 'recruitment_departments',
        timestamps: true,
        underscored: true,
      }
    );
    return RecruitmentDepartments;
  }
}
