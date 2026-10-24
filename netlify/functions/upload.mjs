export const handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Content-Type': 'application/json',
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, headers, body: JSON.stringify({ error: 'Method not allowed' }) };
  }

  try {
    const { image, name } = JSON.parse(event.body || '{}');
    if (!image) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'No image provided' }) };
    }

    // Parse base64
    const matches = image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
    const mimeType = matches ? matches[1] : 'image/jpeg';
    const base64Data = matches ? matches[2] : image;
    const buffer = Buffer.from(base64Data, 'base64');
    const filename = name || `cover-${Date.now()}.jpg`;

    // Upload to Catbox
    const form = new FormData();
    form.append('reqtype', 'fileupload');
    form.append('fileToUpload', new Blob([buffer], { type: mimeType }), filename);

    const res = await fetch('https://catbox.moe/user/api.php', {
      method: 'POST',
      body: form,
    });

    const imageUrl = (await res.text()).trim();

    if (!res.ok || !imageUrl.startsWith('http')) {
      throw new Error(imageUrl || 'Failed to upload to image host');
    }

    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ imageUrl }),
    };
  } catch (err) {
    console.error('Upload handler error:', err);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ error: err.message || 'Image upload failed' }),
    };
  }
};
