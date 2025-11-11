import { Model, DataTypes, Sequelize, Optional } from 'sequelize';

export interface ArticleLikesAttributes {
  id?: string;
  article_id: string;
  user_id: string;
  created_at?: Date;
  updated_at?: Date;
}

export type ArticleLikesCreationAttributes = Optional<ArticleLikesAttributes, 'id' | 'created_at' | 'updated_at'>;

export class ArticleLikes extends Model<ArticleLikesAttributes, ArticleLikesCreationAttributes> implements ArticleLikesAttributes {
  declare id?: string;
  declare article_id: string;
  declare user_id: string;
  declare created_at?: Date;
  declare updated_at?: Date;

  declare readonly createdAt?: Date;
  declare readonly updatedAt?: Date;

  public static initModel(sequelize: Sequelize): typeof ArticleLikes {
    ArticleLikes.init(
      {
        id: { type: DataTypes.UUID, primaryKey: true },
        article_id: { type: DataTypes.UUID, allowNull: false },
        user_id: { type: DataTypes.UUID, allowNull: false },
        created_at: { type: DataTypes.DATE, allowNull: true },
        updated_at: { type: DataTypes.DATE, allowNull: true }
      },
      {
        sequelize,
        tableName: 'article_likes',
        timestamps: true,
        underscored: true,
      }
    );
    return ArticleLikes;
  }
}
