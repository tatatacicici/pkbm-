import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface DiscussionLikesAttributes {
  id?: any;
  user_id?: any;
  resource_type?: any;
  resource_id?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type DiscussionLikesCreationAttributes = Optional<DiscussionLikesAttributes, 'id'>;

export class DiscussionLikes extends Model<DiscussionLikesAttributes, DiscussionLikesCreationAttributes> implements DiscussionLikesAttributes {
  declare id?: any;
  declare user_id?: any;
  declare resource_type?: any;
  declare resource_id?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
