import { Sequelize } from 'sequelize-typescript';
import dotenv from "dotenv";
import Chat from './models/chat.model';
import User from './models/user.model';
import Message from './models/message.model';
import UserChat from './models/user-chat.model';
import Token from './models/token.model';
import { logger } from '../config/logger';

dotenv.config();

const sequelize = new Sequelize({
  database: String(process.env.POSTGRES_DB),
  username: String(process.env.POSTGRES_USER),
  password: String(process.env.POSTGRES_PASSWORD),
  port: Number(process.env.POSTGRES_PORT),
  host: String(process.env.POSTGRES_HOST),
  dialect: 'postgres',
  models: [
    Chat,
    User,
    Message,
    UserChat,
    Token,
  ],
});

export default sequelize;