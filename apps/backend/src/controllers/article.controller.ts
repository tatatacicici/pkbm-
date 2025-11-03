import { Request, Response } from 'express';
import { ArticleService } from '../services/article.service';
import { successResponse, errorResponse } from '../utils/response';

const articleService = new ArticleService();

export class ArticleController {
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const { page = 1, limit = 10, category, search } = req.query;
      const articles = await articleService.getAllArticles({
        page: Number(page),
        limit: Number(limit),
        category: category as string,
        search: search as string,
      });
      
      return successResponse(res, 'Articles retrieved successfully', articles);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve articles', 500, error.message);
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const article = await articleService.getArticleById(id);
      
      if (!article) {
        return errorResponse(res, 'Article not found', 404);
      }

      return successResponse(res, 'Article retrieved successfully', article);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve article', 500, error.message);
    }
  }

  async getBySlug(req: Request, res: Response): Promise<Response> {
    try {
      const { slug } = req.params;
      const article = await articleService.getArticleBySlug(slug);
      
      if (!article) {
        return errorResponse(res, 'Article not found', 404);
      }

      return successResponse(res, 'Article retrieved successfully', article);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve article', 500, error.message);
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const authorId = (req as any).userId;
      const article = await articleService.createArticle({ ...req.body, authorId });
      
      return successResponse(res, 'Article created successfully', article, 201);
    } catch (error: any) {
      return errorResponse(res, 'Failed to create article', 500, error.message);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const article = await articleService.updateArticle(id, req.body);
      
      return successResponse(res, 'Article updated successfully', article);
    } catch (error: any) {
      return errorResponse(res, 'Failed to update article', 500, error.message);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await articleService.deleteArticle(id);
      
      return successResponse(res, 'Article deleted successfully');
    } catch (error: any) {
      return errorResponse(res, 'Failed to delete article', 500, error.message);
    }
  }

  async getRelated(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const articles = await articleService.getRelatedArticles(id);
      
      return successResponse(res, 'Related articles retrieved successfully', articles);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve related articles', 500, error.message);
    }
  }

  async toggleFavorite(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { id } = req.params;
      const result = await articleService.toggleFavorite(userId, id);
      
      return successResponse(res, result.message, result.data);
    } catch (error: any) {
      return errorResponse(res, 'Failed to toggle favorite', 500, error.message);
    }
  }
}
