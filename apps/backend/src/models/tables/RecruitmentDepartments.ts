import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RecruitmentDepartmentsAttributes {
  pk: number;
  uuid?: string;
  name: string;
  description: string;
  quota?: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type RecruitmentDepartmentsCreationAttributes = Optional<RecruitmentDepartmentsAttributes, 'id' | 'uuid' | 'quota' | 'deleted_at'>;

export class RecruitmentDepartments extends Model<RecruitmentDepartmentsAttributes, RecruitmentDepartmentsCreationAttributes> implements RecruitmentDepartmentsAttributes {
  declare pk: number;
  declare uuid?: string;
  declare name: string;
  declare description: string;
  declare quota?: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RecruitmentDepartments {
    RecruitmentDepartments.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        uuid: { type: DataTypes.UUID, allowNull: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: false },
        quota: { type: DataTypes.INTEGER },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
