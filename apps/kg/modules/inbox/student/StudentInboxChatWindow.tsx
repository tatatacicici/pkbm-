import React, { useState, useEffect, useRef, useCallback, useLayoutEffect, useMemo } from 'react'
import { formatDate, formatTime, sortAndGroupMessagesByDate } from '../utils/chatUtils'
import { useMessageLimiter } from '../hooks/useMessageLimitter'
import { Message, MetaPagination } from './types'

const StudentInboxChatWindow: React.FC<{ 
  receiverId: string,
  socketService: any
  onBack: () => void
 }> = ({ receiverId, socketService, onBack }) => {
  const messagesContainerRef = useRef<HTMLDivElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const loadingRef = useRef<HTMLDivElement>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isLoadingOlder, setIsLoadingOlder] = useState<boolean>(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [isTyping, setIsTyping] = useState<boolean>(false)
  const [contact, setContact] = useState<{ full_name: string } | null>(null)
  const [meta, setMeta] = useState<MetaPagination | null>(null)
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [isSending, setIsSending] = useState<boolean>(false)
  // const [messageText, setMessageText] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)

  const {
    message: messageText,
    setMessage: setMessageText,
    canSendMessage,
    sendMessage: triggerSendMessage,
    error: messageLimiterError
  } = useMessageLimiter({ maxLength: 128, cooldownPeriod: 500 });

  // on receiver change
  useEffect(() => {
    setIsLoading(true);
    setMessages([]);
    setMeta(null);
    setIsFirstRender(true);
    setIsTyping(false);
    setContact(null);
  }, [receiverId]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onBack()
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [onBack])
  
  const scrollToBottom = useCallback(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ block: 'end', inline: 'nearest' });
    }
  }, []);

  useLayoutEffect(() => {
    if (!isLoading && messages.length > 0) {
      if (isFirstRender) {
        scrollToBottom();
        setIsFirstRender(false);
      } else {
        const scrollContainer = messagesContainerRef.current;
        if (scrollContainer) {
          const isScrolledToBottom = (scrollContainer.scrollHeight - scrollContainer.scrollTop - scrollContainer.clientHeight) < 5;
          if (isScrolledToBottom) {
            scrollToBottom();
          }
        }
      }
    }
  }, [isLoading, messages, scrollToBottom]);

  const loadMessages = useCallback((page: number = 1) => {
    if (isLoadingOlder) return;
  
    const scrollContainer = messagesContainerRef.current;
    const previousScrollHeight = scrollContainer ? scrollContainer.scrollHeight : 0;
    const previousScrollTop = scrollContainer ? scrollContainer.scrollTop : 0;
  
    setIsLoadingOlder(true);
    setError(null);
  
    socketService.emit('v1_get_chat_histories', { receiver_id: receiverId, page }, 'inbox');
  
    const handleResponse = (response: any) => {
      if (response.code === 200) {
        setTimeout(() => {
          setContact({ full_name: response.data.full_name });
          setMessages(prevMessages =>
            page === 1 ? response.data.messages : [...response.data.messages, ...prevMessages]
          );
          setMeta(response.meta);
          setIsLoading(false);
          setIsLoadingOlder(false);

          if (scrollContainer) {
            const newScrollHeight = scrollContainer.scrollHeight;
            const heightDifference = newScrollHeight - previousScrollHeight;
            scrollContainer.scrollTop = previousScrollTop + heightDifference;
          }
        }, 1000);
      } else {
        console.error('Error in chat histories response:', response);
        setError('Terjadi kesalahan saat mengambil riwayat chat.');
        setIsLoading(false);
        setIsLoadingOlder(false);
      }
      socketService.off('v1_get_chat_histories_response', handleResponse, 'inbox');
    };
  
    const handleError = (errorResponse: any) => {
      console.error('Error in v1_get_chat_histories:', errorResponse); // Debugging line
      setError(errorResponse.message || 'Terjadi kesalahan saat mengambil riwayat chat.');
      setIsLoading(false);
      setIsLoadingOlder(false);
      socketService.off('v1_get_chat_histories_error', handleError, 'inbox');
    };
  
    socketService.on('v1_get_chat_histories_response', handleResponse, 'inbox');
    socketService.on('v1_get_chat_histories_error', handleError, 'inbox');
  }, [receiverId, socketService]);
  
  useEffect(() => {
    loadMessages();
  }, [loadMessages]);
  
  useEffect(() => {
    if (!isLoading && isFirstRender) {
      setIsFirstRender(false);
      if (inputRef.current) {
        inputRef.current.focus();
      }
    }
  }, [isLoading, isFirstRender]);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && meta?.has_next && !isLoadingOlder) {
        loadMessages(meta.next || 1);
      }
    }, options);

    if (loadingRef.current) {
      observer.observe(loadingRef.current);
    }

    return () => {
      if (loadingRef.current) {
        observer.unobserve(loadingRef.current);
      }
    };
  }, [meta, isLoadingOlder, loadMessages]);

  useEffect(() => {
    const handleSendMessageResponse = (response: any) => {
      if (response.code === 200) {
        setMessages(prevMessages => [...prevMessages, response.data]);
        setIsSending(false);
        setError(null);

        // Scroll to bottom after sending message
        setTimeout(() => {
          scrollToBottom();
          const input = document.querySelector('#input-chat-message') as HTMLInputElement;  
          if (input) input.focus();
        }, 50);
      }
    };

    const handleSendMessageError = (errorResponse: any) => {
      setError(errorResponse.message || 'Gagal mengirim pesan. Silahkan coba lagi');
      setIsSending(false);
    };

    socketService.on('v1_chat_send_message_response', handleSendMessageResponse, 'inbox');
    socketService.on('v1_chat_send_message_error', handleSendMessageError, 'inbox');

    socketService.on("v1_chat_receive_message_response", (response: any) => {
      if (response.code === 200) {
        setMessages(prevMessages => [...prevMessages, response.data]);

        // If the received message is for the current chat, mark it as seen
        if (response.data.id === receiverId) {
          socketService.emit('v1_mark_messages_as_seen', { receiver_id: receiverId });
        }

        setTimeout(() => {
          scrollToBottom();
        }, 50);
      }
    }, 'inbox');

    socketService.on("v1_messages_seen_response", (response: any) => {
      if (response.code === 200) {
        const updatedMessagesSeen = response.data.messages;

        if(updatedMessagesSeen.length === 0) return;
        if(receiverId !== response.data.id) return;

        setMessages(prevMessages => {
          return prevMessages.map((message) => {
            const updatedMessage = updatedMessagesSeen.find((m: any) => m.message_id === message.message_id);
            if (updatedMessage) {
              return { ...message, is_message_seen: updatedMessage.is_message_seen };
            }
            return message;
          });
        });
      }
    }, 'inbox');

    return () => {
      socketService.off('v1_chat_send_message_response', handleSendMessageResponse, 'inbox');
      socketService.off('v1_chat_send_message_error', handleSendMessageError, 'inbox');
      socketService.off("v1_chat_receive_message_response", () => {}, 'inbox');

      socketService.off("v1_messages_seen_response", () => {}, 'inbox');
    };
  }, [socketService]);

  // const sendMessage = () => {
  //   if (isSending || messageText.trim().length === 0) return;
    
  //   setIsSending(true);
  //   setError(null);
  //   socketService.emit('v1_chat_send_message', { receiver_id: receiverId, message: messageText.trim() });
  //   setMessageText(''); // Clear the input after sending
  // };

  const sendMessage = () => {
    if (isSending || !canSendMessage) return;
    
    if (messageLimiterError) {
      setError(messageLimiterError);
      return;
    }

    setIsSending(true);
    setError(null);
    socketService.emit('v1_chat_send_message', { receiver_id: receiverId, message: messageText.trim() }, 'inbox');
    triggerSendMessage(); // This will clear the message and update the timestamp
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessageText(e.target.value);
    setError(null); // Clear any previous errors when the input changes
  };

  const groupedMessages = useMemo(() => sortAndGroupMessagesByDate(messages), [messages]);

  const handleRetry = () => {
    setError(null);
    loadMessages();
  };

  return (
    <>
      <div ref={messagesContainerRef} className="flex-1 overflow-y-auto h-full relative">
        {isLoading ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75">
            <div className="text-center">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
              <p className="mt-2 text-gray-600">Memuat pesan...</p>
            </div>
          </div>
        ) : error ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 bg-opacity-75">
            <div className="text-center">
              <p className="text-red-500 mb-4">{error}</p>
              <button 
                onClick={handleRetry}
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
              >
                Coba lagi
              </button>
            </div>
          </div>
        ) : (
          <>
            <div ref={loadingRef} className="h-1" />
            {isLoadingOlder && (
              <div className="text-center py-3">
                <div className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-blue-500"></div>
              </div>
            )}
            {groupedMessages.length > 0 ? (
              groupedMessages.map((group, groupIndex) => (
                <React.Fragment key={groupIndex}>
                  <div className="text-center my-4">
                    <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-full text-sm">
                      {formatDate(group.date)}
                    </span>
                  </div>
                  {group.messages.map((message: Message, messageIndex: number) => (
                    <MessageBubble 
                      key={`${message.id}-${messageIndex}`}  // Updated key to include index
                      message={message} 
                      isFromMe={message.is_message_from_current_user} 
                    />
                  ))}
                </React.Fragment>
              ))
            ) : (
              <div className="text-center py-4">
                <p className="text-gray-500">Belum ada pesan</p>
              </div>
            )}
            <div ref={messagesEndRef} />
            {isTyping && (
              <div className="text-gray-500 text-sm m-2">
                {contact?.full_name} sedang mengetik ...
              </div>
            )}
          </>
        )}

        {error && (
          <div className="text-red-500 text-sm m-2 px-4">
            {error}
          </div>
        )}

      </div>
      {/* Message input and send button */}
      <div className="sticky bottom-0 bg-white border-t border-gray-200 px-4 py-3">
        <form onSubmit={(e) => {
          e.preventDefault();
          sendMessage();
        }}>
          <div className="flex items-center space-x-2">
            <input
              ref={inputRef}
              id="input-chat-message"
              type="text"
              value={messageText}
              onChange={handleInputChange}
              className="flex-grow border border-gray-300 rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Ketik pesan..."
              disabled={isSending || isLoading}
              autoFocus
            />
            <button 
              type='submit'
              className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
              disabled={isSending || !canSendMessage || !!messageLimiterError}
            >
              <svg className="h-6 w-6 transform rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
            </button>
          </div>
        </form>
        {(error || messageLimiterError) && (
          <p className="text-red-500 text-xs mt-1 px-2">{messageLimiterError}</p>
        )}
      </div>
    </>
  )
}

