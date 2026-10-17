import { getDb } from './db.mjs';

export const handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') return { statusCode: 200, headers, body: '' };

  try {
    const db = await getDb();
    const method = event.httpMethod;
    // Path: /api/books or /api/books/123
    const parts = event.path.replace(/^\/api\/books\/?/, '').split('/');
    const id = parts[0] ? parts[0] : null;

    // GET /api/books
    if (method === 'GET' && !id) {
      const [rows] = await db.query('SELECT * FROM books');
      return { statusCode: 200, headers, body: JSON.stringify(rows) };
    }

    // POST /api/books
    if (method === 'POST') {
      const { title, desc, price, cover } = JSON.parse(event.body || '{}');
      await db.query(
        'INSERT INTO books (title, `desc`, price, cover) VALUES (?, ?, ?, ?)',
        [title, desc, price, cover]
      );
      return { statusCode: 200, headers, body: JSON.stringify('Book has been created Successfully.') };
    }

    // PUT /api/books/:id
    if (method === 'PUT' && id) {
      const { title, desc, price, cover } = JSON.parse(event.body || '{}');
      await db.query(
        'UPDATE books SET title = ?, `desc` = ?, price = ?, cover = ? WHERE id = ?',
        [title, desc, price, cover, id]
      );
      return { statusCode: 200, headers, body: JSON.stringify('Book has been updated successfully.') };
    }

    // DELETE /api/books/:id
    if (method === 'DELETE' && id) {
      await db.query('DELETE FROM books WHERE id = ?', [id]);
      return { statusCode: 200, headers, body: JSON.stringify('Book has been deleted successfully.') };
    }

    return { statusCode: 404, headers, body: JSON.stringify('Route not found') };
  } catch (err) {
    console.error(err);
    return { statusCode: 500, headers, body: JSON.stringify({ error: err.message }) };
  }
};
