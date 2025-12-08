import React, { useEffect, useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Avatar from 'react-avatar';

import { Conversation } from './types';
import { formatDate, formatDateChatList } from '../utils/chatUtils';

const StudentInboxChatList = React.memo(({ 
  onSelectConversation, 
  socketService, 
  selectedUserId
 }: {
  onSelectConversation: (conversation: Conversation) => void;
  socketService: any;
  selectedUserId: any | null;
}) => {
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isReconnecting, setIsReconnecting] = useState(false);

  const fetchConversations = useCallback(() => {
    if (socketService.isConnected('inbox')) {
      setIsLoading(true);
      socketService.emit('v1_get_conversations', {}, 'inbox');
    } else {
      setError('Jaringan tidak tersambung. Mencoba menyambung kembali...');
      setIsReconnecting(true);
      reconnect();
    }
  }, [socketService]);

  const reconnect = useCallback(() => {
    const reconnectInterval = setInterval(() => {
      if (socketService.isConnected('inbox')) {
        clearInterval(reconnectInterval);
        setIsReconnecting(false);
        setError(null);
        fetchConversations();
      } else {
        socketService.connect('inbox');
      }
    }, 5000);

    return () => clearInterval(reconnectInterval);
  }, [socketService, fetchConversations]);

  const handleConversationsResponse = useCallback((response: any) => {
    setIsLoading(false);

    if (response.code === 200) {
      setConversations(response.data?.conversations?.length > 0 ? response.data.conversations : []);
    } else {
      setError(response.message);
    }
  }, []);

  const handleConversationsError = useCallback((errorMessage: string) => {
    setIsLoading(false);
    setError(errorMessage);
    setIsReconnecting(true);
    reconnect();
  }, [reconnect]);

  const handleBroadcastConversationUpdate = useCallback((response: any) => {
    const updatedConversation: Conversation = response.data;
    setConversations((prevConversations) => {
      const updatedIndex = prevConversations.findIndex((conversation) => conversation.id === updatedConversation.id);

      if (updatedIndex === -1) {
        return [updatedConversation, ...prevConversations];
      }

      const newConversations = [...prevConversations];
      newConversations[updatedIndex] = updatedConversation;

      if (new Date(updatedConversation.last_message_timestamp).getTime() > new Date(prevConversations[updatedIndex].last_message_timestamp).getTime()) {
        return [updatedConversation, ...newConversations.filter((_, index) => index !== updatedIndex)];
      }

      if (selectedUserId === updatedConversation.id) {
        onSelectConversation(updatedConversation);
      }

      return newConversations;
    });
  }, [selectedUserId, onSelectConversation]);

  useEffect(() => {
    socketService.on('v1_get_conversations_response', handleConversationsResponse, 'inbox');
    socketService.on('v1_get_conversations_error', handleConversationsError, 'inbox');
    socketService.on('v1_update_conversation_response', handleBroadcastConversationUpdate, 'inbox');

    fetchConversations();

    return () => {
      socketService.off('v1_get_conversations_response', handleConversationsResponse, 'inbox');
      socketService.off('v1_get_conversations_error', handleConversationsError, 'inbox');
      socketService.off('v1_update_conversation_response', handleBroadcastConversationUpdate, 'inbox');
    };
  }, [socketService, fetchConversations, handleConversationsResponse, handleConversationsError, handleBroadcastConversationUpdate]);

  const filteredConversations = useMemo(() => 
    conversations.filter(conversation => 
      conversation.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      conversation.last_message.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [searchQuery, conversations]
  );

  const handleSearchChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchQuery('');
  }, []);

  if (isLoading) {
    return (
      <div className="inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75 py-10">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="mt-2 text-gray-600">Sedang memuat percakapan...</p>
        </div>
      </div>
    );
  }

  if (error && !isReconnecting) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  return (
    <>
      <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 z-10">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
          </div>
          <input 
            type="text" 
            className="w-full rounded-md border border-gray-300 bg-gradient-to-r from-gray-50 to-white py-2 pl-10 pr-10 text-sm transition duration-150 ease-in-out focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" 
            placeholder="Cari Nama di sini ..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              className="absolute inset-y-0 right-0 pr-3 flex items-center focus:outline-none focus:shadow-outline hover:text-gray-700"
              aria-label="Clear Pencarian"
            >
              <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
          )}
        </div>
      </div>
      <div className="flex-1 max-h-[43rem] overflow-y-auto">
        {/* {isReconnecting && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-gray-600">Mencoba menyambung kembali...</p>
            </div>
          </div>
        )} */}
        {filteredConversations.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center p-4">
            <svg className="w-16 h-16 text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
            </svg>
            <p className="text-lg font-medium text-[#111b21]">
              {searchQuery.length > 0 ? "Chat tidak ditemukan" : "Belum ada chat di sini"}
            </p>
            <p className="text-sm text-gray-400 mt-1">
              {searchQuery.length > 0 ? "Coba cari dengan kata kunci lain" : "Mulai chat dengan menekan tombol 'Tambah' di atas"}
            </p>
          </div>
        ) : (
          <div className="divide-y divide-gray-200">
            {filteredConversations.map((conversation: Conversation) => (
              <ConversationItem
                key={conversation.id}
                conversation={conversation}
                onSelectConversation={onSelectConversation}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
});

const ConversationItem = React.memo(({ conversation, onSelectConversation }: { conversation: Conversation, onSelectConversation: (conversation: Conversation) => void }) => (
  <div
    className="flex items-center p-4 hover:bg-gray-50 cursor-pointer"
    onClick={() => onSelectConversation(conversation)}
  >
    <div className="flex-shrink-0 relative mr-3">
      <div className="bg-neutral-100 flex items-center justify-center overflow-hidden rounded-md h-10 w-10 cursor-pointer group">
        {conversation?.avatar ? (
          <Image
            src={conversation.avatar}
            alt={conversation.full_name}
            width={40}
            height={40}
            className="bg-white h-10 w-10 flex text-neutral-600 items-center rounded-md justify-center font-[700] bg-center"
          />
        ) : (
          <Avatar
            name={conversation.full_name}
            size="40"
            round={false}
          />
        )}
      </div>
      <div className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${conversation.status === "ONLINE" ? 'bg-green-500' : 'bg-gray-400'}`}></div>
    </div>
    <div className="flex-1 min-w-0">
      <div className="flex items-center justify-between">
        <h3 className="text-sm font-medium text-gray-900 truncate">
          {conversation.full_name}
        </h3>
        <span className="text-xs text-gray-500">
          {formatDateChatList(new Date(conversation.last_message_timestamp))}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <p className="flex items-center gap-1 text-sm truncate text-gray-500">
          {conversation.is_message_from_current_user && <DoubleTickIcon seen={conversation.is_message_seen} />}
          {conversation.last_message}
        </p>
        {conversation.total_unread_messages > 0 && (
          <div className="inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-blue-500 border-none rounded-full -top-2 -end-2 dark:border-gray-900">
            {conversation.total_unread_messages > 20 ? '20+' : conversation.total_unread_messages}
          </div>
        )}
      </div>
    </div>
  </div>
));

const DoubleTickIcon: React.FC<{ seen: boolean }> = React.memo(({ seen }) => (
  <svg 
    viewBox="0 0 16 15" 
    width="16" 
    height="15" 
    className={`fill-current ${seen ? 'text-blue-500' : 'text-gray-500'}`}
  >
    <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" />
  </svg>
));

export default StudentInboxChatList;