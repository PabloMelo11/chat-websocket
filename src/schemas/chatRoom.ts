import { v4 as uuid } from 'uuid';
import mongoose, { Document, Schema } from 'mongoose';
import { User } from './User';

type ChatRoom = Document & {
  idUsers: User[];
  idChatRoom: string;
};

const ChatRoomSchema = new Schema({
  idUsers: [{ type: Schema.Types.ObjectId, ref: 'users' }],
  idChatRoom: { type: String, default: uuid },
});

const ChatRoom = mongoose.model<ChatRoom>('chat_room', ChatRoomSchema);

export { ChatRoom };
