import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RecruitmentAgendasAttributes {
  pk: number;
  uuid?: string;
  student_id: string;
  participant_id: number;
  schedule_id: number;
  department_id: number;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type RecruitmentAgendasCreationAttributes = Optional<RecruitmentAgendasAttributes, 'id' | 'uuid' | 'deleted_at'>;

export class RecruitmentAgendas extends Model<RecruitmentAgendasAttributes, RecruitmentAgendasCreationAttributes> implements RecruitmentAgendasAttributes {
  declare pk: number;
  declare uuid?: string;
  declare student_id: string;
  declare participant_id: number;
  declare schedule_id: number;
  declare department_id: number;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RecruitmentAgendas {
    RecruitmentAgendas.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        uuid: { type: DataTypes.UUID, allowNull: true },
        student_id: { type: DataTypes.UUID, allowNull: false },
        participant_id: { type: DataTypes.INTEGER, allowNull: false },
        schedule_id: { type: DataTypes.INTEGER, allowNull: false },
        department_id: { type: DataTypes.INTEGER, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
