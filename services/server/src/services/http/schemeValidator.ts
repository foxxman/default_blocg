import { NextFunction, Request, Response } from 'express';
import { Schema } from 'joi';

export const schemeValidator = (scheme: Schema) => (
    async (req: Request, res: Response, next: NextFunction) => {
        const result = scheme.validate(req.body);

        if (result.error) {
            const details = result.error.details[0];
            
            const error = {
                message: details.message, 
                field: details.path.pop()
            }

            return res.status(401).json(error);
        }
        
        next();
    }

);
