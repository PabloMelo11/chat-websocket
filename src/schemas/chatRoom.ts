import { v4 as uuid } from 'uuid';
import mongoose, { Document, Schema } from 'mongoose';
import { User } from './User';

type ChatRoom = Document & {
  id_users: User[];
  id_chat_room: string;
};

const ChatRoomSchema = new Schema({
  id_users: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  id_chat_room: { type: String, default: uuid() },
});

const ChatRoom = mongoose.model<ChatRoom>('chat_room', ChatRoomSchema);

export { ChatRoom };
