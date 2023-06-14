import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { validateToken } from "../middlewares/validateToken.js";
import gameControllers from "../controllers/gameControllers.js";
import guessSchema from "../schemas/guessSchema.js";


const gameRoutes = Router();

gameRoutes.get("/:id", validateToken, gameControllers.getInfo);
gameRoutes.post("/guess", validateToken, validateSchema(guessSchema), gameControllers.guess)

export default gameRoutes;