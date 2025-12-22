import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface DiscussionLikesAttributes {
  id: string;
  userId: string;
  resourceType: string;
  resourceId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type DiscussionLikesPk = "id";
export type DiscussionLikesId = DiscussionLikes[DiscussionLikesPk];
export type DiscussionLikesOptionalAttributes = "deletedAt";
export type DiscussionLikesCreationAttributes = Optional<DiscussionLikesAttributes, DiscussionLikesOptionalAttributes>;

export class DiscussionLikes extends Model<DiscussionLikesAttributes, DiscussionLikesCreationAttributes> implements DiscussionLikesAttributes {
  id!: string;
  userId!: string;
  resourceType!: string;
  resourceId!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof DiscussionLikes {
    return DiscussionLikes.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    resourceType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'resource_type'
    },
    resourceId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'resource_id'
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'updated_at'
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      field: 'deleted_at'
    }
  }, {
    sequelize,
    tableName: 'discussion_likes',
    schema: 'public',
    timestamps: false
  });
  }
}
