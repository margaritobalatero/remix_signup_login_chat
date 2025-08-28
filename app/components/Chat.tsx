import { Form, useFetcher } from '@remix-run/react';
import { useState, useEffect, useRef } from 'react';

interface Message {
  _id: string;
  content: string;
  sender: string;
  timestamp: Date;
}

interface ChatProps {
  messages: Message[];
  username: string;
}

export function Chat({ messages: initialMessages, username }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const fetcher = useFetcher();
  const messageEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (fetcher.data?.newMessage) {
      setMessages(prev => [...prev, fetcher.data.newMessage]);
    }
  }, [fetcher.data]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat Room</h2>
        <span>Welcome, {username}!</span>
      </div>

      <div className="messages-container">
        {messages.map((message) => (
          <div
            key={message._id}
            className={`message ${message.sender === username ? 'own-message' : 'other-message'}`}
          >
            <div className="message-sender">{message.sender}</div>
            <div className="message-content">{message.content}</div>
            <div className="message-time">
              {new Date(message.timestamp).toLocaleTimeString()}
            </div>
          </div>
        ))}
        <div ref={messageEndRef} />
      </div>

      <fetcher.Form method="post" className="message-form">
        <input
          type="text"
          name="message"
          placeholder="Type your message..."
          required
          className="message-input"
        />
        <button type="submit" className="send-button">
          Send
        </button>
      </fetcher.Form>
    </div>
  );
  
}