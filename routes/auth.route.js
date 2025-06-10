import AuthController from "../controllers/auth.controller.js";
import express from "express";
const router = express.Router();

// Rutas para autenticacion
router.use("/login", AuthController.login);


export default router;