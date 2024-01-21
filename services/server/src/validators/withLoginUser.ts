import { Socket } from "socket.io"
import User from "../db/models/user.model"
import { NextFunction, Request, Response } from "express";

interface WithLoginUserData {
    login: string;
    loginUser?: User | null,
}

export const withLoginUserSocket = async (socket: Socket, data: WithLoginUserData) => {
    const user = await User.findOne({
        where: {
            login: data.login,
        }
    })

    data.loginUser = user || null;
}

export const withLoginUserHttp = async (req: Request, res: Response, next: NextFunction) => {
    const user = await User.findOne({
        where: {
            login: req.body.login,
        }
    })

    req.body.loginUser = user || null;
    
    next();
}