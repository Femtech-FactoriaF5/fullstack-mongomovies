
import { Movie } from "../movie";
import UserDTO from "./dto";

export default class User implements UserDTO{
    constructor(
        public email: string,
        public password: string,
        public name: string,
        public id?: number,
        public movies?:Array<Movie>
        ) {};

}

