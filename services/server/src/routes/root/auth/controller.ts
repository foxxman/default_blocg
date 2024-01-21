import { Request, Response } from 'express';
import authService from '../../../services/auth';

export const signUp = async (req: Request, res: Response): Promise<void> => {
    await authService.signUp(req, res);
}

// export const signIn: IRouteFn<SignInData, any> = async (socket, data) => authService.signIn({socket, data});
