import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { ArrowLeft, UploadCloud } from 'lucide-react'

const Update = () => {
  const [book, setBook] = useState({
    title: "",
    desc: "",
    price: "",
    cover: "",
  });
  const [file, setFile] = useState(null);

  const navigate = useNavigate();
  const { id } = useParams();

  const handleChange = (e) => {
    setBook((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      let coverUrl = book.cover;
      if (file) {
        const formData = new FormData();
        formData.append("image", file);
        const res = await axios.post("http://localhost:8800/upload", formData);
        coverUrl = res.data.imageUrl;
      }
      await axios.put("http://localhost:8800/books/" + id, { ...book, cover: coverUrl });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="form-container">
      <div className="form-card form-card-wide">
        <h1>Update Book</h1>

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
                {file && (
                  <img
                    src={URL.createObjectURL(file)}
                    alt="Preview"
                    className="file-preview"
                    style={{ width: '100%', maxHeight: '200px', objectFit: 'cover', borderRadius: '12px', marginBottom: '10px' }}
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
              </div>
            </div>
          </div>
        </div>

        <div className="form-actions" style={{ flexDirection: 'row', marginTop: '30px' }}>
          <button className="btn btn-primary" onClick={handleClick} style={{ flex: 1 }}>
            Update Book
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

export default Update