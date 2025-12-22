import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RecruitmentAgendasAttributes {
  pk: number;
  uuid?: string;
  studentId: string;
  participantId: number;
  scheduleId: number;
  departmentId: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RecruitmentAgendasCreationAttributes = Optional<RecruitmentAgendasAttributes, 'pk' | 'uuid' | 'deletedAt'>;

export class RecruitmentAgendas extends Model<RecruitmentAgendasAttributes, RecruitmentAgendasCreationAttributes> implements RecruitmentAgendasAttributes {
  declare pk: number;
  declare uuid?: string;
  declare studentId: string;
  declare participantId: number;
  declare scheduleId: number;
  declare departmentId: number;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RecruitmentAgendas {
    RecruitmentAgendas.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        studentId: { type: DataTypes.UUID, allowNull: false,
            field: 'student_id'
        },
        participantId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'participant_id'
        },
        scheduleId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'schedule_id'
        },
        departmentId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'department_id'
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
        tableName: 'recruitment_agendas',
        timestamps: true,
        underscored: true,
      }
    );
    return RecruitmentAgendas;
  }
}
