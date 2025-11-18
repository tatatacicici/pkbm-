import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionForumsAttributes {
  id?: string;
  userId: string;
  sessionId: string;
  title?: string;
  content: string;
  isGlobal?: boolean;
  images?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type DiscussionForumsCreationAttributes = Optional<DiscussionForumsAttributes, 'id' | 'title' | 'isGlobal' | 'images' | 'deletedAt'>;

export class DiscussionForums extends Model<DiscussionForumsAttributes, DiscussionForumsCreationAttributes> implements DiscussionForumsAttributes {
  declare id?: string;
  declare userId: string;
  declare sessionId: string;
  declare title?: string;
  declare content: string;
  declare isGlobal?: boolean;
  declare images?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof DiscussionForums {
    DiscussionForums.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        sessionId: { type: DataTypes.UUID, allowNull: false,
            field: 'session_id'
        },
        title: { type: DataTypes.STRING, allowNull: true,
            field: 'title'
        },
        content: { type: DataTypes.TEXT, allowNull: false,
            field: 'content'
        },
        isGlobal: { type: DataTypes.BOOLEAN,
            field: 'is_global'
        },
        images: { type: DataTypes.STRING, allowNull: true,
            field: 'images'
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
        tableName: 'discussion_forums',
        timestamps: true,
        underscored: true,
      }
    );
    return DiscussionForums;
  }
}
