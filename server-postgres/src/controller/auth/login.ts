import { NextFunction, Request, Response } from 'express';
import { userDAO, User } from '../../model/user';
import jwt from '../../middleware/authentication/jwtHandler';

export const login = async (req: Request, res: Response) => {

        const token:any = await jwt.generateToken(req.body.email)
        console.log(token);

        res.json({token});

    }

