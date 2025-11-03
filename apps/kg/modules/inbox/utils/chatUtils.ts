export const indonesianMonths = [
  'Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni',
  'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'
];

export const formatDateChatList = (date: Date): string => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    console.error('Invalid date:', date);
    return 'Invalid Date';
  }

  // if its today return only hour and minute in indonesian format
  const today = new Date();
  if (date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()) {
    return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
  }

  // if its yesterday return 'Kemarin'
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  if (date.getDate() === yesterday.getDate() && date.getMonth() === yesterday.getMonth() && date.getFullYear() === yesterday.getFullYear()) {
    return 'Kemarin';
  }

  // if its not today or yesterday return 'dd MMM yyyy'
  const day = date.getDate().toString().padStart(2, '0');
  const month = indonesianMonths[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

export const formatDate = (date: Date): string => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    console.error('Invalid date:', date);
    return 'Invalid Date';
  }

  const today = new Date();
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  // Reset hours, minutes, seconds, and milliseconds for accurate comparison
  today.setHours(0, 0, 0, 0);
  yesterday.setHours(0, 0, 0, 0);
  date.setHours(0, 0, 0, 0);

  if (date.getTime() === today.getTime()) {
    return 'Hari Ini';
  } else if (date.getTime() === yesterday.getTime()) {
    return 'Kemarin';
  } else {
    const day = date.getDate().toString().padStart(2, '0');
    const month = indonesianMonths[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }
};

export const sortAndGroupMessagesByDate = (messages: any[]): { date: Date; messages: any[] }[] => {
  if (!Array.isArray(messages) || messages.length === 0) {
    return [];
  }

  const sortedMessages = [...messages].sort((a, b) => {
    const dateA = new Date(a?.created_at || a?.message_timestamp || 0);
    const dateB = new Date(b?.created_at || b?.message_timestamp || 0);
    return dateA.getTime() - dateB.getTime();
  });

  const groups: { [key: string]: any[] } = {};
  sortedMessages.forEach(message => {
    if (!message) {
      return;
    }
    
    const date = new Date(message.created_at || message.message_timestamp);
    if (!(date instanceof Date) || isNaN(date.getTime())) {
      console.error('Invalid date for message:', message);
      return;
    }
    const dateString = date.toDateString();
    if (!groups[dateString]) {
      groups[dateString] = [];
    }
    groups[dateString].push(message);
  });

  const result = Object.entries(groups).map(([dateString, messages]) => ({
    date: new Date(dateString),
    messages
  }));

  return result;
};

export const formatTime = (dateString: string): string => {
  const date = new Date(dateString);
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    console.error('Invalid date string:', dateString);
    return 'Invalid Time';
  }
  return date.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' });
};

export const safeToISOString = (date: Date): string => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    console.error('Invalid date:', date);
    return 'Invalid Date';
  }
  return date.toISOString();
};