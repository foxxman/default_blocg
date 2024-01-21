import { logger } from "../config/logger";
import { vars } from "../config/vars";
import http from "../services/http";

export const startHttp = async () => {
    logger.info('http:running:start');
    console.log(vars.http_port);
    
    try {
        http.listen(vars.http_port, () => {
            logger.info(`http:running:complete; started on port: ${vars.http_port}`);
        });
    } catch (e: any) {
        logger.info(`http:running:error`);
        logger.error(e);
    }
};
