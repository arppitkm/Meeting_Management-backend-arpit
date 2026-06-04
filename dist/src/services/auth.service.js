"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerUser = registerUser;
exports.loginUser = loginUser;
const bcrypt_1 = __importDefault(require("bcrypt"));
const prisma_1 = require("../config/prisma");
const jwt_1 = require("../utils/jwt");
async function registerUser(name, email, password) {
    const existingUser = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const passwordHash = await bcrypt_1.default.hash(password, 10);
    const user = await prisma_1.prisma.user.create({
        data: {
            name,
            email,
            passwordHash,
        },
    });
    return {
        id: user.id,
        name: user.name,
        email: user.email,
    };
}
async function loginUser(email, password) {
    const user = await prisma_1.prisma.user.findUnique({
        where: { email },
    });
    if (!user) {
        throw new Error("Invalid credentials");
    }
    const isValid = await bcrypt_1.default.compare(password, user.passwordHash);
    if (!isValid) {
        throw new Error("Invalid credentials");
    }
    const token = (0, jwt_1.generateToken)(user.id);
    return {
        token,
    };
}
//# sourceMappingURL=auth.service.js.map