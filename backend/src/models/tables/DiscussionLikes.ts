import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionLikesAttributes {
  id?: string;
  userId: string;
  resourceType: string;
  resourceId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type DiscussionLikesCreationAttributes = Optional<DiscussionLikesAttributes, 'id' | 'deletedAt'>;

export class DiscussionLikes extends Model<DiscussionLikesAttributes, DiscussionLikesCreationAttributes> implements DiscussionLikesAttributes {
  declare id?: string;
  declare userId: string;
  declare resourceType: string;
  declare resourceId: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof DiscussionLikes {
    DiscussionLikes.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        resourceType: { type: DataTypes.STRING, allowNull: false,
            field: 'resource_type'
        },
        resourceId: { type: DataTypes.UUID, allowNull: false,
            field: 'resource_id'
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
        tableName: 'discussion_likes',
        timestamps: true,
        underscored: true,
      }
    );
    return DiscussionLikes;
  }
}
