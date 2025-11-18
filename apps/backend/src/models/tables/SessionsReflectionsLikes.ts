import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface SessionsReflectionsLikesAttributes {
  id?: string;
  reflectionId: number;
  userId: string;
  resourceId: string;
  resourceType: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type SessionsReflectionsLikesCreationAttributes = Optional<SessionsReflectionsLikesAttributes, 'id' | 'deletedAt'>;

export class SessionsReflectionsLikes extends Model<SessionsReflectionsLikesAttributes, SessionsReflectionsLikesCreationAttributes> implements SessionsReflectionsLikesAttributes {
  declare id?: string;
  declare reflectionId: number;
  declare userId: string;
  declare resourceId: string;
  declare resourceType: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof SessionsReflectionsLikes {
    SessionsReflectionsLikes.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        reflectionId: { type: DataTypes.INTEGER, allowNull: false,
            field: 'reflection_id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        resourceId: { type: DataTypes.STRING, allowNull: false,
            field: 'resource_id'
        },
        resourceType: { type: DataTypes.STRING, allowNull: false,
            field: 'resource_type'
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
        tableName: 'sessions_reflections_likes',
        timestamps: true,
        underscored: true,
      }
    );
    return SessionsReflectionsLikes;
  }
}
