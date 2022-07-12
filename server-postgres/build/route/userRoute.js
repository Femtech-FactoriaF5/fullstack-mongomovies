"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const authHandler_1 = __importDefault(require("../middleware/authentication/authHandler"));
const jwtHandler_1 = __importDefault(require("../middleware/authentication/jwtHandler"));
const { saveUser, getAllUsers } = userController_1.userController;
const { encryptPassword } = authHandler_1.default;
const { validateToken } = jwtHandler_1.default;
// ROUTES
const router = (0, express_1.default)();
router.route('/user')
    .post(encryptPassword, saveUser)
    .get(validateToken, getAllUsers);
exports.default = router;
