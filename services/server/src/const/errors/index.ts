import {
    EAMIL_MAX_LENGTH,
    EMAIL_MIN_LENGTH,
    LOGIN_MAX_LENGTH,
    LOGIN_MIN_LENGTH,
} from "../auth";

export enum ERROR_CODES {
    EMAIL_EXISTS = 'EmailExistsError',
    LOGIN_EXISTS = 'LoginExistsError',
}

export enum ERROR_MESSAGES {
    EMAIL_EXISTS = 'Email already exists',
    LOGIN_EXISTS = 'Login already exists',
}

export const emailSchemaErrors = {
    'any.required': 'Email is required.',
    'string.min': `Email must be at least ${EMAIL_MIN_LENGTH} characters.`,
    'string.max': `Email must be at most ${EAMIL_MAX_LENGTH} characters.`,
    'string.pattern.base': 'Invalid email format.',
}

export const loginSchemaErrors = {
    'any.required': 'Login is required.',
    'string.min': `Login must be at least ${LOGIN_MIN_LENGTH} characters.`,
    'string.max': `Login must be at most ${LOGIN_MAX_LENGTH} characters.`,
}

export const passwordSchemaErrors = {
    'any.required': 'Password is required.',
    'string.pattern.base': 'Password should contain digit, capital and small letter and special symbol',
}

export const passwordRepeatSchemaErrors = {
    'any.required': 'Password repeat is required.',
    'string.pattern.base': 'Invalid password repeat format.',
}
