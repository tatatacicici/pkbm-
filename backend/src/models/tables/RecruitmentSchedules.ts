import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RecruitmentSchedulesAttributes {
  pk: number;
  uuid?: string;
  departmentId: number;
  schedule: Date;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RecruitmentSchedulesCreationAttributes = Optional<RecruitmentSchedulesAttributes, 'pk' | 'uuid' | 'deletedAt'>;

export class RecruitmentSchedules extends Model<RecruitmentSchedulesAttributes, RecruitmentSchedulesCreationAttributes> implements RecruitmentSchedulesAttributes {
  declare pk: number;
  declare uuid?: string;
  declare departmentId: number;
  declare schedule: Date;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RecruitmentSchedules {
    RecruitmentSchedules.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        departmentId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'department_id'
        },
        schedule: { type: DataTypes.DATE, allowNull: false,
            field: 'schedule'
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
        tableName: 'recruitment_schedules',
        timestamps: true,
        underscored: true,
      }
    );
    return RecruitmentSchedules;
  }
}
