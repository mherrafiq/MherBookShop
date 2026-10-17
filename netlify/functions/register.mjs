import { getDb } from './db.mjs';

export const handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };

  try {
    const db = await getDb();
    const method = event.httpMethod;

    // POST /api/register
    if (method === 'POST') {
      const { email, password, username: rawUsername } = JSON.parse(event.body || '{}');
      if (!email || !password) {
        return { statusCode: 400, headers, body: JSON.stringify('Email and password are required.') };
      }
      const username = rawUsername || email.split('@')[0];

      const [existing] = await db.query(
        'SELECT * FROM users WHERE email = ? OR username = ?',
        [email, username]
      );
      if (existing.length > 0) {
        return { statusCode: 400, headers, body: JSON.stringify('User with this email or username already exists.') };
      }

      const [result] = await db.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [username, email, password]
      );
      return {
        statusCode: 200, headers,
        body: JSON.stringify({ message: 'User registered successfully!', user: { id: result.insertId, username, email } })
      };
    }

    return { statusCode: 404, headers, body: JSON.stringify('Route not found') };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
