import { injectable } from 'tsyringe';
import { ObjectId } from 'mongodb';

import { ChatRoom } from '../schemas/chatRoom';

@injectable()
class GetChatRoomByUsersService {
  async execute(id_users: ObjectId[]) {
    const users = await ChatRoom.findOne({
      id_users: {
        $all: id_users,
      },
    }).exec();

    return users;
  }
}

export { GetChatRoomByUsersService };
