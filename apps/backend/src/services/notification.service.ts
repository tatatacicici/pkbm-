import { Notifications } from '../models/Notifications';

interface GetNotificationsParams {
  page: number;
  limit: number;
}

export class NotificationService {
  async getNotifications(userId: string, params: GetNotificationsParams) {
    const { page, limit } = params;
    const offset = (page - 1) * limit;

    const { rows: notifications, count: total } = await Notifications.findAndCountAll({
      where: { userId },
      limit,
      offset,
      order: [['createdAt', 'DESC']],
    });

    return {
      notifications,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async markAsRead(id: string) {
    const notification = await Notifications.findByPk(id);
    
    if (!notification) {
      throw new Error('Notification not found');
    }

    await notification.update({ isRead: true });
  }

  async markAllAsRead(userId: string) {
    await Notifications.update(
      { isRead: true },
      { where: { userId, isRead: false } }
    );
  }
}
