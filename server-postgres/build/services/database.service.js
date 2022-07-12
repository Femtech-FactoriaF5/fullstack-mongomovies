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
const pg_1 = require("pg");
const config_1 = require("../config");
class Database {
    constructor(config) {
        this.client = new pg_1.Pool(config);
        console.log('Connecting to PostgreSQL...');
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.client.connect();
                // console.log('Successfully connected to MongoDB Atlas!');
            }
            catch (error) {
                console.error('Connection to Postgres failed!', error);
                process.exit();
            }
        });
    }
    end() {
        return __awaiter(this, void 0, void 0, function* () {
            this.client.end();
        });
    }
    query(query, values) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.connect();
                const result = yield this.client.query(query, values);
                // await this.end();
                return result;
            }
            catch (error) {
                console.log(error);
            }
        });
    }
}
exports.default = new Database({ connectionString: config_1.uri });
