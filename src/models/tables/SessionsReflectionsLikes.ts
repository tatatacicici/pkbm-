import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsReflectionsLikesAttributes {
  id?: string;
  reflection_id: number;
  user_id: string;
  resource_id: string;
  resource_type: string;
  created_at: Date;
  updated_at: Date;
  deleted_at?: Date;
}

export type SessionsReflectionsLikesCreationAttributes = Optional<SessionsReflectionsLikesAttributes, 'id' | 'deleted_at'>;

export class SessionsReflectionsLikes extends Model<SessionsReflectionsLikesAttributes, SessionsReflectionsLikesCreationAttributes> implements SessionsReflectionsLikesAttributes {
  declare id?: string;
  declare reflection_id: number;
  declare user_id: string;
  declare resource_id: string;
  declare resource_type: string;
  declare created_at: Date;
  declare updated_at: Date;
  declare deleted_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsReflectionsLikes {
    SessionsReflectionsLikes.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        reflection_id: { type: DataTypes.INTEGER, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        resource_id: { type: DataTypes.STRING, allowNull: false },
        resource_type: { type: DataTypes.STRING, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: false },
        updated_at: { type: DataTypes.DATE, allowNull: false },
        deleted_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'sessions_reflections_likes',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsReflectionsLikes;
  }
}
