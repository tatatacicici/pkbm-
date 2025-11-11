import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RecruitmentParticipantsAttributes {
  pk: number;
  uuid?: string;
  token: string;
  department_id: number;
  email_address: string;
  full_name: string;
  phone_number: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type RecruitmentParticipantsCreationAttributes = Optional<RecruitmentParticipantsAttributes, 'id' | 'uuid' | 'deleted_at'>;

export class RecruitmentParticipants extends Model<RecruitmentParticipantsAttributes, RecruitmentParticipantsCreationAttributes> implements RecruitmentParticipantsAttributes {
  declare pk: number;
  declare uuid?: string;
  declare token: string;
  declare department_id: number;
  declare email_address: string;
  declare full_name: string;
  declare phone_number: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

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
