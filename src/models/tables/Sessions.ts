import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsAttributes {
  id?: string;
  subject_id: string;
  session_no: number;
  is_sync?: boolean;
  type?: string;
  description?: string;
  link?: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
  title?: string;
  duration?: number;
  start_at?: Date;
}

export type SessionsCreationAttributes = Optional<SessionsAttributes, 'id' | 'is_sync' | 'type' | 'description' | 'link' | 'deleted_at' | 'title' | 'duration' | 'start_at'>;

export class Sessions extends Model<SessionsAttributes, SessionsCreationAttributes> implements SessionsAttributes {
  declare id?: string;
  declare subject_id: string;
  declare session_no: number;
  declare is_sync?: boolean;
  declare type?: string;
  declare description?: string;
  declare link?: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;
  declare title?: string;
  declare duration?: number;
  declare start_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Sessions {
    Sessions.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        session_no: { type: DataTypes.INTEGER, allowNull: false },
        is_sync: { type: DataTypes.BOOLEAN, allowNull: true },
        type: { type: DataTypes.STRING, allowNull: true },
        description: { type: DataTypes.TEXT, allowNull: true },
        link: { type: DataTypes.STRING, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true },
        title: { type: DataTypes.STRING, allowNull: true },
        duration: { type: DataTypes.INTEGER, allowNull: true },
        start_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'sessions',
        timestamps: true,
        underscored: false,
      }
    );
    return Sessions;
  }
}
