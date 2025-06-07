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
    id_categoria: {
       type: DataTypes.STRING(5),
       allowNull: true,
    }
},{
    tableName: "producto",
})

export default Producto;