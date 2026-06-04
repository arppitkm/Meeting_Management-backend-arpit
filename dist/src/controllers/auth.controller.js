"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = register;
exports.login = login;
const auth_validator_1 = require("../validators/auth.validator");
const auth_service_1 = require("../services/auth.service");
async function register(req, res) {
    try {
        const data = auth_validator_1.registerUserSchema.parse(req.body);
        const user = await (0, auth_service_1.registerUser)(data.name, data.email, data.password);
        return res.status(201).json(user);
    }
    catch (error) {
        return res.status(400).json({
            message: error instanceof Error
                ? error.message
                : "Registration failed",
        });
    }
}
async function login(req, res) {
    try {
        const data = auth_validator_1.loginUserSchema.parse(req.body);
        const result = await (0, auth_service_1.loginUser)(data.email, data.password);
        return res.json(result);
    }
    catch (error) {
        return res.status(400).json({
            message: error instanceof Error
                ? error.message
                : "Login failed",
        });
    }
}
//# sourceMappingURL=auth.controller.js.map