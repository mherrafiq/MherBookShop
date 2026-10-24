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
    host: process.env.DB_HOST || 'gateway01.ap-northeast-1.prod.aws.tidbcloud.com',
    port: Number(process.env.DB_PORT) || 4000,
    user: process.env.DB_USER || '4GDYdk756scbuKt.root',
    password: process.env.DB_PASSWORD || 'UlXZOcT6MG1WDbig',
    database: process.env.DB_NAME || 'test',
    ssl: { rejectUnauthorized: false },
  });

  return connection;
};
