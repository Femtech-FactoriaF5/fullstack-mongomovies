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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_service_1 = __importDefault(require("../../services/database.service"));
class UserDAO {
    constructor(collectionName) {
        this.collectionName = collectionName;
    }
    saveUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield database_service_1.default.getCollection(this.collectionName);
            const result = yield collection.insertOne(user);
            return result;
        });
    }
    getUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield database_service_1.default.getCollection(this.collectionName);
            const result = yield collection.findOne({ email });
            return result;
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const collection = yield database_service_1.default.getCollection(this.collectionName);
            const result = yield collection.find({}).project({ "_id": 0, "email": 1, "name": 1 }).toArray();
            return result;
        });
    }
}
exports.default = new UserDAO('users');
