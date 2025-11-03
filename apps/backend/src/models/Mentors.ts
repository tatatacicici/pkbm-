import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface MentorsAttributes {
  id: string;
  userId: string;
  partnerId: string;
  nik: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type MentorsPk = "id";
export type MentorsId = Mentors[MentorsPk];
export type MentorsOptionalAttributes = "deletedAt";
export type MentorsCreationAttributes = Optional<MentorsAttributes, MentorsOptionalAttributes>;

export class Mentors extends Model<MentorsAttributes, MentorsCreationAttributes> implements MentorsAttributes {
  id!: string;
  userId!: string;
  partnerId!: string;
  nik!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Mentors {
    return Mentors.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    partnerId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'partner_id'
    },
    nik: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'mentors',
    schema: 'public',
    timestamps: false
  });
  }
}
