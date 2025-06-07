import Categoria from "../models/categoria.js";
import { v4 as uuidv4 } from "uuid";

class CategoriaController {
  async getAll(req, res) {
    try {
      const categorias = await Categoria.findAll();
      return res.status(200).json(categorias);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error al obtener las categorías" });
    }
  }

  async create(req, res) {
    try {
      const id = uuidv4().substring(0, 10);
      const { nombre } = req.body;

      const nuevaCategoria = await Categoria.create(id, nombre);
      return res.status(201).json(nuevaCategoria);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error al crear una categoría" });
    }
  }
}

export default new CategoriaController();
