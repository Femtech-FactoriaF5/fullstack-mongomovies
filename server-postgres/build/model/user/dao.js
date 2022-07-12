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
    saveUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryStr = 'insert into "user" (email, password, name) values ($1,$2,$3) RETURNING *';
            // const values = Object.values(user);
            const values = [user.email, user.password, user.name];
            const result = yield database_service_1.default.query(queryStr, values);
            return result === null || result === void 0 ? void 0 : result.rows[0];
        });
    }
    getUser(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryStr = 'select * from "user" where email = $1';
            const values = [email];
            const result = yield database_service_1.default.query(queryStr, values);
            database_service_1.default.end;
            return result === null || result === void 0 ? void 0 : result.rows[0];
        });
    }
    getUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const queryStr = 'select * from "user"';
            const result = yield database_service_1.default.query(queryStr);
            return result === null || result === void 0 ? void 0 : result.rows;
        });
    }
}
exports.default = new UserDAO();
