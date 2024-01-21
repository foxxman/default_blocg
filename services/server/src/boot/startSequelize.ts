import { logger } from '../config/logger';
import sequelize from '../db';

const startSequelize = () => {
    sequelize.sync()
    .then(() => {
        logger.info(`BootTasks:db:synced`);
    })
    .catch((error) => {
        logger.error('BootTasks:db:error')
        logger.error(error)
    });
}

export default startSequelize;