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
exports.getAccessFromGoogle = void 0;
const user_1 = require("../../model/user");
const google_auth_library_1 = require("google-auth-library");
const config_1 = require("../../config");
const authHandler_1 = require("./authHandler");
const client = new google_auth_library_1.OAuth2Client(config_1.audience);
const getAccessFromGoogle = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c;
    try {
        let user;
        const { token } = req.body;
        // console.log('token',token);
        const ticket = yield client.verifyIdToken({
            idToken: token,
            audience: config_1.audience
        });
        // console.log('ticket',ticket);
        if (ticket.getPayload() && ((_a = ticket.getPayload()) === null || _a === void 0 ? void 0 : _a.email_verified)) {
            const email = ((_b = ticket.getPayload()) === null || _b === void 0 ? void 0 : _b.email) || '';
            const name = ((_c = ticket.getPayload()) === null || _c === void 0 ? void 0 : _c.name) || '';
            user = yield user_1.userDAO.getUser(email);
            if (!user) {
                const password = yield (0, authHandler_1.hashingPassword)(`${email}${config_1.secret}`);
                user = yield user_1.userDAO.saveUser({
                    email,
                    name,
                    password
                });
            }
            console.log(user);
            req.body = user;
            next();
        }
        else {
            throw new Error('error validación google token');
        }
    }
    catch (error) {
        next(error);
        // res.json(error.message);
    }
});
exports.getAccessFromGoogle = getAccessFromGoogle;
