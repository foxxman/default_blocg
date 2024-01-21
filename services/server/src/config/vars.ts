import dotenv from 'dotenv';
import { parseBoolean } from '../utils/parsers/parseBoolean';
import { parseNumber } from '../utils/parsers/parseNumber';
import { parseString } from '../utils/parsers/parseString';

dotenv.config();

export const vars ={
    env: parseString(process.env.NODE_ENV, 'develop'),
    logs: process.env.NODE_ENV === 'production' ? 'combined' : 'dev',
    isLocal: parseBoolean(process.env.IS_LOCAL, false),
    port: parseNumber(process.env.PORT, 3002),
    http_port: parseNumber(process.env.HTTP_PORT, 3001),
};
