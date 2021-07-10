import { injectable } from 'tsyringe';

import { ChatRoom } from '../schemas/chatRoom';

@injectable()
class CreateChatRoomService {
  async execute(id_users: string[]) {
    const room = await ChatRoom.create({
      id_users,
    });
  }
}

export { CreateChatRoomService };
