import { Router } from "express";
import loginSchema from "../schemas/loginSchema.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import authControllers from "../controllers/authControllers.js";

const authRoutes = Router();

authRoutes.post("/login", validateSchema(loginSchema), authControllers.login)
authRoutes.post("/signup", validateSchema(loginSchema), authControllers.create)

export default authRoutes;