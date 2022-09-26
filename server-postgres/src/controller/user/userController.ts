import { NextFunction, Request, Response } from 'express';
import { userDAO, User } from '../../model/user';
import jwt from '../../middleware/authentication/jwtHandler';
import createHttpError from 'http-errors';

export const userController = {
    saveUser: async (req: Request, res: Response) => {

        try {
            const { email, password, ...user } = req.body as User;


            if (!email || !password) {
                res.status(400).send('email or password missing');
            } else {
                const result = await userDAO.saveUser({ email, password, ...user });
                console.log(result);
                result
                    ? res.status(201).json({ userId: result.id.toString() })
                    : res.status(500).send("Failed to create a new user.");
            }
        } catch (error: any) {

            res.status(400).send(error.message);
        }
    },
    getAllUsers: async (req: Request, res: Response, next:NextFunction) => {
        try {
            const result = await userDAO.getUsers();

            result
                ? res.json(result)
                : next(createHttpError(400,"Failed to get data."));

        } catch (error: any) {

            next(error);
            // res.status(400).send(error.message);
        }
    }

}