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
const express_1 = __importDefault(require("express"));
const supertest_1 = __importDefault(require("supertest"));
const route_1 = require("../../src/route");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(route_1.userRoute);
describe("POST /user", () => {
    describe("when passed a username and password", () => {
        test('should respond with a 201 & content-type "application/json', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app)
                .post('/user')
                .send({
                email: "mi@mail.com",
                password: "1234"
            });
            expect(response.status).toEqual(201);
            expect(response.headers['content-type']).toContain('application/json');
        }));
        test('should respond with a json object that contains the id from the database. (probably jwt in the real world)', () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app)
                .post('/user')
                .send({
                email: "mi@mail.com",
                password: "1234"
            });
            expect(response.status).toEqual(201);
            expect(response.headers['content-type']).toContain('application/json');
            expect(response.body.userId).toBeDefined();
            // should save the username and password in the database
            // should respond with a json object that contains the id from the database. (probably jwt in the real world)
        }));
    });
    describe("when the email or password is missing", () => {
        test("should return a 400 status code to show there was a user error.", () => __awaiter(void 0, void 0, void 0, function* () {
            const response = yield (0, supertest_1.default)(app)
                .post('/user')
                .send({ password: "1234" });
            expect(response.status).toEqual(400);
        }));
        // should return a json object that contains an error message.
        // should specify json as the content type in the http header.
    });
});
