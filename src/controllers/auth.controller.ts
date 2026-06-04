import { Request, Response } from "express";
import {
  loginUserSchema,
  registerUserSchema,
} from "../validators/auth.validator";

import {
  registerUser,
  loginUser,
} from "../services/auth.service";

export async function register(
  req: Request,
  res: Response
) {
  try {
    const data = registerUserSchema.parse(req.body);

    const user = await registerUser(
      data.name,
      data.email,
      data.password
    );

    return res.status(201).json(user);
  } catch (error) {
    return res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Registration failed",
    });
  }
}

export async function login(
  req: Request,
  res: Response
) {
  try {
    const data = loginUserSchema.parse(req.body);

    const result = await loginUser(
      data.email,
      data.password
    );

    return res.json(result);
  } catch (error) {
    return res.status(400).json({
      message:
        error instanceof Error
          ? error.message
          : "Login failed",
    });
  }
}