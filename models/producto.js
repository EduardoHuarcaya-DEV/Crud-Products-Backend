import { DataTypes } from "sequelize";
import sequelize from "../config.js";

const Producto = sequelize.define("Producto", {

    id_producto: {
        primaryKey: true,
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    precio: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    img: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    id_categoria: DataTypes.STRING(5),

},{
    tableName: "producto",
})

// Definir asociaciones

export default Producto;