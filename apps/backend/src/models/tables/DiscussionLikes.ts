import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionLikesAttributes {
  id?: string;
  user_id: string;
  resource_type: string;
  resource_id: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type DiscussionLikesCreationAttributes = Optional<DiscussionLikesAttributes, 'id' | 'deleted_at'>;

export class DiscussionLikes extends Model<DiscussionLikesAttributes, DiscussionLikesCreationAttributes> implements DiscussionLikesAttributes {
  declare id?: string;
  declare user_id: string;
  declare resource_type: string;
  declare resource_id: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof DiscussionLikes {
    DiscussionLikes.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        user_id: { type: DataTypes.UUID, allowNull: false },
        resource_type: { type: DataTypes.STRING, allowNull: false },
        resource_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
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
