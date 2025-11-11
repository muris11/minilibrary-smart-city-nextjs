"use client";

import { Button } from "@/component/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/component/ui/card";
import { Input } from "@/component/ui/input";
import { ScrollArea } from "@/component/ui/scroll-area";
import { useEffect, useRef, useState } from "react";
import { io, Socket } from "socket.io-client";

type Message = {
  text: string;
  senderId: string;
  timestamp: string;
};

export default function SocketDemo() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [socket, setSocket] = useState<Socket | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const socketInstance = io({
      path: "/api/socketio",
    });

    socketRef.current = socketInstance;

    socketInstance.on("connect", () => {
      setIsConnected(true);
    });

    socketInstance.on("disconnect", () => {
      setIsConnected(false);
    });

    socketInstance.on("message", (msg: Message) => {
      setMessages((prev) => [...prev, msg]);
    });

    // Set socket state asynchronously to avoid cascading renders
    setTimeout(() => setSocket(socketInstance), 0);

    return () => {
      socketInstance.disconnect();
    };
  }, []);

  const sendMessage = () => {
    if (socket && inputMessage.trim()) {
      setMessages((prev) => [
        ...prev,
        {
          text: inputMessage.trim(),
          senderId: socket.id || "user",
          timestamp: new Date().toISOString(),
        },
      ]);
      socket.emit("message", {
        text: inputMessage.trim(),
        senderId: socket.id || "user",
        timestamp: new Date().toISOString(),
      });
      setInputMessage("");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      sendMessage();
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-2xl">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            WebSocket Demo
            <span
              className={`text-sm px-2 py-1 rounded ${
                isConnected
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {isConnected ? "Connected" : "Disconnected"}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <ScrollArea className="h-80 w-full border rounded-md p-4">
            <div className="space-y-2">
              {messages.length === 0 ? (
                <p className="text-gray-500 text-center">No messages yet</p>
              ) : (
                messages.map((msg, index) => (
                  <div key={index} className="border-b pb-2 last:border-b-0">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-700">
                          {msg.senderId}
                        </p>
                        <p className="text-gray-900">{msg.text}</p>
                      </div>
                      <span className="text-xs text-gray-500">
                        {new Date(msg.timestamp).toLocaleTimeString()}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>
          </ScrollArea>

          <div className="flex space-x-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message..."
              disabled={!isConnected}
              className="flex-1"
            />
            <Button
              onClick={sendMessage}
              disabled={!isConnected || !inputMessage.trim()}
            >
              Send
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
