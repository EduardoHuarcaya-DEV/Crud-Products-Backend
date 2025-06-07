import { DataTypes } from "sequelize";
import sequelize from "../config";

const Usuario = sequelize.define("Usuario", {
    id_usuario: {
        primaryKey: true,
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING(25),
        allowNull: false,
    },
    correo: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    contrasena: {
        type: DataTypes.STRING(60),
        allowNull: false,
    }
}, {
    tableName: "usuario",
})

export default Usuario;