import UsuarioController from "../controllers/usuario.controller.js";
import express from "express";
const router = express.Router();

//Crud para los usuarios
router.get("/", UsuarioController.getAll);
router.post("/", UsuarioController.create);

export default router;