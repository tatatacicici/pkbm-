import { EventParticipants } from '../models/tables/EventParticipants';
import { Notifications } from '../models/tables/Notifications';
import { Users } from '../models/tables/Users';

export class DashboardService {
  async getDashboardData(userId: string) {
    const user = await Users.findByPk(userId);

    if (!user) {
      throw new Error('User not found');
    }

    const registeredEvents = await EventParticipants.count({
      where: { emailAddress: user.email } as any,
    });

    const unreadNotifications = await Notifications.count({
      where: { userId, isRead: false } as any,
    });

    return {
      user: {
        id: user.id,
        fullName: user.fullName,
        email: user.email,
        avatar: user.avatar,
      },
      stats: {
        registeredEvents,
        unreadNotifications,
      },
    };
  }
}
