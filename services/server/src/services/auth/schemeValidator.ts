import Joi from 'joi';
import {
    EMAIL_MIN_LENGTH,
    EAMIL_MAX_LENGTH,
    EMAIL_REGEX,
    PASSWORD_REGEX,
    LOGIN_MIN_LENGTH,
    LOGIN_MAX_LENGTH
} from '../../const/auth';

export const email = () =>
    Joi
    .string()
    .min(EMAIL_MIN_LENGTH)
    .max(EAMIL_MAX_LENGTH)
    .regex(EMAIL_REGEX);

export const password = () => 
    Joi
    .string()
    .regex(PASSWORD_REGEX);

export const login = () => 
    Joi
    .string()
    .min(LOGIN_MIN_LENGTH)
    .max(LOGIN_MAX_LENGTH);