import { injectable } from 'tsyringe';

import { ChatRoom } from '../schemas/chatRoom';

@injectable()
class CreateChatRoomService {
  async execute(idUsers: string[]) {
    const room = await ChatRoom.create({
      idUsers,
    });

    return room;
  }
}

export { CreateChatRoomService };
