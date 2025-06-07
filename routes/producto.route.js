import ProductoController from "../controllers/producto.controller.js";
import express from "express";
const router = express.Router();

// Rutas para el crud de producto

router.get("/", ProductoController.getAll);
router.post("/", ProductoController.create);
router.put("/:id", ProductoController.update);
router.delete("/:id", ProductoController.delete);

export default router;