import { ServicesProps, SignInData } from "../../../types";
import { logger } from "../../config/logger";

const signIn = async ({ socket, data }: ServicesProps<SignInData>) => {
    logger.info('sign in from: ' + data.email)
};

export default signIn