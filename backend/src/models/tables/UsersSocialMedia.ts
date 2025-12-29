import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface UsersSocialMediaAttributes {
  id?: string;
  userId: string;
  tiktok?: string;
  instagram?: string;
  youtube?: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export type UsersSocialMediaCreationAttributes = Optional<UsersSocialMediaAttributes, 'id' | 'tiktok' | 'instagram' | 'youtube' | 'deletedAt'>;

export class UsersSocialMedia extends Model<UsersSocialMediaAttributes, UsersSocialMediaCreationAttributes> implements UsersSocialMediaAttributes {
  declare id?: string;
  declare userId: string;
  declare tiktok?: string;
  declare instagram?: string;
  declare youtube?: string;
  declare createdAt: Date;
  declare updatedAt: Date;
  declare deletedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof UsersSocialMedia {
    UsersSocialMedia.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true,
            field: 'id'
        },
        userId: { type: DataTypes.UUID, allowNull: false,
            field: 'user_id'
        },
        tiktok: { type: DataTypes.STRING, allowNull: true,
            field: 'tiktok'
        },
        instagram: { type: DataTypes.STRING, allowNull: true,
            field: 'instagram'
        },
        youtube: { type: DataTypes.STRING, allowNull: true,
            field: 'youtube'
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
        tableName: 'users_social_media',
        timestamps: true,
        underscored: true,
      }
    );
    return UsersSocialMedia;
  }
}
