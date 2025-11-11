import { useState, useCallback, useRef } from "react";

interface UseMessageLimiterOptions {
  maxLength: number;
  cooldownPeriod: number;
}

interface UseMessageLimiterReturn {
  message: string;
  setMessage: (message: string) => void;
  canSendMessage: boolean;
  sendMessage: () => void;
  error: string | null;
}

export const useMessageLimiter = ({
  maxLength = 128,
  cooldownPeriod = 2000,
}: UseMessageLimiterOptions): UseMessageLimiterReturn => {
  const [message, setMessage] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const lastMessageTimestamp = useRef<number>(0);

  const canSendMessage = useCallback(() => {
    const now = Date.now();
    return now - lastMessageTimestamp.current >= cooldownPeriod;
  }, [cooldownPeriod]);

  const setMessageWithLimit = useCallback(
    (newMessage: string) => {
      if (newMessage.length <= maxLength) {
        setMessage(newMessage);
        setError(null);
      } else {
        setError(`Pesan terlalu panjang. Maksimal ${maxLength} karakter.`);
      }
    },
    [maxLength],
  );

  const sendMessage = useCallback(() => {
    if (message.trim().length === 0) {
      setError("Pesan tidak boleh kosong");
      return;
    }

    if (message.length > maxLength) {
      setError(`Pesan terlalu panjang. Maksimal ${maxLength} karakter.`);
      return;
    }

    if (!canSendMessage()) {
      setError(`Mohon tunggu sebentar sebelum mengirim pesan berikutnya.`);
      return;
    }

    // Here you would typically send the message
    // For this example, we'll just update the timestamp
    lastMessageTimestamp.current = Date.now();
    setMessage("");
    setError(null);
  }, [message, maxLength, canSendMessage]);

  return {
    message,
    setMessage: setMessageWithLimit,
    canSendMessage: canSendMessage(),
    sendMessage,
    error,
  };
};
