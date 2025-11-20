import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import { url } from "../../api";

export const useSocket = (token, options = {}) => {
  const [isConnected, setIsConnected] = useState(false);
  const [lastMessage, setLastMessage] = useState(null);
  const [typingUsers, setTypingUsers] = useState([]);
  const socketRef = useRef(null);

  useEffect(() => {
    if (!token) return;

    socketRef.current = io(url, {
      auth: { token },
      transports: ["websocket", "polling"],
    });

    socketRef.current.on("connect", () => {
      console.log("✅ Connected to server");
      setIsConnected(true);
      if (options.organizationId) {
        socketRef.current.emit("join-organization", options.organizationId);
      }
    });

    socketRef.current.on("disconnect", () => {
      console.log("❌ Disconnected from server");
      setIsConnected(false);
    });

    socketRef.current.on("new-message", (message) => {
      setLastMessage(message);
      if (options.onMessage) options.onMessage(message);
    });

    socketRef.current.on("user-typing", (data) => {
      setTypingUsers((prev) => {
        const filtered = prev.filter((user) => user.userId !== data.userId);
        return [...filtered, { ...data, timestamp: Date.now() }];
      });
    });

    socketRef.current.on("user-stop-typing", (data) => {
      setTypingUsers((prev) =>
        prev.filter((user) => user.userId !== data.userId)
      );
    });

    socketRef.current.on("user-joined-channel", (data) => {
      if (options.onUserJoined) options.onUserJoined(data);
    });

    socketRef.current.on("messages-read", (data) => {
      if (options.onMessagesRead) options.onMessagesRead(data);
    });

    socketRef.current.on("error", (error) => {
      if (options.onError) options.onError(error);
    });

    const typingCleanup = setInterval(() => {
      setTypingUsers((prev) =>
        prev.filter((user) => Date.now() - user.timestamp < 3000)
      );
    }, 3000);

    return () => {
      clearInterval(typingCleanup);
      if (socketRef.current) socketRef.current.disconnect();
    };
  }, [token, options]);

  const sendMessage = (messageData) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit("send-message", messageData);
    }
  };

  const startTyping = (data) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit("typing-start", data);
    }
  };

  const stopTyping = (data) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit("typing-stop", data);
    }
  };

  const joinChannel = (channelId) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit("join-channel", channelId);
    }
  };

  const leaveChannel = (channelId) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit("leave-channel", channelId);
    }
  };

  const markMessagesRead = (data) => {
    if (socketRef.current?.connected) {
      socketRef.current.emit("mark-messages-read", data);
    }
  };

  return {
    isConnected,
    lastMessage,
    typingUsers,
    sendMessage,
    startTyping,
    stopTyping,
    joinChannel,
    leaveChannel,
    markMessagesRead,
    socket: socketRef.current,
  };
};
