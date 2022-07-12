"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = exports.movieDAO = void 0;
var dao_1 = require("./dao");
Object.defineProperty(exports, "movieDAO", { enumerable: true, get: function () { return __importDefault(dao_1).default; } });
var model_1 = require("./model");
Object.defineProperty(exports, "Movie", { enumerable: true, get: function () { return __importDefault(model_1).default; } });
