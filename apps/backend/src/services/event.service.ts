import { Events, EventsAttributes, EventsCreationAttributes } from '../models/Events';
import { EventParticipants } from '../models/EventParticipants';
import { v4 as uuidv4 } from 'uuid';
import { Op } from 'sequelize';

interface GetEventsParams {
  page: number;
  limit: number;
}

export class EventService {
  async getAllEvents(params: GetEventsParams) {
    const { page, limit } = params;
    const offset = (page - 1) * limit;

    const { rows: events, count: total } = await Events.findAndCountAll({
      where: { deletedAt: null as any },
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    return {
      events,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getEventById(id: string) {
    return await Events.findOne({
      where: { id, deletedAt: null as any },
    });
  }

  async getRegisteredEvents(userId: string) {
    const { Users } = require('../models/Users');
    const user = await Users.findByPk(userId);
    
    if (!user) {
      return [];
    }

    const registrations = await EventParticipants.findAll({
      where: { emailAddress: user.email } as any,
      order: [['createdAt', 'DESC']],
    });

    return registrations;
  }

  async getIncomingEvents() {
    const now = new Date();
    const events = await Events.findAll({
      where: {
        deletedAt: null as any,
        dateStart: { [Op.gte]: now },
      } as any,
      order: [['dateStart', 'ASC']],
      limit: 10,
    });

    return events;
  }

  async getEventHistory(userId: string) {
    const { Users } = require('../models/Users');
    const user = await Users.findByPk(userId);
    
    if (!user) {
      return [];
    }

    const now = new Date();
    const registrations = await EventParticipants.findAll({
      where: { emailAddress: user.email } as any,
      order: [['createdAt', 'DESC']],
    });

    const registrationsWithEvents = [];
    for (const registration of registrations) {
      const event = await Events.findOne({
        where: {
          id: registration.eventId,
          deletedAt: null as any,
          dateEnd: { [Op.lt]: now },
        } as any,
      });
      
      if (event) {
        registrationsWithEvents.push({
          ...registration.toJSON(),
          event: event.toJSON(),
        });
      }
    }

    return registrationsWithEvents;
  }

  async registerEvent(userId: string, eventId: string) {
    const event = await Events.findByPk(eventId);
    
    if (!event) {
      throw new Error('Event not found');
    }

    const { Users } = require('../models/Users');
    const user = await Users.findByPk(userId);
    
    if (!user) {
      throw new Error('User not found');
    }

    const existing = await EventParticipants.findOne({
      where: { emailAddress: user.email, eventId } as any,
    });

    if (existing) {
      throw new Error('Already registered to this event');
    }

    const token = uuidv4();
    const registration = await EventParticipants.create({
      uuid: uuidv4(),
      token,
      eventId,
      emailAddress: user.email,
      fullName: user.fullName,
      phoneNumber: user.phoneNumber || '',
      createdAt: new Date(),
      updatedAt: new Date(),
    } as any);

    return registration;
  }

  async createEvent(data: Partial<EventsCreationAttributes>) {
    const event = await Events.create({
      id: uuidv4(),
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
    } as EventsCreationAttributes);

    return event;
  }

  async updateEvent(id: string, data: Partial<EventsAttributes>) {
    const event = await Events.findOne({
      where: { id, deletedAt: null as any },
    });

    if (!event) {
      throw new Error('Event not found');
    }

    await event.update(data);
    return event;
  }

  async deleteEvent(id: string) {
    const event = await Events.findOne({
      where: { id, deletedAt: null as any },
    });

    if (!event) {
      throw new Error('Event not found');
    }

    await event.update({ deletedAt: new Date() });
  }
}
