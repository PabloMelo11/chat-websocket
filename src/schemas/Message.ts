import mongoose, { Document, Schema } from 'mongoose';

type Message = Document & {
  to: string;
  text: string;
  room_id: string;
  created_at: Date;
};

const MessageSchema = new Schema({
  to: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  text: String,
  room_id: {
    type: String,
    ref: 'chat_room',
  },
  created_at: {
    type: Date,
    default: Date.now(),
  },
});

const Message = mongoose.model<Message>('messages', MessageSchema);

export { Message };
