"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const mongoDB = __importStar(require("mongodb"));
const config_1 = require("../config");
class Database {
    constructor(uri, db) {
        this.db = db;
        this.client = new mongoDB.MongoClient(uri);
        console.log('Connecting to MongoDB Atlas cluster...');
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.client.connect();
                // console.log('Successfully connected to MongoDB Atlas!');
            }
            catch (error) {
                console.error('Connection to MongoDB Atlas failed!', error);
                process.exit();
            }
        });
    }
    getDb() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.connect();
            return this.client.db(this.db);
        });
    }
    getCollection(collectionName) {
        return __awaiter(this, void 0, void 0, function* () {
            const db = yield this.getDb();
            return db.collection(collectionName);
        });
    }
}
exports.default = new Database(config_1.uri, config_1.db);
