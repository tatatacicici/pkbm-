import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface ActivitiesAttributes {
  id: number;
  uuid: string;
  positionId: number;
  userId: string;
  status: string;
  type: string;
  startDate?: Date;
  endDate?: Date;
  isExpired?: boolean;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type ActivitiesPk = "id";
export type ActivitiesId = Activities[ActivitiesPk];
export type ActivitiesOptionalAttributes = "id" | "startDate" | "endDate" | "isExpired" | "deletedAt";
export type ActivitiesCreationAttributes = Optional<ActivitiesAttributes, ActivitiesOptionalAttributes>;

export class Activities extends Model<ActivitiesAttributes, ActivitiesCreationAttributes> implements ActivitiesAttributes {
  id!: number;
  uuid!: string;
  positionId!: number;
  userId!: string;
  status!: string;
  type!: string;
  startDate?: Date;
  endDate?: Date;
  isExpired?: boolean;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof Activities {
    return Activities.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    uuid: {
      type: DataTypes.UUID,
      allowNull: false
    },
    positionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'position_id'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'start_date'
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'end_date'
    },
    isExpired: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      field: 'is_expired'
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
    tableName: 'activities',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "activities_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
