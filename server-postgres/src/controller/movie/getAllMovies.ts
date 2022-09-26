import { NextFunction, Request, Response} from "express";
import createHttpError from "http-errors";
import {Movie} from "../../model/movie";
import {movieDAO} from '../../model/movie';

const getAllMovies = async (req:Request,res:Response, next:NextFunction)=>{


    try {
            const result = await movieDAO.getMovies();

            result
                ? res.status(201).json(result)
                : next(createHttpError(400,'Nothing to Show'));

    } catch (error: any) {

        next(error);
        // res.status(400).send(error.message);
    }
}

export default getAllMovies;