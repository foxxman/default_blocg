import bcrypt from 'bcryptjs';
import User from "../../db/models/user.model";
import { HASHING_SALT_ROUNDS } from "../../const/auth";
import { Request, Response } from 'express';


const signUp = async (req: Request, res: Response): Promise<void> => {
    const {email, login, password} = req.body;
    
    const hashedPassword = await bcrypt.hash(password, HASHING_SALT_ROUNDS);
    const newUser = User.build();

    newUser.login = login;
    newUser.email = email;
    newUser.password = hashedPassword;

    const savedUser = await newUser.save();
    
    res.send(savedUser.toDTO())
};

export default signUp;