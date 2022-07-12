import { ObjectId } from "mongodb";
import { Movie } from "../movie";
import UserDTO from "./dto";

export default class User implements UserDTO{
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public id?: ObjectId,
        public movies?:Array<Movie>
        ) {};

}

