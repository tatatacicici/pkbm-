import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsReflectionsCommentsAttributes {
  id?: string;
  reflectionId: number;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SessionsReflectionsCommentsCreationAttributes = Optional<SessionsReflectionsCommentsAttributes, 'id' | 'deletedAt'>;

export class SessionsReflectionsComments extends Model<SessionsReflectionsCommentsAttributes, SessionsReflectionsCommentsCreationAttributes> implements SessionsReflectionsCommentsAttributes {
  declare id?: string;
  declare reflectionId: number;
  declare userId: string;
  declare content: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsReflectionsComments {
    SessionsReflectionsComments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        reflectionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'reflection_id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        content: { type: DataTypes.TEXT, allowNull: false,
            field: 'content'
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
        tableName: 'sessions_reflections_comments',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsReflectionsComments;
  }
}
