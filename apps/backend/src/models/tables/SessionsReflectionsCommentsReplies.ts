import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsReflectionsCommentsRepliesAttributes {
  id?: string;
  reflectionId: number;
  commentId: string;
  userId: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SessionsReflectionsCommentsRepliesCreationAttributes = Optional<SessionsReflectionsCommentsRepliesAttributes, 'id' | 'deletedAt'>;

export class SessionsReflectionsCommentsReplies extends Model<SessionsReflectionsCommentsRepliesAttributes, SessionsReflectionsCommentsRepliesCreationAttributes> implements SessionsReflectionsCommentsRepliesAttributes {
  declare id?: string;
  declare reflectionId: number;
  declare commentId: string;
  declare userId: string;
  declare content: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsReflectionsCommentsReplies {
    SessionsReflectionsCommentsReplies.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        reflectionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'reflection_id'
        },
        commentId: { type: DataTypes.UUID, allowNull: false,
            field: 'comment_id'
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
        tableName: 'sessions_reflections_comments_replies',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsReflectionsCommentsReplies;
  }
}
