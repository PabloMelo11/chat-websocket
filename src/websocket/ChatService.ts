import { container } from 'tsyringe';

import { io } from '../http';

import { CreateUserService } from '../services/CreateUserService';

io.on('connect', (socket) => {
  socket.on('start', async (data) => {
    const { name, email, avatar } = data;

    const createUserService = container.resolve(CreateUserService);

    await createUserService.execute({
      name,
      email,
      avatar,
      socket_id: socket.id,
    });
  });
});
