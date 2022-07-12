"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Movie {
    constructor(title, id, poster, synopsis, genres, year, director, actors) {
        this.title = title;
        this.id = id;
        this.poster = poster;
        this.synopsis = synopsis;
        this.genres = genres;
        this.year = year;
        this.director = director;
        this.actors = actors;
    }
    ;
}
exports.default = Movie;
