import Usuario from "../models/usuario.js";
import { v4 as uuidv4 } from "uuid";
import bcrypt from "bcrypt";

// Número de rondas de salt para bcrypt
const SALT_ROUNDS = 10;

class UsuarioController {
  async getAll(req, res) {
    try {
      const usuarios = await Usuario.findAll();
      return res.status(200).json(usuarios);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "No se pudo obtener los usuarios" });
    }
  }

  async create(req, res) {
    try {
      const id_usuario = uuidv4().substring(0, 10);

      const { nombre, correo, contrasena } = req.body;

      const nombreExistente = await Usuario.findOne({ where: { nombre } });
      if (nombreExistente) {
        return res.status(400).json({
          message:
            "Este nombre de usuario ya ha sido registrado con anterioridad.",
        });
      }

      const correoExistente = await Usuario.findOne({ where: { correo } });
      if (correoExistente) {
        return res.status(400).json({
          message: "Este correo ya ha sido registrado con anterioridad.",
        });
      }

      if (contrasena.length < 8) {
        return res
          .status(400)
          .json({ message: "La contraseña debe tener 8 o más caracteres." });
      }

      const contrasenaHasheada = await bcrypt.hash(contrasena, SALT_ROUNDS);

      const nuevoUsuario = await Usuario.create({
        id_usuario,
        nombre,
        correo,
        contrasena: contrasenaHasheada,
      });

      const devolverUsuario = {
        id_usuario: nuevoUsuario.id_usuario,
        nombre: nuevoUsuario.nombre,
        correo: nuevoUsuario.correo,
      };

      return res.status(201).json(devolverUsuario);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "No se pudo crear el usuario" });
    }
  }
}

export default new UsuarioController();
