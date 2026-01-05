import { Request, Response } from 'express';
import { EventService } from '../services/event.service';
import { successResponse, errorResponse } from '../utils/response';

const eventService = new EventService();

export class EventController {
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const { page = 1, limit = 10 } = req.query;
      const events = await eventService.getAllEvents({
        page: Number(page),
        limit: Number(limit),
      });
      
      return successResponse(res, 'Events retrieved successfully', events);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve events', 500, error.message);
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const event = await eventService.getEventById(id);
      
      if (!event) {
        return errorResponse(res, 'Event not found', 404);
      }

      return successResponse(res, 'Event retrieved successfully', event);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve event', 500, error.message);
    }
  }

  async getRegistered(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const events = await eventService.getRegisteredEvents(userId);
      return successResponse(res, 'Registered events retrieved successfully', events);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve registered events', 500, error.message);
    }
  }

  async getIncoming(req: Request, res: Response): Promise<Response> {
    try {
      const events = await eventService.getIncomingEvents();
      return successResponse(res, 'Incoming events retrieved successfully', events);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve incoming events', 500, error.message);
    }
  }

  async getHistory(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const events = await eventService.getEventHistory(userId);
      return successResponse(res, 'Event history retrieved successfully', events);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve event history', 500, error.message);
    }
  }

  async register(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { eventId } = req.body;
      const result = await eventService.registerEvent(userId, eventId);
      return successResponse(res, 'Registered to event successfully', result);
    } catch (error: any) {
      return errorResponse(res, 'Failed to register to event', 500, error.message);
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const event = await eventService.createEvent(req.body);
      return successResponse(res, 'Event created successfully', event, 201);
    } catch (error: any) {
      return errorResponse(res, 'Failed to create event', 500, error.message);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const event = await eventService.updateEvent(id, req.body);
      return successResponse(res, 'Event updated successfully', event);
    } catch (error: any) {
      return errorResponse(res, 'Failed to update event', 500, error.message);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await eventService.deleteEvent(id);
      return successResponse(res, 'Event deleted successfully');
    } catch (error: any) {
      return errorResponse(res, 'Failed to delete event', 500, error.message);
    }
  }
}
