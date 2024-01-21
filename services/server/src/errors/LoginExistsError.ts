import { ErrorDetails } from "../../types/error";
import { ERROR_CODES, ERROR_MESSAGES } from "../const/errors";

interface LoginExistsErrorProps {
    field?: string,
    message?: string,
}

class LoginExistsError extends Error {
    details: ErrorDetails[] = []

    constructor({
        field = 'login',
        message = ERROR_MESSAGES.LOGIN_EXISTS
    }: LoginExistsErrorProps = {}) {
        super(message);
        this.details.push({
            code: ERROR_CODES.LOGIN_EXISTS,
            field,
            message,
        });
    }
}

export default LoginExistsError;