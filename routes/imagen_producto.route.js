import Imagen_ProductoController from "../controllers/imagen_producto.controller.js";
import express from "express";
const router = express.Router();

// Rutas para crud de imagen producto

router.get("/", Imagen_ProductoController.getAll);
router.post("/", Imagen_ProductoController.create);

export default router;