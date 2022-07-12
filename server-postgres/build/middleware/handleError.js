"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_errors_1 = __importDefault(require("http-errors"));
const pg_1 = require("pg");
exports.default = {
    logError(err, req, res, next) {
        req.body.error = err;
        console.log(err.message);
        next(err);
    },
    clientError(err, req, res, next) {
        if (err instanceof http_errors_1.default.HttpError)
            res.status(err.statusCode).send({ 'error': err.message });
        if (err instanceof pg_1.DatabaseError)
            res.status(400).send({ 'error': err.message });
        if (err.name === "JsonWebTokenError")
            res.status(400).send({ 'error': err.message });
        next(err);
    },
    genericError(err, req, res, next) {
        if (res.headersSent) {
            return next(err);
        }
        res.status(err.statusCode).json({
            'error': 'se ha producido un error',
            'name': err.name
        });
    }
};
