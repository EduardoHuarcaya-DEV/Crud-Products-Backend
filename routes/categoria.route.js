import CategoriaController from "../controllers/categoria.controller.js";
import express from "express";
const router = express.Router();

// Rutas para el crud de Categorias

router.get("/", CategoriaController.getAll);
router.post("/", CategoriaController.create);

export default router;