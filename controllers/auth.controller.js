import Usuario from "../models/usuario.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthController {
  async login(req, res) {
    try {
      const { correo, contrasena } = req.body;
      const usuario = await Usuario.findOne({ where: { correo } });
      const SECRET_KEY = process.env.JWT_SECRET || "secret_shh_dev";

      // Verificamos si el usuario existe
      if (!usuario) {
        return res.status(404).json({ message: "Usuario no encontrado" });
      }

      // Comparamos la contraseña hasheada en la bd con la colocada por el usuario
      const compararContrasena = await bcrypt.compare(
        contrasena,
        usuario.contrasena
      );

      if (!compararContrasena) {
        return res.status(401).json({ message: "Contraseña incorrecta" });
      }

      const payload = {
        id_usuario: usuario.id_usuario,
        nombre: usuario.nombre,
      };

      const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "4h" });

      return res.status(200).json({
        message: "Inicio de sesión exitoso",
        token,
        usuario: payload
      });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Error al iniciar sesión" });
    }
  }
}

export default new AuthController();
