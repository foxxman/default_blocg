import { Server } from 'socket.io';

import { auth } from '../services/socket/auth';
import { onConnection } from '../services/socket/onConnection';

const socketConfig = {
    pingInterval: 10000,
    pingTimeout: 10000,
    cors: {
        origin: process.env.CLIENT_ORIGIN
    }
};

const socket = new Server(socketConfig);

socket.use(auth);

socket.on('connection', onConnection);

export default socket;
