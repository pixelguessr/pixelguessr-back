import { Router } from "express";
import authRoutes from "./authRoutes.js";
import gameRoutes from "./gameRoutes.js";

const routes = Router();

routes.use("/auth", authRoutes);
routes.use("/game", gameRoutes);

export default routes;