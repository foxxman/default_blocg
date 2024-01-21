import { Socket } from 'socket.io';
import { rootRouter } from '../../routes';
import { logger } from '../../config/logger';

export const onConnection = (socket: Socket) => {
    logger.info(`socket:connected; ${socket.id}`);
    rootRouter.subscribe(socket);
};
