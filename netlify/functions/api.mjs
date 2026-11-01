import { handler as expressHandler } from '../../backend/index.js';

export const handler = async (event, context) => {
  // Strip /api prefix so Express routes like /books, /login match cleanly
  if (event.path.startsWith('/api')) {
    event.path = event.path.replace(/^\/api/, '') || '/';
  }
  return expressHandler(event, context);
};

