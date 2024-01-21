import { vars } from '../config/vars';
import socket from '../config/socket';
import { logger } from '../config/logger';

export const startSocket = () => {
    logger.info('socket:running:start');
    socket.listen(vars.port);
    logger.info(`socket:running:complete; started on port: ${vars.port}`);
};
