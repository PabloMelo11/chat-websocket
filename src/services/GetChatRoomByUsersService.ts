import { injectable } from 'tsyringe';
import { ObjectId } from 'mongodb';

import { ChatRoom } from '../schemas/chatRoom';

@injectable()
class GetChatRoomByUsersService {
  async execute(idUsers: ObjectId[]) {
    const users = await ChatRoom.findOne({
      idUsers: {
        $all: idUsers,
      },
    }).exec();

    return users;
  }
}

export { GetChatRoomByUsersService };
