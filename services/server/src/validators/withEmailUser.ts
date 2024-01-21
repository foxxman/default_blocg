import { ROUTER_TYPE } from './../const/validation/index';
import { Socket } from "socket.io"
import User from "../db/models/user.model"
import { NextFunction, Request, Response } from 'express';

interface WithEmailUserData {
    email: string;
    emailUser?: User | null,
}

export const withEmailUserSocket = async (socket: Socket, data: WithEmailUserData) => {
    const user = await User.findOne({
        where: {
            email: data.email,
        }
    })

    data.emailUser = user || null;
}

export const withEmailUserHttp = async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({
        where: {
            email: req.body.email,
        }
    })

    req.body.emailUser = user || null;
    next();
}
