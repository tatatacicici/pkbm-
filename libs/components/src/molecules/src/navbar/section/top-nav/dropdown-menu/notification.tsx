import { Menu, Transition } from '@headlessui/react';
import {
  useGetNotification,
  useUpdateAllNotification,
  useUpdateSingleNotification,
} from '@kampus-gratis/apps/kg/hooks/notification/hook';
import { useQueryClient } from '@tanstack/react-query';
import { DM_Sans } from 'next/font/google';
import {
  Fragment,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { toast } from 'react-hot-toast';
import {
  AiOutlineBell,
  AiOutlineCheckCircle,
  AiOutlineLoading3Quarters,
  AiOutlineWarning,
} from 'react-icons/ai';
import { FiBook, FiMoreVertical } from 'react-icons/fi';
import { HiCheckCircle } from 'react-icons/hi';
import { IoSchoolOutline } from 'react-icons/io5';
import { LuCheckCheck, LuClock } from 'react-icons/lu';
import { RxCross2 } from 'react-icons/rx';

const font = DM_Sans({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

type Notification = {
  id: string;
  title: string;
  type: string;
  seen_at: string | null;
  created_at: string;
};

const LoadingSpinner = memo(() => (
  <AiOutlineLoading3Quarters className="animate-spin h-4 w-4" />
));
LoadingSpinner.displayName = 'LoadingSpinner';

// Utility Functions
const getDateRanges = () => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const DAY_MS = 86400000;
  const MONTH_MS = 2629800000; // Average month in milliseconds

  return {
    today: today.getTime(),
    yesterday: today.getTime() - DAY_MS,
    lastWeek: today.getTime() - DAY_MS * 7,
    lastMonth: today.getTime() - MONTH_MS,
    twoMonths: today.getTime() - MONTH_MS * 2,
    threeMonths: today.getTime() - MONTH_MS * 3,
    fourMonths: today.getTime() - MONTH_MS * 4,
    fiveMonths: today.getTime() - MONTH_MS * 5,
    sixMonths: today.getTime() - MONTH_MS * 6,
    sevenMonths: today.getTime() - MONTH_MS * 7,
    eightMonths: today.getTime() - MONTH_MS * 8,
    nineMonths: today.getTime() - MONTH_MS * 9,
    tenMonths: today.getTime() - MONTH_MS * 10,
    elevenMonths: today.getTime() - MONTH_MS * 11,
    oneYear: today.getTime() - MONTH_MS * 12,
  };
};

const getNotificationStyles = (type: string) => {
  switch (type) {
    case 'STUDENT_SUBJECT':
      return { icon: 'text-green-500', bg: 'bg-green-50', component: FiBook };
    case 'CERTIFICATE':
      return {
        icon: 'text-blue-500',
        bg: 'bg-blue-50',
        component: IoSchoolOutline,
      };
    case 'WARNING':
      return {
        icon: 'text-yellow-500',
        bg: 'bg-yellow-50',
        component: AiOutlineWarning,
      };
    case 'SUCCESS':
      return {
        icon: 'text-emerald-500',
        bg: 'bg-emerald-50',
        component: AiOutlineCheckCircle,
      };
    default:
      return {
        icon: 'text-blue-500',
        bg: 'bg-blue-50',
        component: AiOutlineBell,
      };
  }
};

const formatTimestamp = (timestamp: string) => {
  const date = new Date(timestamp);
  const now = new Date();
  const diff = (now.getTime() - date.getTime()) / 1000;
  const days = Math.floor(diff / 86400);

  if (diff < 60) return 'Baru saja';
  if (diff < 3600) return `${Math.floor(diff / 60)} menit yang lalu`;
  if (diff < 86400) return `${Math.floor(diff / 3600)} jam yang lalu`;
  return `${days} hari yang lalu`;
};

// Custom Hooks
const useGroupedNotifications = (notifications: Notification[]) => {
  return useMemo(() => {
    const ranges = getDateRanges();
    const groups: Record<string, Notification[]> = {};

    // Updated group order with new time periods
    const groupOrder = [
      'Today',
      'Yesterday',
      'This Week',
      'This Month',
      '2 Months Ago',
      '3 Months Ago',
      '4 Months Ago',
      '5 Months Ago',
      '6 Months Ago',
      '7 Months Ago',
      '8 Months Ago',
      '9 Months Ago',
      '10 Months Ago',
      '11 Months Ago',
      'One Year Ago',
      'Older',
    ];

    // Pre-initialize all groups
    groupOrder.forEach((group) => {
      groups[group] = [];
    });

    // Group notifications with expanded time periods
    notifications.forEach((notification) => {
      const notificationTime = new Date(notification.created_at).getTime();

      let group;
      if (notificationTime >= ranges.today) group = 'Today';
      else if (notificationTime >= ranges.yesterday) group = 'Yesterday';
      else if (notificationTime >= ranges.lastWeek) group = 'This Week';
      else if (notificationTime >= ranges.lastMonth) group = 'This Month';
      else if (notificationTime >= ranges.twoMonths) group = '2 Months Ago';
      else if (notificationTime >= ranges.threeMonths) group = '3 Months Ago';
      else if (notificationTime >= ranges.fourMonths) group = '4 Months Ago';
      else if (notificationTime >= ranges.fiveMonths) group = '5 Months Ago';
      else if (notificationTime >= ranges.sixMonths) group = '6 Months Ago';
      else if (notificationTime >= ranges.sevenMonths) group = '7 Months Ago';
      else if (notificationTime >= ranges.eightMonths) group = '8 Months Ago';
      else if (notificationTime >= ranges.nineMonths) group = '9 Months Ago';
      else if (notificationTime >= ranges.tenMonths) group = '10 Months Ago';
      else if (notificationTime >= ranges.elevenMonths) group = '11 Months Ago';
      else if (notificationTime >= ranges.oneYear) group = 'One Year Ago';
      else group = 'Older';

      groups[group].push(notification);
    });

    // Sort notifications within each group
    Object.keys(groups).forEach((key) => {
      groups[key].sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    });

    return { groups, groupOrder };
  }, [notifications]);
};

const useIntersectionObserver = (
  callback: (isIntersecting: boolean) => void
) => {
  const observer = useRef<IntersectionObserver | null>(null);

  return useCallback(
    (element: HTMLElement | null) => {
      if (observer.current) {
        observer.current.disconnect();
      }

      if (element) {
        observer.current = new IntersectionObserver(
          ([entry]) => callback(entry.isIntersecting),
          { threshold: [1] }
        );
        observer.current.observe(element);
      }
    },
    [callback]
  );
};

// Components
const NotificationIcon = memo(({ unseenCount }: { unseenCount: number }) => (
  <div className="relative">
    <Menu.Button
      className="flex items-center justify-center bg-white hover:bg-gray-50 border border-gray-200 transition-colors duration-200 h-10 w-10 p-2 rounded-lg"
      aria-label="notifications"
    >
      <AiOutlineBell className="text-xl text-gray-600" />
      {unseenCount > 0 && (
        <span
          className={`absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center ${font.className}`}
        >
          {unseenCount}
        </span>
      )}
    </Menu.Button>
  </div>
));
NotificationIcon.displayName = 'NotificationIcon';

const NotificationHeader = memo(
  ({
    unseenCount,
    onClose,
    isMobile,
  }: {
    unseenCount: number;
    onClose?: () => void;
    isMobile?: boolean;
  }) => (
    // <div
    //   className={`flex justify-between items-center px-4 py-3 bg-primary-500 text-white ${
    //     !isMobile ? 'rounded-t-xl' : ''
    //   }`}
    // >
    <div
      className={`flex justify-between items-center px-4 py-3 bg-sky-base text-white ${
        !isMobile ? 'rounded-t-xl' : ''
      }`}
    >
      <div>
        <h3
          className={`${
            isMobile ? 'text-lg' : 'text-md'
          } font-semibold flex items-center gap-2`}
        >
          <AiOutlineBell className="w-5 h-5" />
          Notifikasi
        </h3>
        <p className={`${isMobile ? 'text-sm' : 'text-xs'} mt-1`}>
          {unseenCount > 0 ? (
            <span className={font.className}>{unseenCount}</span>
          ) : (
            'Tidak ada'
          )}{' '}
          Notifikasi baru
        </p>
      </div>
      {isMobile && onClose && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
          className="p-2 text-white/80 hover:text-white rounded-lg hover:bg-white/20"
        >
          <RxCross2 className="w-6 h-6" />
        </button>
      )}
    </div>
  )
);
NotificationHeader.displayName = 'NotificationHeader';

const NotificationFooter = memo(
  ({
    unseenCount,
    onMarkAllRead,
  }: {
    unseenCount: number;
    onMarkAllRead: () => void;
  }) =>
    unseenCount > 0 ? (
      <button
        onClick={onMarkAllRead}
        className="w-full inline-flex items-center justify-center px-3 py-4 rounded-lg text-sm font-medium bg-blue-50 text-blue-base hover:bg-blue-100 transition-colors duration-200"
      >
        <HiCheckCircle className="w-4 h-4 mr-1.5" />
        Tandai semua dibaca
      </button>
    ) : null
);
NotificationFooter.displayName = 'NotificationFooter';

const DateGroupHeader = memo(({ title }: { title: string }) => {
  const [isSticky, setIsSticky] = useState(false);
  const observerRef = useIntersectionObserver(
    useCallback((isIntersecting) => setIsSticky(!isIntersecting), [])
  );

  // Enhanced title formatting
  const getFormattedTitle = (title: string) => {
    switch (title) {
      case 'Today':
        return 'Hari Ini';
      case 'Yesterday':
        return 'Kemarin';
      case 'This Week':
        return 'Minggu Ini';
      case 'This Month':
        return 'Bulan Ini';
      case 'One Year Ago':
        return 'Satu Tahun Lalu';
      case 'Older':
        return 'Lebih Lama';
      default:
        if (title.includes('Months Ago')) {
          const months = title.split(' ')[0];
          return `${months} Bulan Lalu`;
        }
        return title;
    }
  };

  return (
    <div
      ref={observerRef}
      className={`sticky top-0 px-4 py-2 text-sm text-primary-500 font-medium z-10 flex items-center gap-2 border-y bg-gray-50
        ${isSticky ? 'shadow-sm' : ''} ${font.className}`}
    >
      <LuClock className="w-4 h-4" />
      {getFormattedTitle(title)}
    </div>
  );
});

DateGroupHeader.displayName = 'DateGroupHeader';

const NotificationMenu = memo(
  ({
    notification,
    onMarkAsRead,
    isPending,
  }: {
    notification: Notification;
    onMarkAsRead: (id: string) => void;
    isPending: boolean;
  }) => {
    return (
      <Menu as="div" className="relative inline-block text-left ml-2">
        {({ open }) => (
          <>
            <Menu.Button
              className="p-1 rounded-full hover:bg-gray-100 transition-colors duration-200"
              disabled={isPending}
              onClick={(e) => e.stopPropagation()}
            >
              <FiMoreVertical className="h-4 w-4 text-gray-400" />
            </Menu.Button>

            {open && (
              <Menu.Items
                static
                className="absolute right-0 mt-2 w-max origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
                onClick={(e) => e.stopPropagation()}
              >
                <div>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      if (!notification.seen_at) {
                        onMarkAsRead(notification.id);
                      }
                    }}
                    disabled={isPending || !!notification.seen_at}
                    className={`
                      flex w-full items-center px-3 py-2 text-[13px] 
                      hover:bg-gray-100
                      ${
                        notification.seen_at
                          ? 'text-gray-400 cursor-not-allowed'
                          : 'text-gray-700'
                      }
                      ${isPending ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                  >
                    <LuCheckCheck className="w-3.5 h-3.5 mr-2" />
                    {notification.seen_at
                      ? 'Sudah dibaca'
                      : 'Tandai sudah dibaca'}
                  </button>
                </div>
              </Menu.Items>
            )}
          </>
        )}
      </Menu>
    );
  }
);

NotificationMenu.displayName = 'NotificationMenu';

const NotificationItem = memo(
  ({
    notification,
    onMarkAsRead,
  }: {
    notification: Notification;
    onMarkAsRead: (id: string) => void;
  }) => {
    const style = getNotificationStyles(notification.type);
    const isRead = notification.seen_at;

    return (
      <div
        className={`group flex items-start w-full px-4 py-3 text-sm transition-colors duration-150 
          ${!isRead ? 'hover:bg-gray-50' : 'bg-gray-50/80'}`}
      >
        <div
          className={`flex-shrink-0 mr-3 p-2 rounded-lg ${
            isRead ? 'bg-gray-100' : style.bg
          }`}
        >
          <style.component
            className={`h-5 w-5 ${isRead ? 'text-gray-400' : style.icon} ${
              isRead ? 'opacity-80' : ''
            }`}
          />
        </div>
        <div className="flex flex-col items-start flex-grow min-w-0">
          <div className="flex justify-between w-full">
            <span
              className={`text-start ${
                !isRead ? 'font-semibold text-gray-900' : 'text-gray-700'
              }`}
            >
              {notification.title}
            </span>
            {!isRead && (
              <NotificationMenu
                notification={notification}
                onMarkAsRead={onMarkAsRead}
                isPending={false} // Remove pending state since we're using optimistic updates
              />
            )}
          </div>
          <span className={`text-xs text-gray-400 mt-2 ${font.className}`}>
            {formatTimestamp(notification.created_at)}
          </span>
        </div>
      </div>
    );
  }
);

NotificationItem.displayName = 'NotificationItem';

const EmptyNotifications = memo(() => (
  <div className="flex flex-col items-center justify-center h-full px-4 py-8">
    <AiOutlineBell className="w-12 h-12 text-gray-400 mb-3" />
    <p className="text-gray-500">Tidak ada notifikasi</p>
  </div>
));
EmptyNotifications.displayName = 'EmptyNotifications';

const NotificationList = memo(
  ({
    notifications,
    onMarkAsRead,
    maxHeight = '65vh',
  }: {
    notifications: Notification[];
    onMarkAsRead: (id: string) => void;
    maxHeight?: string;
  }) => {
    const { groups, groupOrder } = useGroupedNotifications(notifications);

    if (notifications.length === 0) {
      return <EmptyNotifications />;
    }

    return (
      <div className="overflow-y-auto" style={{ maxHeight }}>
        {groupOrder.map((groupName) => {
          const groupItems = groups[groupName];
          if (!groupItems?.length) return null;

          return (
            <Fragment key={groupName}>
              <DateGroupHeader title={groupName} />
              {groupItems.map((notification, index) => (
                <Fragment key={notification.id}>
                  <NotificationItem
                    notification={notification}
                    onMarkAsRead={onMarkAsRead}
                  />
                  {index < groupItems.length - 1 && (
                    <div className="border-t border-gray-100" />
                  )}
                </Fragment>
              ))}
            </Fragment>
          );
        })}
      </div>
    );
  }
);
NotificationList.displayName = 'NotificationList';

export const NavbarNotification = memo(() => {
  const { data, isLoading } = useGetNotification();
  const { mutate: updateSingleNotification } = useUpdateSingleNotification();
  const { mutate: updateAllNotification } = useUpdateAllNotification();
  const queryClient = useQueryClient();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const notifications = useMemo(
    () => data?.data?.notifications ?? [],
    [data?.data?.notifications]
  );

  const unseenCount = useMemo(
    () => notifications.filter((n) => !n.seen_at).length,
    [notifications]
  );

  const handleMarkAsRead = useCallback(
    (notificationId: string) => {
      queryClient.setQueryData<{ data: { notifications: Notification[] } }>(
        ['get-notification'],
        (oldData) => ({
          ...(oldData ?? { data: { notifications: [] } }),
          data: {
            ...(oldData?.data ?? { notifications: [] }),
            notifications: (oldData?.data?.notifications ?? []).map(
              (notification) =>
                notification.id === notificationId
                  ? { ...notification, seen_at: new Date().toISOString() }
                  : notification
            ),
          },
        })
      );

      updateSingleNotification(notificationId, {
        onSuccess: () => {
          toast.success('Notifikasi ditandai sebagai dibaca');
        },
        onError: () => {
          toast.error('Gagal menandai notifikasi sebagai dibaca');
          queryClient.invalidateQueries(['get-notification']);
        },
      });
    },
    [updateSingleNotification, queryClient]
  );

  const handleMarkAllAsRead = useCallback(() => {
    // Optimistically update the UI
    queryClient.setQueryData<{ data: { notifications: Notification[] } }>(
      ['get-notification'],
      (oldData) => ({
        ...(oldData ?? { data: { notifications: [] } }),
        data: {
          ...(oldData?.data ?? { notifications: [] }),
          notifications: (oldData?.data?.notifications ?? []).map(
            (notification) => ({
              ...notification,
              seen_at: notification.seen_at || new Date().toISOString(),
            })
          ),
        },
      })
    );

    // Call the mutation
    updateAllNotification(undefined, {
      onSuccess: () => {
        toast.success('Semua notifikasi ditandai sebagai dibaca');
      },
      onError: () => {
        toast.error('Gagal menandai semua notifikasi sebagai dibaca');
        queryClient.invalidateQueries(['get-notification']);
      },
    });
  }, [updateAllNotification, queryClient]);

  // Updated click outside handler
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  if (isLoading) return null;

  return (
    <Menu as="div" className="relative inline-block text-left" ref={menuRef}>
      <Menu.Button
        className="flex items-center justify-center bg-white hover:bg-gray-50 border border-gray-200 transition-colors duration-200 h-10 w-10 p-2 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <AiOutlineBell className="text-xl text-gray-600" />
        {unseenCount > 0 && (
          <span
            className={`absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold rounded-full h-5 w-5 flex items-center justify-center ${font.className}`}
          >
            {unseenCount}
          </span>
        )}
      </Menu.Button>

      {/* Desktop Dropdown */}
      <div className="hidden md:block">
        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Menu.Items
            static
            className="overflow-hidden absolute right-0 mt-2 w-[420px] origin-top-right bg-white rounded-xl shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100"
          >
            <NotificationHeader unseenCount={unseenCount} isMobile={false} />
            <NotificationList
              notifications={notifications}
              onMarkAsRead={handleMarkAsRead}
            />
            <NotificationFooter
              unseenCount={unseenCount}
              onMarkAllRead={handleMarkAllAsRead}
            />
          </Menu.Items>
        </Transition>
      </div>

      {/* Mobile Full Screen */}
      <div className="md:hidden">
        <Transition
          show={isOpen}
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Menu.Items static className="fixed inset-0 z-50 bg-white">
            <NotificationHeader
              unseenCount={unseenCount}
              onClose={() => setIsOpen(false)}
              isMobile={true}
            />
            <NotificationList
              notifications={notifications}
              onMarkAsRead={handleMarkAsRead}
              maxHeight="calc(100vh - 128px)"
            />
            <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 p-4">
              <NotificationFooter
                unseenCount={unseenCount}
                onMarkAllRead={handleMarkAllAsRead}
              />
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
});

NavbarNotification.displayName = 'NavbarNotification';

export default NavbarNotification;
