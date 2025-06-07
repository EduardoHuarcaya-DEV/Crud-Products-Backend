import Imagen_Producto from "../models/imagen_producto.js";

class Imagen_ProductoController {
  async getAll(req, res) {
    try {
      const imagenes = Imagen_Producto.findAll();
      return res.status(200).json(imagenes);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "No se pudo obtener las imagenes" });
    }
  }

  async create(req, res) {
    try {
      const imagen = req.body;
      const nuevaImagen = Imagen_Producto.create(imagen);
      return res.status(201).json(nuevaImagen);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "No se pudo crear la imagen" });
    }
  }
}

export default new Imagen_ProductoController();