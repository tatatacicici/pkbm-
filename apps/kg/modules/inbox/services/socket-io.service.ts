  import { io, Socket } from 'socket.io-client';

  class SocketService {
    private socket: Socket | null = null;
    private listeners: { [event: string]: ((data: any) => void)[] } = {};

    connect(token: string) {
      if (this.socket) {
        this.socket.disconnect();
      }

      const URL_LOCAL = 'http://localhost:7000/io/inbox';
      const URL_PROD = 'https://api.kampusgratis.id/io/inbox';

      this.socket = io(URL_PROD, {
        auth: { token },
        reconnection: true,
        reconnectionAttempts: 5,
        reconnectionDelay: 1000,
      });

      this.socket.on('connect', () => {
        console.log('Connected to socket server');
        this.reattachListeners();
      });

      this.socket.on('disconnect', () => {
        console.log('Disconnected from socket server');
      });

      this.socket.on('chatError', (error) => {
        console.error('Chat error:', error);
      });

      this.socket.onAny((event, ...args) => {
        console.log('Received event:', event, ...args);
      });

      return this.socket;
    }

    disconnect() {
      if (this.socket) {
        this.socket.disconnect();
      }
    }
  
    isConnected() {
      return this.socket?.connected || false;
    }

    getStudents(query: string) {
      if (this.socket) {
        console.log('Emitting chatGetStudents:', query);
        this.socket.emit('chatGetStudents', { query: { search: query } });
      } else {
        console.error('Socket is not connected. Cannot get students.');
      }
    }

    onChatListStudents(callback: (data: any) => void) {
      this.on('chatListStudents', callback);
    }

    sendMessage(recipientId: string, content: string): Promise<any> {
      return new Promise((resolve, reject) => {
        if (this.socket) {
          this.socket.emit('chatSendMessage', { receiver_id: recipientId, content });
          
          // Set up a one-time listener for the response
          this.socket.once('chatSendMessage', (response) => {
            if (response.code === 200) {
              resolve(response.data);
            } else {
              reject(new Error(response.message || 'Failed to send message'));
            }
          });
  
          // Set up a timeout in case the server doesn't respond
          setTimeout(() => {
            reject(new Error('Timeout: No response from server'));
          }, 5000); // 5 seconds timeout
        } else {
          reject(new Error('Socket is not connected'));
        }
      });
    }

    onReceiveMessage(callback: (message: any) => void) {
      if (this.socket) {
        this.socket.on('receiveMessage', (response: any) => {
          console.log('Received message in SocketService:', response);
          if (response.code === 200) {
            callback(response.data);
          } else {
            console.error('Error receiving message:', response.message);
          }
        });
      }
    }
  
    getChatHistories(receiverId: string, oldestMessageDate?: string, limit: number = 20): Promise<any[]> {
      return new Promise((resolve, reject) => {
        if (this.socket) {
          this.socket.emit('getChatHistories', { receiver_id: receiverId, oldest_message_date: oldestMessageDate, limit });
          
          const handleChatHistory = (response: any) => {
            if (response.code === 200) {
              resolve(response.data);
            } else {
              reject(new Error(response.message || 'Failed to retrieve chat history'));
            }
            this.socket!.off('chatHistory', handleChatHistory);
          };
  
          this.socket.on('chatHistory', handleChatHistory);
  
          setTimeout(() => {
            this.socket!.off('chatHistory', handleChatHistory);
            reject(new Error('Timeout: No response from server'));
          }, 5000);
        } else {
          reject(new Error('Socket is not connected'));
        }
      });
    }
  
    getConversationList() {
      if (this.isConnected()) {
        console.log('Emitting getConversationList event');
        this.socket!.emit('getConversationList');
      } else {
        console.error('Socket is not connected. Cannot get conversation list.');
      }
    }
    
    onConversationList(callback: (data: any) => void) {
      console.log('Setting up onConversationList listener');
      this.on('chatConversationList', callback);
    }

    onChatHistory(callback: (data: any) => void) {
      if (this.socket) {
        this.socket.on('chatHistory', callback);
      }
    }

    markMessageAsSeen(messageId: string) {
      console.log('Marking message as seen:', messageId);
      if (this.socket) {
        this.socket.emit('markMessageAsSeen', { messageId });
      } else {
        console.error('Socket is not connected. Cannot mark message as seen.');
      }
    }

    markAllMessagesSeenForContact(contactId: string) {
      if (this.socket) {
        this.socket.emit('markAllMessagesSeenForContact', { contactId });
      } else {
        console.error('Socket is not connected. Cannot mark all messages as seen.');
      }
    }

    emit(event: string, data: any) {
      if (this.socket) {
        this.socket.emit(event, data);
      } else {
        console.error('Socket is not connected. Cannot emit event:', event);
      }
    }

    markAllMessagesSeen(contactId: string) {
      this.emit('markAllMessagesSeen', { contactId });
    }
  
    openChat(contactId: string) {
      this.emit('openChat', { contactId });
    }

    onMessageSeenUpdate(callback: (data: { messageId: string; is_seen: boolean }) => void) {
      this.on('messageSeenUpdate', callback);
    }
    
    on(event: string, callback: (data: any) => void) {
      if (!this.listeners[event]) {
        this.listeners[event] = [];
      }
      this.listeners[event].push(callback);

      if (this.socket) {
        this.socket.on(event, callback);
      }
    }

    off(event: string, callback: (data: any) => void) {
      if (this.listeners[event]) {
        this.listeners[event] = this.listeners[event].filter(cb => cb !== callback);
      }
      if (this.socket) {
        this.socket.off(event, callback);
      }
    }

    private reattachListeners() {
      Object.entries(this.listeners).forEach(([event, callbacks]) => {
        callbacks.forEach(callback => {
          if (this.socket) {
            this.socket.on(event, callback);
          }
        });
      });
    }
  }

  export const socketService = new SocketService();