const MessageBubble: React.FC<{ message: Message; isFromMe: boolean }> = ({ message, isFromMe }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const maxLength = 150;

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const displayContent = isExpanded ? message.message : message.message.slice(0, maxLength);

  return (
    <div className={`flex ${isFromMe ? 'justify-end' : 'justify-start'} mb-2 px-4`}>
      <div className={`rounded-lg px-4 py-2 max-w-xs lg:max-w-md ${
        isFromMe ? 'bg-blue-500 text-white' : 'bg-gray-200'
      }`}>
        <p className="break-words">{displayContent}</p>
        {message.message.length > maxLength && (
          <button
            onClick={toggleExpand}
            className={`text-xs mt-1 ${isFromMe ? 'text-blue-200' : 'text-blue-500'}`}
          >
            {isExpanded ? 'Muat lebih sedikit' : 'Muat lebih banyak'}
          </button>
        )}
        <div className={`flex items-center justify-end text-xs ${isFromMe ? 'text-blue-100' : 'text-gray-500'} mt-1`}>
          <span className="mr-1">{formatTime(message.message_timestamp)}</span>
          {isFromMe && <DoubleTickIcon seen={message.is_message_seen} />}
        </div>
      </div>
    </div>
  );
};

const DoubleTickIcon: React.FC<{ seen: boolean }> = ({ seen }) => (
  <svg 
    viewBox="0 0 16 15" 
    width="16" 
    height="15" 
    className={`fill-current ${seen ? 'text-green-300' : 'text-gray-100'}`}
  >
    <path d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z" />
  </svg>
);

export default StudentInboxChatWindow;