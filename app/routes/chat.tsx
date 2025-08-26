// app/routes/chat.tsx
import { ActionFunction, LoaderFunction, redirect } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Chat } from '~/components/Chat';
import { verifyToken } from '~/services/auth.server';
import { getSession } from '~/session.server';
import { connectToDatabase } from '~/services/db.server';
import { User } from '~/models/User';
import { Message } from '~/models/Message';

export const loader: LoaderFunction = async ({ request }) => {
  await connectToDatabase();
  const session = await getSession(request.headers.get('Cookie'));
  const token = session.get('token');

  if (!token) {
    return redirect('/login');
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return redirect('/login');
  }

  const user = await User.findById(decoded.userId);
  if (!user) {
    return redirect('/login');
  }

  // Get messages from MongoDB
  const messages = await Message.find()
    .sort({ timestamp: 1 }) // Oldest first
    .limit(50)
    .exec();

  return {
    messages: messages.map(msg => ({
      _id: msg._id.toString(),
      content: msg.content,
      sender: msg.sender,
      timestamp: msg.timestamp
    })),
    username: user.username
  };
};

export const action: ActionFunction = async ({ request }) => {
  await connectToDatabase();
  const session = await getSession(request.headers.get('Cookie'));
  const token = session.get('token');

  if (!token) {
    return redirect('/login');
  }

  const decoded = verifyToken(token);
  if (!decoded) {
    return redirect('/login');
  }

  const user = await User.findById(decoded.userId);
  if (!user) {
    return redirect('/login');
  }

  const formData = await request.formData();
  const messageContent = formData.get('message') as string;

  // Save message to MongoDB
  const newMessage = new Message({
    content: messageContent,
    sender: user.username
  });

  await newMessage.save();

  return { 
    newMessage: {
      _id: newMessage._id.toString(),
      content: newMessage.content,
      sender: newMessage.sender,
      timestamp: newMessage.timestamp
    }
  };
};

export default function ChatRoute() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="chat-page">
      <header className="chat-header">
        <h1>Chat App</h1>
        <form action="/logout" method="post">
          <button type="submit" className="logout-button">
            Logout
          </button>
        </form>
      </header>
      <Chat messages={data.messages} username={data.username} />
    </div>
  );
}