export const LOGIN_MAX_LENGTH = 32;
export const LOGIN_MIN_LENGTH = 3;

export const EMAIL_MIN_LENGTH = 5;
export const EAMIL_MAX_LENGTH = 64;
export const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export const PASSWORD_MIN_LENGTH = 8;
export const PASSWORD_MAX_LENGTH = 32;
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;

export const HASHING_SALT_ROUNDS = 10;