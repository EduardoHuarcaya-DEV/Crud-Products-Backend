// Configuración de la conexión a la base de datos Postgres con Sequelize

import { Sequelize } from 'sequelize';
import 'dotenv/config';

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'postgres',
    logging: false, // Deshabilitado para ver las consultas SQL
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    define: {
      freezeTableName: true, // No pluralizar nombres de tablas
      underscored: false,    // No convertir camelCase a snake_case
      timestamps: false      // No usar createdAt y updatedAt
    },
  }
);

// Probar la conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión exitosa a la base de datos');
    console.log(`Conectado a: ${process.env.DB_NAME} en ${process.env.DB_HOST}`);
  })
  .catch(err => {
    console.error('Error al conectar a la base de datos:', err);
  });

export default sequelize;