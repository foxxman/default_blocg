import { logger } from './config/logger';
import { runBootTasks } from './boot';

async function start() {
    await runBootTasks();
}

start().catch((e) => {
    logger.error(e.message);
    process.exit();
});
