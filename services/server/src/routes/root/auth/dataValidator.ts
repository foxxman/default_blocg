import EmailExistsError from "../../../errors/EmailExistsError";
import LoginExistsError from "../../../errors/LoginExistsError";
import { NextFunction, Request, Response } from "express";

export const signUp = 
    (req: Request, res: Response, next: NextFunction) => {
        const { emailUser, loginUser } = req.body;
        
        if (emailUser) {
            return res.status(401).send(new EmailExistsError());
        }

        if (loginUser) {
            return res.status(401).send(new LoginExistsError());
        }

        next();
    }