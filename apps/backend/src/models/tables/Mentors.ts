import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface MentorsAttributes {
  id?: string;
  userId: string;
  partnerId: string;
  nik: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type MentorsCreationAttributes = Optional<MentorsAttributes, 'id' | 'deletedAt'>;

export class Mentors extends Model<MentorsAttributes, MentorsCreationAttributes> implements MentorsAttributes {
  declare id?: string;
  declare userId: string;
  declare partnerId: string;
  declare nik: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Mentors {
    Mentors.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        partnerId: { type: DataTypes.UUID, allowNull: false,
            field: 'partner_id'
        },
        nik: { type: DataTypes.STRING, allowNull: false,
            field: 'nik'
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
        tableName: 'mentors',
        timestamps: true,
        underscored: false,
      }
    );
    return Mentors;
  }
}
