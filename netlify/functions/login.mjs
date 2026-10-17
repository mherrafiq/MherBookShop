import { getDb } from './db.mjs';

export const handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };

  try {
    const db = await getDb();

    if (event.httpMethod !== 'POST') {
      return { statusCode: 405, headers, body: JSON.stringify('Method not allowed') };
    }

    const { usernameOrEmail, password } = JSON.parse(event.body || '{}');
    if (!usernameOrEmail || !password) {
      return { statusCode: 400, headers, body: JSON.stringify('Username/Email and password are required.') };
    }

    const [rows] = await db.query(
      'SELECT * FROM users WHERE email = ? OR username = ?',
      [usernameOrEmail, usernameOrEmail]
    );

    if (rows.length === 0) {
      return { statusCode: 404, headers, body: JSON.stringify('User not found. Please register first.') };
    }

    const user = rows[0];
    if (user.password !== password) {
      return { statusCode: 400, headers, body: JSON.stringify('Incorrect password.') };
    }

    return {
      statusCode: 200, headers,
      body: JSON.stringify({
        message: 'Login successful!',
        user: { id: user.id, username: user.username, email: user.email }
      })
    };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
