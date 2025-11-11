'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import { socketService } from '@kampus-gratis/apps/kg/config/socket.service';
import { useSession } from 'next-auth/react';
import React, { useCallback, useEffect, useState } from 'react';

import Image from 'next/image';
import Avatar from 'react-avatar';
import StudentInboxChatList from './StudentInboxChatList';
import StudentInboxChatWindow from './StudentInboxChatWindow';
import StudentInboxStartNewChatModal from './StudentInboxStartNewChatModal';

import { Contact, Conversation } from './types';

const StudentInboxModule: React.FC = () => {
  // const [accessToken, setAccessToken] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [openedUser, setOpenedUser] = useState<Contact | null>(null);

  const [isSocketConnected, setIsSocketConnected] = useState<boolean>(false);
  const [isModalStartNewChatOpen, setIsModalStartNewChatOpen] =
    useState<boolean>(false);
  const [isLoadingChat, setIsLoadingChat] = useState<boolean>(false);

  const [retryCount, setRetryCount] = useState<number>(0);

  const { data: session, status } = useSession();

  // New useEffect to check socket connection
  useEffect(() => {
    const checkConnection = () => {
      const connected = socketService.isConnected('inbox');
      setIsSocketConnected(connected);

      if (!connected && retryCount < 5) {
        setRetryCount((prevCount) => prevCount + 1);
        setTimeout(checkConnection, 3000); // Retry after 3 seconds
      }
    };

    checkConnection();

    // Cleanup function
    return () => {
      // If you need to do any cleanup when the component unmounts
    };
  }, [retryCount]);

  // Existing socket disconnect handler
  socketService.onDisconnect(() => {
    setIsSocketConnected(false);
  }, 'inbox');

  // useEffect(() => {
  //   if (status === 'authenticated' && session?.user?.token?.access_token) {
  //     setAccessToken(session.user.token.access_token as string);
  //   }
  // }, [status, session]);

  // const connectSocket = useCallback(() => {
  //   if (accessToken && !socketService.isConnected()) {
  //     console.log('Connecting to socket server...');
  //     socketService.connect(accessToken);
  //     setTimeout(() => {
  //       const isConnected = socketService.isConnected();
  //       setIsSocketConnected(isConnected);
  //       if (!isConnected) {
  //         console.log('Connection failed. Retrying in 3 seconds...');
  //         setRetryCount(prevCount => prevCount + 1);
  //       } else {
  //         setRetryCount(0);
  //       }
  //     }, 1000);
  //   } else if (socketService.isConnected()) {
  //     setIsSocketConnected(true);
  //     setRetryCount(0);
  //   }
  // }, [accessToken]);

  // const retryConnection = useCallback(() => {
  //   if (retryCount < 5) {  // Limit to 5 retry attempts
  //     setTimeout(() => {
  //       console.log(`Retry attempt ${retryCount + 1}`);
  //       connectSocket();
  //     }, 3000);
  //   } else {
  //     console.log('Max retry attempts reached. Please try again later.');
  //     // You might want to show an error message to the user here
  //   }
  // }, [retryCount, connectSocket]);

  // useEffect(() => {
  //   if (accessToken) connectSocket();
  // }, [accessToken, connectSocket]);

  // useEffect(() => {
  //   if (!isSocketConnected) {
  //     retryConnection();
  //   } else {
  //     console.log('Socket connected!');
  //   }
  // }, [isSocketConnected, retryConnection]);

  // useEffect(() => {
  //   if(socketService.isConnected()) {
  //     setIsSocketConnected(true);
  //   }
  // }, [socketService.isConnected()]);

  const handleSelectConversation = (conversation: Conversation) => {
    setOpenedUser({
      id: conversation.id,
      full_name: conversation.full_name,
      avatar: conversation.avatar,
      status: conversation.status,
      join_since: conversation.join_since,
    });
  };

  const onBack = () => {
    setOpenedUser(null);
  };

  // on disconnect
  socketService.onDisconnect(() => {
    setIsSocketConnected(false);
  }, 'inbox');

  useEffect(() => {
    const capitalize = (str: string) =>
      str
        .split(' ')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
    const defaultTitle = 'Inbox & Chat | Paket-C Gratis'; // Set your default title here

    if (openedUser) {
      document.title = `Chat ${capitalize(
        openedUser.full_name.trim()
      )} - Inbox & Chat | Paket-C Gratis`;
    } else {
      document.title = defaultTitle;
    }

    if (typeof window !== 'undefined' && session?.user?.id && openedUser) {
      window.gtag('config', 'G-YWYY60L1FX', {
        page_title: `Chat ${capitalize(
          openedUser.full_name.trim()
        )} - Inbox & Chat | Paket-C Gratis`,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    } else {
      window.gtag('config', 'G-YWYY60L1FX', {
        page_title: defaultTitle,
        page_location: window.location.href,
        page_path: window.location.pathname,
      });
    }

    // Cleanup function to reset the title when component unmounts
    return () => {
      document.title = defaultTitle;
    };
  }, [openedUser]);

  if (
    !isSocketConnected &&
    retryCount < 5 &&
    status === 'authenticated' &&
    !socketService.isConnected('inbox')
  ) {
    return (
      <BaseLayout>
        <div className="flex flex-col items-center justify-center h-[calc(100vh-186px)]">
          <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          <p className="mt-4 text-lg font-medium text-gray-900">
            Sedang menghubungkan ke jaringan
          </p>
          <p className="mt-2 text-sm text-gray-500">Harap tunggu ...</p>
        </div>
      </BaseLayout>
    );
  }

  return (
    <BaseLayout>
      <div className="mx-auto my-4 w-full max-w-[1440px] h-[calc(100vh-186px)] overflow-hidden sm:h-[calc(100vh-174px)]">
        <div className="h-full rounded-lg border border-gray-200 bg-white shadow-lg flex flex-col lg:flex-row">
          <div
            className={`${
              !openedUser ? 'block' : 'hidden'
            } lg:block lg:w-4/12 h-full`}
          >
            <div className="flex flex-col h-full border-r border-gray-200">
              <div className="sticky top-0 bg-white px-4 py-3 pb-0 z-10">
                <h3 className="text-lg font-medium text-gray-900 flex items-center justify-between">
                  <span>Inbox & Chat</span>
                  <button
                    className="inline-flex items-center justify-center bg-gray-100 text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 rounded-full w-8 h-8 hover:bg-gray-200"
                    aria-label="New chat"
                    onClick={() => setIsModalStartNewChatOpen(true)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5v14"></path>
                    </svg>
                  </button>
                </h3>
              </div>
              <StudentInboxChatList
                onSelectConversation={handleSelectConversation}
                socketService={socketService}
                selectedUserId={openedUser?.id}
              />
            </div>
          </div>
          <div
            className={`${
              openedUser || isLoadingChat ? 'block' : 'hidden'
            } lg:block lg:w-8/12 xl:w-3/4 h-full`}
          >
            {openedUser ? (
              <div className="flex h-full flex-col">
                {/* Chat Header */}
                <div className="border-b border-gray-200 px-4 py-3 flex items-center space-x-3">
                  <button
                    onClick={onBack}
                    className="text-gray-600 hover:text-gray-800"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      />
                    </svg>
                  </button>
                  <div className="bg-neutral-100 flex items-center justify-center overflow-hidden rounded-md h-10 w-10 relative">
                    {openedUser?.avatar ? (
                      <Image
                        src={openedUser.avatar}
                        alt={openedUser.full_name}
                        width={40}
                        height={40}
                        className="bg-white h-10 w-10 flex text-neutral-600 items-center justify-center font-[700] bg-center"
                      />
                    ) : (
                      <Avatar
                        name={openedUser.full_name}
                        size="40"
                        round={false}
                      />
                    )}
                    <div
                      className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white ${
                        openedUser.status === 'ONLINE'
                          ? 'bg-green-500'
                          : 'bg-gray-400'
                      }`}
                    ></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">
                      {openedUser.full_name}
                    </h3>
                    <p className="text-sm text-gray-500 truncate">
                      {openedUser.status === 'ONLINE' ? 'Online' : 'Offline'} •
                      Bergabung Sejak {openedUser.join_since}
                    </p>
                  </div>
                </div>

                {/* Chat Window */}
                <StudentInboxChatWindow
                  receiverId={openedUser.id}
                  onBack={onBack}
                  socketService={socketService}
                />
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center bg-gray-50 h-full">
                <div className="text-center">
                  <svg
                    className="mx-auto h-12 w-12 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                    />
                  </svg>
                  <h2 className="mt-2 text-lg font-medium text-gray-900">
                    Tidak ada percakapan yang dipilih
                  </h2>
                  <p className="mt-1 text-sm text-gray-500">
                    Pilih percakapan untuk melihat pesan
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <StudentInboxStartNewChatModal
        isOpen={isModalStartNewChatOpen}
        setIsOpen={setIsModalStartNewChatOpen}
        setOpenedUser={setOpenedUser}
        socket={socketService}
      />
    </BaseLayout>
  );
};

export default StudentInboxModule;
