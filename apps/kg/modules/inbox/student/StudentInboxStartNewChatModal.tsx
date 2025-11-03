import React, { useCallback, useEffect, useState, useMemo } from 'react'
import Avatar from 'react-avatar';
import Image from 'next/image';
import { Dialog } from "@headlessui/react";
import useDebounce from '../hooks/useDebounce';

type Contact = {
  id: string;
  full_name: string;
  avatar?: string;
  join_since: string;
  subjects: Array<{ name: string, is_classmate: boolean }>;
};

type SocketType = {
  isConnected: (arg0: any) => boolean;
  emit: (event: string, data: any, endpoint: any) => void;
  on: (event: string, callback: (response: any) => void, endpoint: any) => void;
  off: (event: string, callback: (response: any) => void, endpoint: any) => void;
};

interface StudentInboxStartNewChatModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  setOpenedUser: React.Dispatch<React.SetStateAction<any | null>>;
  socket: SocketType;
}

const SearchInput: React.FC<{
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  setSelectedContact: (contact: Contact | null) => void;
  setIsLoading: (isLoading: boolean) => void;
  setFilteredContacts: (contacts: Contact[]) => void;
}> = ({ searchTerm, setSearchTerm, setSelectedContact, setIsLoading, setFilteredContacts }) => (
  <div className="relative mb-4">
    <input 
      type="text" 
      value={searchTerm}
      onChange={(e) => {
        setSelectedContact(null);
        setSearchTerm(e.target.value);
        setFilteredContacts([]);
        e.target.value.length > 2 && setIsLoading(true);
      }}
      className="w-full rounded-md border border-gray-300 bg-gradient-to-r from-gray-50 to-white py-2 pl-10 pr-10 text-sm transition duration-150 ease-in-out focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500" 
      placeholder="Ketik nama teman kamu di sini ..."
    />
    <svg className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
    </svg>
    {searchTerm && (
      <button
        onClick={() => {
          setSearchTerm('');
          setSelectedContact(null);
          setFilteredContacts([]);
        }}
        className="absolute right-3 top-1/2 transform -translate-y-1/2"
        aria-label="Clear Pencarian"
      >
        <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      </button>
    )}
  </div>
);

const ContactList: React.FC<{
  filteredContacts: Contact[];
  selectedContact: Contact | null;
  setSelectedContact: (contact: Contact | null) => void;
}> = ({ filteredContacts, selectedContact, setSelectedContact }) => (
  <>
    {filteredContacts.map(contact => (
      <label 
        key={contact.id}
        className={`flex gap-3 items-center p-3 cursor-pointer ${
          selectedContact?.id === contact.id
            ? 'bg-blue-100 hover:bg-blue-200' 
            : 'hover:bg-gray-100'
        }`}
      >
        <div className="bg-neutral-100 flex items-center justify-center overflow-hidden rounded-md h-10 w-10 cursor-pointer group">
          {contact?.avatar ? (
            <div className="relative h-10 w-10">
              <Image
                src={contact.avatar}
                alt={contact.full_name}
                layout="fill"
                className="bg-white"
              />
            </div>
          ) : (
            <Avatar 
              name={contact.full_name}
              size="40"
              round={false}
              className="h-full w-full"
            />
          )}
        </div>
        <div className="flex justify-between items-center w-full">
          <div>
            <div className="font-medium capitalize">{contact.full_name}</div>
            <div className="text-sm text-gray-600">Pelajar sejak {contact.join_since}</div>
          </div>
          <input
            type="radio"
            name="contact"
            value={contact.id}
            checked={selectedContact?.id === contact.id}
            onChange={() => setSelectedContact(contact)}
            className="form-radio h-4 w-4 text-blue-600 mr-3"
          />
        </div>
      </label>
    ))}
  </>
);

