import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "secret_shh_dev";
const publicPaths = ["/api/login"];

const authMiddleware = (req, res, next) => {
  if (publicPaths.includes(req.path)) {
    return next();
  }

  // Obtener token de local storage
  const token = req.token;

  if (!token) {
    return res
      .status(404)
      .json({ message: "No se proporciono token de autenticación" });
  }

  // Verificar que el token sea valido
  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) {
      return res.status(403).json({ message: "Token invalido o expirado" });
    }
    req.user = user;
    next();
  });
};

export default authMiddleware;