import { DataTypes } from "sequelize";
import sequelize from "../config.js";

const Categoria = sequelize.define("Categoria", {
    id_categoria: {
        primaryKey: true,
        type: DataTypes.STRING(5),
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING(50),
        allowNull: false,
    }
},{
    tableName: "categoria",
})

export default Categoria;