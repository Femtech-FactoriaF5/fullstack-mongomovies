"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
const authHandler_1 = __importDefault(require("../middleware/authentication/authHandler"));
const googleAuthHandler_1 = require("../middleware/authentication/googleAuthHandler");
const { login } = userController_1.userController;
const { validateUser } = authHandler_1.default;
// ROUTES
const router = (0, express_1.default)();
router.post('/login', validateUser, login);
router.post('/login/google', googleAuthHandler_1.getAccessFromGoogle, login);
exports.default = router;
