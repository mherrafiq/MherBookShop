// Netlify par: API calls /api/ pe jayengi aur Netlify Functions handle karengi
// Local development mein: REACT_APP_API_URL=http://localhost:8800 set karein .env.local mein
export const API_BASE_URL = process.env.REACT_APP_API_URL || "/api";
