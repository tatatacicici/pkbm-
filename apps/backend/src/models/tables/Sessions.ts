import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsAttributes {
  id?: string;
  subjectId: string;
  sessionNo: number;
  isSync?: boolean;
  type?: string;
  description?: string;
  link?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  title?: string;
  duration?: number;
  startAt?: Date;
}

export type SessionsCreationAttributes = Optional<SessionsAttributes, 'id' | 'isSync' | 'type' | 'description' | 'link' | 'deletedAt' | 'title' | 'duration' | 'startAt'>;

export class Sessions extends Model<SessionsAttributes, SessionsCreationAttributes> implements SessionsAttributes {
  declare id?: string;
  declare subjectId: string;
  declare sessionNo: number;
  declare isSync?: boolean;
  declare type?: string;
  declare description?: string;
  declare link?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare title?: string;
  declare duration?: number;
  declare startAt?: Date;

  public static initModel(sequelize: Sequelize): typeof Sessions {
    Sessions.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        subjectId: { type: DataTypes.UUID, allowNull: false,
            field: 'subject_id'
        },
        sessionNo: { type: DataTypes.INTEGER, allowNull: false,
            field: 'session_no'
        },
        isSync: { type: DataTypes.BOOLEAN, allowNull: true,
            field: 'is_sync'
        },
        type: { type: DataTypes.STRING, allowNull: true,
            field: 'type'
        },
        description: { type: DataTypes.TEXT, allowNull: true,
            field: 'description'
        },
        link: { type: DataTypes.STRING, allowNull: true,
            field: 'link'
        },
        createdAt: { type: DataTypes.DATE, allowNull: false,
            field: 'created_at'
        },
        updatedAt: { type: DataTypes.DATE, allowNull: false,
            field: 'updated_at'
        },
        deletedAt: { type: DataTypes.DATE, allowNull: true,
            field: 'deleted_at'
        },
        title: { type: DataTypes.STRING, allowNull: true,
            field: 'title'
        },
        duration: { type: DataTypes.INTEGER, allowNull: true,
            field: 'duration'
        },
        startAt: { type: DataTypes.DATE, allowNull: true,
            field: 'start_at'
        }
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
