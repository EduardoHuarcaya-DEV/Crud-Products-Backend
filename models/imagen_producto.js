import { DataTypes } from "sequelize";
import sequelize from "../config.js";
import Producto from "./producto.js";

const Imagen_Producto = sequelize.define("Imagen_Producto", {

    id_imagen: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        autoIncrement: true
    },
    url: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    id_producto: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
}, {
    tableName: "imagen_producto"
})

// Definir asociaciones
Imagen_Producto.belongsTo(Producto, { foreignKey: 'id_producto', as: 'producto' });



export default Imagen_Producto;