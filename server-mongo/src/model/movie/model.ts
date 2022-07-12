import MovieDTO from "./dto";

export default class Movie implements MovieDTO{
    constructor(

            public title: string,
            public id?: number,
            public poster?: string,
            public synopsis?: string,
            public genres?: Array<string>,
            public year?: number,
            public director?: string,
            public actors?: Array<string>

        ) {};

}

