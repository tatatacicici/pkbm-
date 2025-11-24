import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionForumCommentsAttributes {
  id?: string;
  userId: string;
  dfId: string;
  content: string;
  image?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
  imageId?: number;
}

export type DiscussionForumCommentsCreationAttributes = Optional<DiscussionForumCommentsAttributes, 'id' | 'image' | 'deletedAt' | 'imageId'>;

export class DiscussionForumComments extends Model<DiscussionForumCommentsAttributes, DiscussionForumCommentsCreationAttributes> implements DiscussionForumCommentsAttributes {
  declare id?: string;
  declare userId: string;
  declare dfId: string;
  declare content: string;
  declare image?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;
  declare imageId?: number;

  public static initModel(sequelize: Sequelize): typeof DiscussionForumComments {
    DiscussionForumComments.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        dfId: { type: DataTypes.UUID, allowNull: false,
            field: 'df_id'
        },
        content: { type: DataTypes.TEXT, allowNull: false,
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
        imageId: { type: DataTypes.INTEGER, allowNull: true,
            field: 'image_id'
        }
      },
      {
        sequelize,
        tableName: 'discussion_forum_comments',
        timestamps: true,
        underscored: true,
      }
    );
    return DiscussionForumComments;
  }
}
