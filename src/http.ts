import 'reflect-metadata';
import path from 'path';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import mongoose from 'mongoose';

const app = express();
const server = createServer(app);

mongoose.connect('mongodb://localhost:27017/rocketsocket', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.static(path.join(__dirname, '..', 'public')));

const io = new Server(server);

io.on('connection', (socket) => {});

app.get('/', (request, response) => {
  return response.json({ ok: true });
});

export { server, io };
