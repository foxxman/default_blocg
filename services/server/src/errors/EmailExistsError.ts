import { ErrorDetails } from './../../types/error/index';
import { ERROR_CODES, ERROR_MESSAGES } from "../const/errors";

interface EmailExistsErrorProps {
    field?: string,
    message?: string,
}

class EmailExistsError extends Error {
    details: ErrorDetails[] = []

    constructor({
        field = 'email',
        message = ERROR_MESSAGES.EMAIL_EXISTS
    }: EmailExistsErrorProps = {}) {
        super(message);
        this.details.push({
            code: ERROR_CODES.EMAIL_EXISTS,
            field,
            message,
        });
    }
}

export default EmailExistsError;