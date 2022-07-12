"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_1 = require("../model/movie");
const movieController = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield movie_1.movieDAO.getMovies();
        result
            ? res.status(201).json(result)
            : res.status(500).send("Failed to create a new user.");
    }
    catch (error) {
        next(error);
        // res.status(400).send(error.message);
    }
});
exports.default = movieController;
