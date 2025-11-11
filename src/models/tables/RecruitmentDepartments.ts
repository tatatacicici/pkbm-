import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RecruitmentDepartmentsAttributes {
  pk?: any;
  uuid?: any;
  name?: any;
  description?: any;
  quota?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type RecruitmentDepartmentsCreationAttributes = Optional<RecruitmentDepartmentsAttributes, 'id'>;

export class RecruitmentDepartments extends Model<RecruitmentDepartmentsAttributes, RecruitmentDepartmentsCreationAttributes> implements RecruitmentDepartmentsAttributes {
  declare pk?: any;
  declare uuid?: any;
  declare name?: any;
  declare description?: any;
  declare quota?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
