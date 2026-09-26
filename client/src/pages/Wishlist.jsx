import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import { ShoppingBag, Trash2 } from 'lucide-react';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const placeholders = [
    "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=500&auto=format&fit=crop&q=60",
    "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=500&auto=format&fit=crop&q=60",
  ];

  const getCover = (cover, id) => {
    if (cover && (cover.startsWith('http') || cover.startsWith('/') || cover.startsWith('data:'))) return cover;
    return placeholders[id % placeholders.length];
  };

  return (
    <div className="wishlist-page-container">
      {/* Title Header */}
      <div className="wishlist-header">
        <h1 className="wishlist-title">Wishlist</h1>
        <div className="wishlist-title-underline"></div>
      </div>

      {/* Main Content Card */}
      <div className="wishlist-card">
        <h2 className="wishlist-subtitle">My wishlist</h2>

        <div className="wishlist-table-container">
          <table className="wishlist-table">
            <thead>
              <tr>
                <th className="th-product">Product Name</th>
                <th className="th-price">Unit Price</th>
                <th className="th-stock">Stock Status</th>
                <th className="th-actions">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.length === 0 ? (
                <tr>
                  <td colSpan="4" className="wishlist-empty-td">
                    No products added to the wishlist
                  </td>
                </tr>
              ) : (
                wishlistItems.map((item) => (
                  <tr key={item.id} className="wishlist-row">
                    <td className="td-product">
                      <div className="wishlist-product-info">
                        <img
                          src={getCover(item.cover, item.id)}
                          alt={item.title}
                          className="wishlist-product-img"
                          onError={(e) => { e.target.src = placeholders[item.id % placeholders.length]; }}
                        />
                        <span className="wishlist-product-name">{item.title}</span>
                      </div>
                    </td>
                    <td className="td-price">
                      {item.price === 0 || item.price === '' ? 'Free' : `$${parseFloat(item.price).toFixed(2)}`}
                    </td>
                    <td className="td-stock">
                      <span className="stock-badge in-stock">In Stock</span>
                    </td>
                    <td className="td-actions">
                      <div className="wishlist-action-btns">
                        <button
                          className="wishlist-add-cart-btn"
                          onClick={() => addToCart(item)}
                        >
                          <ShoppingBag size={15} />
                          Add to Cart
                        </button>
                        <button
                          className="wishlist-remove-btn"
                          title="Remove item"
                          onClick={() => removeFromWishlist(item.id)}
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
