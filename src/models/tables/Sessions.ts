import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsAttributes {
  id?: any;
  subject_id?: any;
  session_no?: any;
  is_sync?: any;
  type?: any;
  description?: any;
  link?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
  title?: any;
  duration?: any;
  start_at?: any;
}

export type SessionsCreationAttributes = Optional<SessionsAttributes, 'id'>;

export class Sessions extends Model<SessionsAttributes, SessionsCreationAttributes> implements SessionsAttributes {
  declare id?: any;
  declare subject_id?: any;
  declare session_no?: any;
  declare is_sync?: any;
  declare type?: any;
  declare description?: any;
  declare link?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;
  declare title?: any;
  declare duration?: any;
  declare start_at?: any;

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
