/**
 * @swagger
 * tags:
 *   name: Authentication
 *   description: Authentication APIs
 */

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Register a new user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *             properties:
 *               name:
 *                 type: string
 *                 example: Arpit Mishra
 *               email:
 *                 type: string
 *                 example: xyz@test.com
 *               password:
 *                 type: string
 *                 example: xyz@123
 *     responses:
 *       201:
 *         description: User registered successfully
 */

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     tags:
 *       - Authentication
 *     summary: Login user
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                example: xyz@test.com
 *               password:
 *                 type: string
 *                example: xyz@123
 *     responses:
 *       200:
 *         description: Login successful
 */


import { Router } from "express";

import {
  register,
  login,
} from "../controllers/auth.controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;