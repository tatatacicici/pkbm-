import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RecruitmentSchedulesAttributes {
  pk?: any;
  uuid?: any;
  department_id?: any;
  schedule?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type RecruitmentSchedulesCreationAttributes = Optional<RecruitmentSchedulesAttributes, 'id'>;

export class RecruitmentSchedules extends Model<RecruitmentSchedulesAttributes, RecruitmentSchedulesCreationAttributes> implements RecruitmentSchedulesAttributes {
  declare pk?: any;
  declare uuid?: any;
  declare department_id?: any;
  declare schedule?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RecruitmentSchedules {
    RecruitmentSchedules.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        uuid: { type: DataTypes.UUID, allowNull: true },
        department_id: { type: DataTypes.INTEGER, allowNull: false },
        schedule: { type: DataTypes.DATE, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'recruitment_schedules',
        timestamps: true,
        underscored: true,
      }
    );
    return RecruitmentSchedules;
  }
}
