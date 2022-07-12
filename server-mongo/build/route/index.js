"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorRoute = exports.authRoute = exports.userRoute = exports.movieRoute = void 0;
var movieRoute_1 = require("./movieRoute");
Object.defineProperty(exports, "movieRoute", { enumerable: true, get: function () { return __importDefault(movieRoute_1).default; } });
var userRoute_1 = require("./userRoute");
Object.defineProperty(exports, "userRoute", { enumerable: true, get: function () { return __importDefault(userRoute_1).default; } });
var authRoute_1 = require("./authRoute");
Object.defineProperty(exports, "authRoute", { enumerable: true, get: function () { return __importDefault(authRoute_1).default; } });
var errorRoute_1 = require("./errorRoute");
Object.defineProperty(exports, "errorRoute", { enumerable: true, get: function () { return __importDefault(errorRoute_1).default; } });
