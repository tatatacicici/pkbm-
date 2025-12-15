import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionForumRepliesAttributes {
  id?: string;
  userId: string;
  commentId: string;
  content?: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  dfId?: string;
  imageId?: number;
}

export type DiscussionForumRepliesCreationAttributes = Optional<DiscussionForumRepliesAttributes, 'id' | 'content' | 'image' | 'deletedAt' | 'dfId' | 'imageId'>;

export class DiscussionForumReplies extends Model<DiscussionForumRepliesAttributes, DiscussionForumRepliesCreationAttributes> implements DiscussionForumRepliesAttributes {
  declare id?: string;
  declare userId: string;
  declare commentId: string;
  declare content?: string;
  declare image?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare dfId?: string;
  declare imageId?: number;

  public static initModel(sequelize: Sequelize): typeof DiscussionForumReplies {
    DiscussionForumReplies.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        commentId: { type: DataTypes.UUID, allowNull: false,
            field: 'comment_id'
        },
        content: { type: DataTypes.TEXT, allowNull: true,
            field: 'content'
        },
        image: { type: DataTypes.STRING, allowNull: true,
            field: 'image'
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
        dfId: { type: DataTypes.UUID, allowNull: true,
            field: 'df_id'
        },
        imageId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'image_id'
        }
      },
      {
        sequelize,
        tableName: 'discussion_forum_replies',
        timestamps: true,
        underscored: true,
      }
    );
    return DiscussionForumReplies;
  }
}
