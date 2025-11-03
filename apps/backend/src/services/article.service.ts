import { Articles, ArticlesAttributes, ArticlesCreationAttributes } from '../models/Articles';
import { ArticlesFavorites } from '../models/ArticlesFavorites';
import { v4 as uuidv4 } from 'uuid';
import { Op } from 'sequelize';

interface GetArticlesParams {
  page: number;
  limit: number;
  category?: string;
  search?: string;
}

export class ArticleService {
  async getAllArticles(params: GetArticlesParams) {
    const { page, limit, category, search } = params;
    const offset = (page - 1) * limit;

    const where: any = { deletedAt: null };

    if (category) {
      where.category = category;
    }

    if (search) {
      where[Op.or] = [
        { title: { [Op.iLike]: `%${search}%` } },
        { content: { [Op.iLike]: `%${search}%` } },
      ];
    }

    const { rows: articles, count: total } = await Articles.findAndCountAll({
      where,
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    return {
      articles,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getArticleById(id: string) {
    const article = await Articles.findOne({
      where: { id, deletedAt: null },
    });

    if (article) {
      await article.increment('views');
      await article.increment('viewCount');
    }

    return article;
  }

  async getArticleBySlug(slug: string) {
    const article = await Articles.findOne({
      where: { slug, deletedAt: null },
    });

    if (article) {
      await article.increment('views');
      await article.increment('viewCount');
    }

    return article;
  }

  async createArticle(data: Partial<ArticlesCreationAttributes>) {
    const article = await Articles.create({
      id: uuidv4(),
      ...data,
      views: 0,
      viewCount: 0,
      likeCount: 0,
    } as ArticlesCreationAttributes);

    return article;
  }

  async updateArticle(id: string, data: Partial<ArticlesAttributes>) {
    const article = await Articles.findOne({
      where: { id, deletedAt: null },
    });

    if (!article) {
      throw new Error('Article not found');
    }

    await article.update(data);
    return article;
  }

  async deleteArticle(id: string) {
    const article = await Articles.findOne({
      where: { id, deletedAt: null },
    });

    if (!article) {
      throw new Error('Article not found');
    }

    await article.update({ deletedAt: new Date() });
  }

  async getRelatedArticles(id: string) {
    const article = await Articles.findByPk(id);
    
    if (!article) {
      return [];
    }

    const related = await Articles.findAll({
      where: {
        id: { [Op.ne]: id },
        categoryId: article.categoryId,
        deletedAt: null,
      },
      limit: 5,
      order: [['createdAt', 'DESC']],
    });

    return related;
  }

  async toggleFavorite(userId: string, articleId: string) {
    const favorite = await ArticlesFavorites.findOne({
      where: { userId, articleId },
    });

    if (favorite) {
      await favorite.destroy();
      return {
        message: 'Article removed from favorites',
        data: { isFavorite: false },
      };
    } else {
      await ArticlesFavorites.create({
        id: uuidv4(),
        userId,
        articleId,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as any);
      return {
        message: 'Article added to favorites',
        data: { isFavorite: true },
      };
    }
  }
}