const StudentInboxStartNewChatModal: React.FC<StudentInboxStartNewChatModalProps> = ({
  isOpen,
  setIsOpen,
  setOpenedUser,
  socket
}) => {
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [filteredContacts, setFilteredContacts] = useState<Contact[]>([]);
  const [error, setError] = useState<string | null>(null);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const handleCloseModal = useCallback(() => {
    setIsOpen(false);
    setSearchTerm('');
    setSelectedContact(null);
    setIsLoading(false);
    setError(null);
  }, [setIsOpen]);

  const handleStartChat = useCallback(() => {
    if (selectedContact?.id) {
      setOpenedUser(selectedContact);
      handleCloseModal();
    }
  }, [selectedContact, setOpenedUser, handleCloseModal]);

  const getStudents = useCallback((query: string) => {
    if (!isOpen || !query || query.length < 3 || !socket) {
      setFilteredContacts([]);
      setIsLoading(false);
      setError(null);
      return;
    }
  
    if (!socket.isConnected('inbox')) {
      setResponseMessage("Koneksi terputus, silahkan coba lagi.");
      setIsLoading(false);
      setError("Koneksi terputus");
      return;
    }
  
    setIsLoading(true);
    setResponseMessage("");
    setError(null);
    socket.emit('v1_get_students', { search: query }, 'inbox');
  }, [isOpen, socket]);
  
  useEffect(() => {
    if (isOpen && debouncedSearchTerm && debouncedSearchTerm.length >= 3) {
      getStudents(debouncedSearchTerm);
    } else {
      setIsLoading(false);
      setFilteredContacts([]);
      setResponseMessage("");
      setError(null);
    }
  }, [debouncedSearchTerm, getStudents, isOpen]);

  useEffect(() => {
    if (isOpen) {
      const handleChatListResponse = (response: any) => {
        if (response.code === 200) {
          setFilteredContacts(response.data.students);
          setResponseMessage(response.data.students.length === 0 ? response.message : "");
          setError(null);
        } else {
          setResponseMessage(response.message || "Sepertinya terjadi kesalahan");
          setFilteredContacts([]);
          setError(response.message || "Terjadi kesalahan saat mengambil data pelajar");
        }
        setIsLoading(false);
      };

      const handleChatListError = (errorResponse: any) => {
        console.error('Error in v1_get_students:', errorResponse);
        setResponseMessage("Terjadi kesalahan saat mengambil data pelajar");
        setFilteredContacts([]);
        setError(errorResponse || "Terjadi kesalahan tidak terduga");
        setIsLoading(false);
      };

      socket.on('v1_get_students_response', handleChatListResponse, 'inbox');
      socket.on('v1_get_students_error', handleChatListError, 'inbox');

      return () => {
        socket.off('v1_get_students_response', handleChatListResponse, 'inbox');
        socket.off('v1_get_students_error', handleChatListError, 'inbox');
      };
    }
  }, [isOpen, socket]);

  const modalContent = useMemo(() => (
    <>
      <Dialog.Title className="text-lg font-medium leading-6 text-gray-900 mb-4 pb-4 border-b-2 border-b-slate-200">
        Mulai Chat Baru
      </Dialog.Title>
      <p className="text-md text-gray-800 mb-4">
        Ketik nama teman sesama studi kamu dan pencarian akan menampilkan maksimal 5 pelajar dengan kata kunci yang kamu masukkan.
      </p>
      <SearchInput
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        setSelectedContact={setSelectedContact}
        setIsLoading={setIsLoading}
        setFilteredContacts={setFilteredContacts}
      />
      <div className="flex flex-col max-h-96 mb-4">
        <div className={`${filteredContacts.length > 0 && "h-[15rem]"} rounded-md border scroll-smooth overflow-y-auto`}>
          {isLoading ? (
            <div className="flex justify-center items-center py-8">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
            </div>
          ) : searchTerm.length < 3 ? (
            <div className="text-center text-gray-800 py-10">Ketik minimal 3 karakter untuk mencari</div>
          ) : error ? (
            <div className="text-center text-red-500 py-10">{error}</div>
          ) : responseMessage ? (
            <div className="text-center text-gray-500 py-10">{responseMessage}</div>
          ) : filteredContacts.length > 0 ? (
            <ContactList
              filteredContacts={filteredContacts}
              selectedContact={selectedContact}
              setSelectedContact={setSelectedContact}
            />
          ) : null}
        </div>
      </div>
      {selectedContact && (
        <div className="my-4 p-4 bg-slate-100 rounded-lg border border-slate-500">
          <h4 className="font-medium mb-2">Perbandingan Studi kamu dengan Studi <span className="capitalize">{selectedContact.full_name}</span>:</h4>
          {selectedContact.subjects.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {selectedContact.subjects.map((subject, index) => (
                subject.is_classmate ? (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded border border-blue-200">
                    {subject.name}
                  </span>
                ) : (
                  <span key={index} className="bg-red-100 text-gray-800 text-xs font-medium px-2.5 py-1 rounded border border-red-400">
                    {subject.name}
                  </span>
                )
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-600">Tidak ada Studi yang sama.</p>
          )}
        </div>
      )}
      <div className="flex justify-end space-x-2 border-t-2 pt-4">
        <button 
          className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          onClick={handleCloseModal}
        >
          Batal
        </button>
        <button 
          className={`px-4 py-2 rounded-lg transition-colors ${
            selectedContact?.id
              ? 'bg-blue-500 text-white hover:bg-blue-600'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          onClick={handleStartChat}
          disabled={!selectedContact?.id}
        >
          Mulai Chat
        </button>
      </div>
    </>
  ), [searchTerm, filteredContacts, isLoading, responseMessage, selectedContact, error, handleCloseModal, handleStartChat]);

  return (
    <Dialog 
      open={isOpen} 
      onClose={handleCloseModal}
      className="fixed inset-0 z-[99] overflow-y-auto"
    >
      <div className="flex items-center justify-center min-h-screen px-4 text-center">
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <div className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          {modalContent}
        </div>
      </div>
    </Dialog>
  );
};

export default StudentInboxStartNewChatModal;