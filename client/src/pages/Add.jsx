import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ArrowLeft, UploadCloud } from 'lucide-react'
import { API_BASE_URL } from '../config'

const compressImage = (file) => {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target.result;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxDim = 1200;
        let width = img.width;
        let height = img.height;
        if (width > height && width > maxDim) {
          height = Math.round((height * maxDim) / width);
          width = maxDim;
        } else if (height > maxDim) {
          width = Math.round((width * maxDim) / height);
          height = maxDim;
        }
        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL('image/jpeg', 0.85));
      };
      img.onerror = () => resolve(event.target.result);
    };
    reader.onerror = () => resolve(null);
  });
};

const Add = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });
  const [file, setFile] = useState(null);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      let coverUrl = book.cover;
      if (file) {
        const base64Data = await compressImage(file);
        const res = await axios.post(`${API_BASE_URL}/upload`, {
          image: base64Data,
          name: file.name,
        });
        coverUrl = res.data?.imageUrl || coverUrl;
      }
      await axios.post(`${API_BASE_URL}/books`, { ...book, cover: coverUrl });
      navigate("/");
    } catch (err) {
      console.error("Error adding book:", err);
      let msg = "Failed to add book.";
      if (err?.response?.data) {
        if (typeof err.response.data === 'string') {
          if (err.response.data.includes('<title>')) {
            const titleMatch = err.response.data.match(/<title>(.*?)<\/title>/i);
            msg = titleMatch ? titleMatch[1] : "Server route not found (404)";
          } else {
            msg = err.response.data;
          }
        } else if (err.response.data.error) {
          msg = err.response.data.error;
        } else {
          msg = JSON.stringify(err.response.data);
        }
      } else if (err.message) {
        msg = err.message;
      }
      setError(msg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card form-card-wide">
        <h1>Add New Book</h1>

        <div className="form-grid">
          {/* Left Column */}
          <div className="form-col">
            <div className="form-group">
              <label htmlFor="title">Book Title</label>
              <input
                id="title"
                type="text"
                placeholder="Enter book title"
                onChange={handleChange}
                name="title"
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="desc">Description</label>
              <input
                id="desc"
                type="text"
                placeholder="Enter description"
                onChange={handleChange}
                name="desc"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="price">Price ($)</label>
              <input
                id="price"
                type="number"
                placeholder="Enter price"
                onChange={handleChange}
                name="price"
                className="form-input"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="form-col">
            <div className="form-group" style={{ height: '100%' }}>
              <label htmlFor="cover">Cover Image</label>
              <div className="file-upload-wrapper" style={{ flex: 1 }}>
                {(file || book.cover) && (
                  <img
                    src={file ? URL.createObjectURL(file) : book.cover}
                    alt="Preview"
                    className="file-preview"
                    style={{ width: '100%', maxHeight: '180px', objectFit: 'cover', borderRadius: '12px', marginBottom: '10px' }}
                  />
                )}
                <label htmlFor="cover" className="file-input-label" style={{ width: '100%', justifyContent: 'center' }}>
                  <UploadCloud size={20} />
                  {file ? 'Change Image' : 'Upload Image'}
                  <input
                    id="cover"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setFile(e.target.files[0])}
                    name="cover"
                  />
                </label>
                <div style={{ textAlign: 'center', margin: '8px 0', fontSize: '0.85rem', color: '#6b7280' }}>
                  — OR —
                </div>
                <input
                  type="text"
                  placeholder="Paste direct Image URL (https://...)"
                  name="cover"
                  value={book.cover}
                  onChange={handleChange}
                  className="form-input"
                  style={{ fontSize: '0.9rem' }}
                />
              </div>
            </div>
          </div>
        </div>

        {error && (
          <div style={{ color: '#ef4444', backgroundColor: '#fee2e2', padding: '10px 14px', borderRadius: '8px', marginTop: '15px' }}>
            {typeof error === 'string' ? error : JSON.stringify(error)}
          </div>
        )}

        <div className="form-actions" style={{ flexDirection: 'row', marginTop: '30px' }}>
          <button className="btn btn-primary" onClick={handleClick} disabled={loading} style={{ flex: 1 }}>
            {loading ? 'Adding Book...' : 'Add Book'}
          </button>
          <button className="btn btn-secondary" onClick={() => navigate('/')} style={{ flex: 1 }}>
            <ArrowLeft size={16} />
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
}

export default Add