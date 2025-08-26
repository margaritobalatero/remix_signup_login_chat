// app/models/Message.ts
import mongoose from 'mongoose';

export interface IMessage extends mongoose.Document {
  content: string;
  sender: string;
  timestamp: Date;
}

const messageSchema = new mongoose.Schema({
  content: {
    type: String,
    required: true,
    trim: true
  },
  sender: {
    type: String,
    required: true,
    trim: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  }
});

export const Message = mongoose.models.Message || mongoose.model<IMessage>('Message', messageSchema);