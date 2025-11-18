import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface RecruitmentParticipantsAttributes {
  pk: number;
  uuid?: string;
  token: string;
  departmentId: number;
  emailAddress: string;
  fullName: string;
  phoneNumber: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type RecruitmentParticipantsCreationAttributes = Optional<RecruitmentParticipantsAttributes, 'id' | 'uuid' | 'deletedAt'>;

export class RecruitmentParticipants extends Model<RecruitmentParticipantsAttributes, RecruitmentParticipantsCreationAttributes> implements RecruitmentParticipantsAttributes {
  declare pk: number;
  declare uuid?: string;
  declare token: string;
  declare departmentId: number;
  declare emailAddress: string;
  declare fullName: string;
  declare phoneNumber: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof RecruitmentParticipants {
    RecruitmentParticipants.init(
      {
        pk: { type: DataTypes.INTEGER, allowNull: false,
            field: 'pk'
        },
        uuid: { type: DataTypes.UUID, allowNull: true,
            field: 'uuid'
        },
        token: { type: DataTypes.STRING, allowNull: false,
            field: 'token'
        },
        departmentId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'department_id'
        },
        emailAddress: { type: DataTypes.STRING, allowNull: false,
            field: 'email_address'
        },
        fullName: { type: DataTypes.STRING, allowNull: false,
            field: 'full_name'
        },
        phoneNumber: { type: DataTypes.STRING, allowNull: false,
            field: 'phone_number'
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
        tableName: 'recruitment_participants',
        timestamps: true,
        underscored: true,
      }
    );
    return RecruitmentParticipants;
  }
}
