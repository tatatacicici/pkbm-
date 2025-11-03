import { FC, ReactElement } from 'react';
import { ChatList } from './chat-list';

export const HistoryChat: FC = (): ReactElement => {
  return (
    <div className="">
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
    </div>
  );
};
