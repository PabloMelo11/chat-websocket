import path from 'path';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);

app.use(express.static(path.join(__dirname, '..', 'public')));

const io = new Server(server);

io.on('connection', (socket) => {
  console.log('socket', socket);
});

app.get('/', (request, response) => {
  return response.json({ ok: true });
});

server.listen(3333, () => console.log('Server is running'));
