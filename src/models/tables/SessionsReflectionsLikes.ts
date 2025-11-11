import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsReflectionsLikesAttributes {
  id?: any;
  reflection_id?: any;
  user_id?: any;
  resource_id?: any;
  resource_type?: any;
  created_at?: any;
  updated_at?: any;
  deleted_at?: any;
}

export type SessionsReflectionsLikesCreationAttributes = Optional<SessionsReflectionsLikesAttributes, 'id'>;

export class SessionsReflectionsLikes extends Model<SessionsReflectionsLikesAttributes, SessionsReflectionsLikesCreationAttributes> implements SessionsReflectionsLikesAttributes {
  declare id?: any;
  declare reflection_id?: any;
  declare user_id?: any;
  declare resource_id?: any;
  declare resource_type?: any;
  declare created_at?: any;
  declare updated_at?: any;
  declare deleted_at?: any;

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
