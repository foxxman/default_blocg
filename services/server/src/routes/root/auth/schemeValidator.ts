import Joi from 'joi';
import { email, password, login } from './../../../services/auth/schemeValidator';
import { schemeValidator as httpSchemeValidator } from '../../../services/http/schemeValidator';

import {
    emailSchemaErrors,
    loginSchemaErrors,
    passwordRepeatSchemaErrors,
    passwordSchemaErrors,
} from '../../../const/errors';

export const signUp = httpSchemeValidator(Joi.object({
    email: email().required().messages(emailSchemaErrors),
    login: login().required().messages(loginSchemaErrors),
    password: password().required().messages(passwordSchemaErrors),
    passwordRepeat: password().required().messages(passwordRepeatSchemaErrors),    
}));

export const signIn = httpSchemeValidator(Joi.object({
    login: login().required().messages(loginSchemaErrors),
    password: password().required().messages(passwordSchemaErrors),
}));
