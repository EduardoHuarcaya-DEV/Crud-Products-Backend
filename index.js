import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv/config"; //Cargar variables de entorno   
import sequelize from "./config.js"; // Cargar configuracion de sequelize

const PORT = process.env.PORT || 3000;

const app = express();

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Importar Rutas

import authMiddleware from "./middleware/authMiddleware.js";
import AuthRoute from "./routes/auth.route.js";
import UsuarioRoute from "./routes/usuario.route.js";
import ProductoRoutes from "./routes/producto.route.js"; 
import CategoriaRoutes from "./routes/categoria.route.js";
import ImagenProductoRoutes from "./routes/imagen_producto.route.js";


// Rutas
app.use(authMiddleware);

app.use("/api/auth", AuthRoute)
app.use("/api/usuario", UsuarioRoute);
app.use("/api/producto", ProductoRoutes);
app.use("/api/categoria", CategoriaRoutes);
app.use("/api/imagen_producto", ImagenProductoRoutes);


app.listen (PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
});