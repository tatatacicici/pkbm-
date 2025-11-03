import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface SessionsReflectionsLikesAttributes {
  id: string;
  reflectionId: number;
  userId: string;
  resourceId: string;
  resourceType: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SessionsReflectionsLikesPk = "id";
export type SessionsReflectionsLikesId = SessionsReflectionsLikes[SessionsReflectionsLikesPk];
export type SessionsReflectionsLikesOptionalAttributes = "deletedAt";
export type SessionsReflectionsLikesCreationAttributes = Optional<SessionsReflectionsLikesAttributes, SessionsReflectionsLikesOptionalAttributes>;

export class SessionsReflectionsLikes extends Model<SessionsReflectionsLikesAttributes, SessionsReflectionsLikesCreationAttributes> implements SessionsReflectionsLikesAttributes {
  id!: string;
  reflectionId!: number;
  userId!: string;
  resourceId!: string;
  resourceType!: string;
  createdAt!: Date;
  updatedAt!: Date;
  deletedAt?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof SessionsReflectionsLikes {
    return SessionsReflectionsLikes.init({
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true
    },
    reflectionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'reflection_id'
    },
    userId: {
      type: DataTypes.UUID,
      allowNull: false,
      field: 'user_id'
    },
    resourceId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'resource_id'
    },
    resourceType: {
      type: DataTypes.STRING(255),
      allowNull: false,
      field: 'resource_type'
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
    tableName: 'sessions_reflections_likes',
    schema: 'public',
    timestamps: false
  });
  }
}
