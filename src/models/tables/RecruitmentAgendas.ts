import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RecruitmentAgendasAttributes {
  pk?: any;
  uuid?: any;
  student_id?: any;
  participant_id?: any;
  schedule_id?: any;
  department_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type RecruitmentAgendasCreationAttributes = Optional<RecruitmentAgendasAttributes, 'id'>;

export class RecruitmentAgendas extends Model<RecruitmentAgendasAttributes, RecruitmentAgendasCreationAttributes> implements RecruitmentAgendasAttributes {
  declare pk?: any;
  declare uuid?: any;
  declare student_id?: any;
  declare participant_id?: any;
  declare schedule_id?: any;
  declare department_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
