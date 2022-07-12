"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.audience = exports.secret = exports.uri = exports.PORT = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.PORT = process.env.PORT || 3001;
exports.uri = process.env.DB_CONN_STRING || "postgresql://postgres:123456@localhost:5432/movies";
exports.secret = process.env.SECRET || '';
exports.audience = process.env.GOOGLE_CLIENT_ID || '';
