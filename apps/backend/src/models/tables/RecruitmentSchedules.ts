import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RecruitmentSchedulesAttributes {
  pk: number;
  uuid?: string;
  department_id: number;
  schedule: Date;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type RecruitmentSchedulesCreationAttributes = Optional<RecruitmentSchedulesAttributes, 'id' | 'uuid' | 'deleted_at'>;

export class RecruitmentSchedules extends Model<RecruitmentSchedulesAttributes, RecruitmentSchedulesCreationAttributes> implements RecruitmentSchedulesAttributes {
  declare pk: number;
  declare uuid?: string;
  declare department_id: number;
  declare schedule: Date;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
