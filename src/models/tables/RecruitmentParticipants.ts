import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RecruitmentParticipantsAttributes {
  pk?: any;
  uuid?: any;
  token?: any;
  department_id?: any;
  email_address?: any;
  full_name?: any;
  phone_number?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type RecruitmentParticipantsCreationAttributes = Optional<RecruitmentParticipantsAttributes, 'id'>;

export class RecruitmentParticipants extends Model<RecruitmentParticipantsAttributes, RecruitmentParticipantsCreationAttributes> implements RecruitmentParticipantsAttributes {
  declare pk?: any;
  declare uuid?: any;
  declare token?: any;
  declare department_id?: any;
  declare email_address?: any;
  declare full_name?: any;
  declare phone_number?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RecruitmentParticipants {
    RecruitmentParticipants.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false },
        uuid: { type: DataTypes.UUID, allowNull: true },
        token: { type: DataTypes.STRING, allowNull: false },
        department_id: { type: DataTypes.INTEGER, allowNull: false },
        email_address: { type: DataTypes.STRING, allowNull: false },
        full_name: { type: DataTypes.STRING, allowNull: false },
        phone_number: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'recruitment_participants',
        timestamps: true,
        underscored: true,
      }
    );
    return RecruitmentParticipants;
  }
}
