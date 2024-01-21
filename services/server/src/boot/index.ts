import { logger } from '../config/logger';
import { startHttp } from './startHttp';
import startSequelize from './startSequelize';
import { startSocket } from './startSocket';

export const runBootTasks = async () => {
    logger.info('BootTasks:running:start');
    
    startSequelize();

    startSocket();

    await startHttp();
    
    logger.info('BootTasks:running:complete');
};
