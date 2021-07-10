import { injectable } from 'tsyringe';

import { User } from '../schemas/User';

type CreateUserDTO = {
  name: string;
  email: string;
  avatar: string;
  socket_id: string;
};

@injectable()
class CreateUserService {
  async execute({ avatar, email, name, socket_id }: CreateUserDTO) {
    const user_already_exists = await User.findOne({ email }).exec();

    if (user_already_exists) {
      const user = await User.findOneAndUpdate(
        {
          _id: user_already_exists._id,
        },
        {
          $set: { socket_id, avatar, name },
        },
        {
          new: true,
        }
      );

      return user;
    }

    const user = await User.create({
      name,
      email,
      avatar,
      socket_id,
    });

    return user;
  }
}

export { CreateUserService };
