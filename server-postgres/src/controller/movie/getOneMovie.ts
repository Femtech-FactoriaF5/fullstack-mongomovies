import { NextFunction, Request, Response} from "express";
import createHttpError from "http-errors";
import {Movie} from "../../model/movie";
import {movieDAO} from '../../model/movie';

const getOneMovie = async (req:Request,res:Response, next:NextFunction)=>{


    try {
            const {id} =req.params;
            if(!id){
                next(createHttpError(400,'No film selected'));
            }else {
            const result = await movieDAO.getOneMovie(+id);

            result
                ? res.status(201).json(result)
                : next(createHttpError(400,'Nothing to Show'));}

    } catch (error: any) {

        next(error);
        // res.status(400).send(error.message);
    }
}

export default getOneMovie;