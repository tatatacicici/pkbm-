import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SubjectSessionsAttributes {
  id?: any;
  subject_id?: any;
  title?: any;
  description?: any;
  session_number?: any;
  duration_minutes?: any;
  published_at?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SubjectSessionsCreationAttributes = Optional<SubjectSessionsAttributes, 'id'>;

export class SubjectSessions extends Model<SubjectSessionsAttributes, SubjectSessionsCreationAttributes> implements SubjectSessionsAttributes {
  declare id?: any;
  declare subject_id?: any;
  declare title?: any;
  declare description?: any;
  declare session_number?: any;
  declare duration_minutes?: any;
  declare published_at?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SubjectSessions {
    SubjectSessions.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        subject_id: { type: DataTypes.UUID, allowNull: false },
        title: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT, allowNull: true },
        session_number: { type: DataTypes.INTEGER, allowNull: false },
        duration_minutes: { type: DataTypes.INTEGER, allowNull: true },
        published_at: { type: DataTypes.DATE, allowNull: true },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'subject_sessions',
        timestamps: true,
        underscored: true,
      }
    );
    return SubjectSessions;
  }
}
