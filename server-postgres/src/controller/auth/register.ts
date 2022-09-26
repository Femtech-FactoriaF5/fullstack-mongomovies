import { NextFunction, Request, Response } from 'express';
import createHttpError from 'http-errors';
import { userDAO, User } from '../../model/user';

export const register = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const { email, password, ...user } = req.body as User;
        if (!email || !password) {
            next(createHttpError(400, "email or password missing"));
        } else {
            const result = await userDAO.saveUser({ email, password, ...user });

            result
                ? res.status(201).json({ userId: result.id })
                : next(createHttpError(400, "Failed to create a new user."));
        }
    } catch (error: any) {

        next(error);
    }
}
