import mysql from 'mysql2/promise';

let connection = null;

export const getDb = async () => {
  if (connection) {
    try {
      await connection.query('SELECT 1');
      return connection;
    } catch {
      connection = null;
    }
  }

  connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false },
  });

  return connection;
};
