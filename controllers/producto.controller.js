import Producto from "../models/producto.js";
import { v4 as uuidv4 } from "uuid";

class ProductoController {
  async getAll(req, res) {
    try {
      const productos = await Producto.findAll();
      return res.status(200).json(productos);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error al obtener los productos" });
    }
  }

  async create(req, res) {
    try {
      const id_producto = uuidv4().substring(0, 10);
      const producto = req.body;
      const nuevoProducto = await Producto.create({ ...producto, id_producto });
      return res.status(201).json(nuevoProducto);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error al crear un producto" });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { nombre, descripcion, precio, id_categoria } = req.body;

      const producto = await Producto.findByPk(id);

      // Verificar que el producto exista
      if (!producto) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }

      // Si el producto fue encontrado se procede con la actualizacion
      await producto.update({
        nombre,
        descripcion,
        precio,
        id_categoria,
      });

      return res.status(200).json(producto);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "No se pudo actualizar el producto" });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;

      const producto = await Producto.findByPk(id);

      // Verificar que el producto exista
      if (!producto) {
        return res.status(404).json({ message: "Producto no encontrado" });
      }

      await producto.destroy();
      return res
        .status(200)
        .json({ message: "Producto eliminado correctamente" });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "No se pudo eliminar el producto" });
    }
  }
}

export default new ProductoController();
