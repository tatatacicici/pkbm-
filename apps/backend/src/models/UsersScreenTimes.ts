import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface UsersScreenTimesAttributes {
  pk: number;
  id: string;
  userId: string;
  sessionId: string;
  token: string;
  type: string;
  page: string;
  seconds?: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  lastRefreshedAt?: Date;
  totalRefreshed?: number;
  submittedAt?: Date;
}

export type UsersScreenTimesPk = "id";
export type UsersScreenTimesId = UsersScreenTimes[UsersScreenTimesPk];
export type UsersScreenTimesOptionalAttributes = "pk" | "seconds" | "deletedAt" | "lastRefreshedAt" | "totalRefreshed" | "submittedAt";
export type UsersScreenTimesCreationAttributes = Optional<UsersScreenTimesAttributes, UsersScreenTimesOptionalAttributes>;

export class UsersScreenTimes extends Model<UsersScreenTimesAttributes, UsersScreenTimesCreationAttributes> implements UsersScreenTimesAttributes {
  pk!: number;
  id!: string;
  userId!: string;
  sessionId!: string;
  token!: string;
  type!: string;
  page!: string;
  seconds?: number;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;
  lastRefreshedAt?: Date;
  totalRefreshed?: number;
  submittedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof UsersScreenTimes {
    return UsersScreenTimes.init({
    pk: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false
    },
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'user_id'
    },
    sessionId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'session_id'
    },
    token: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    page: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    seconds: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    },
    lastRefreshedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'last_refreshed_at'
    },
    totalRefreshed: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'total_refreshed'
    },
    submittedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'submitted_at'
    }
  }, {
    sequelize,
    tableName: 'users_screen_times',
    schema: 'public',
    timestamps: false
  });
  }
}
