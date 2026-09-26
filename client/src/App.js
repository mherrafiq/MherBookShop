import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { AuthProvider } from "./context/AuthContext";

import Add from "./pages/Add";
import Books from "./pages/Books";
import Update from "./pages/Update";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Wishlist from "./pages/Wishlist";
import About from "./pages/About";
import Contract from "./pages/Contract";
import PrivacyPolicy from "./pages/Privacy&Policy";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import ExchangeRefund from "./pages/ExchangeRefund";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <WishlistProvider>
          <div className="App">
            <BrowserRouter>
              <Navbar />
              <div className="content-container">
                <Routes>
                  <Route path='/' element={<Books />} />
                  <Route path='/update/:id' element={<Update />} />
                  <Route path='/add' element={<Add />} />
                  <Route path='/about' element={<About />} />
                  <Route path='/contract' element={<Contract />} />
                  <Route path='/contact' element={<Contract />} />
                  <Route path='/faqs' element={<FAQ />} />
                  <Route path='/faq' element={<FAQ />} />
                  <Route path='/blog' element={<Blog />} />
                  <Route path='/exchange-refund' element={<ExchangeRefund />} />
                  <Route path='/refund' element={<ExchangeRefund />} />
                  <Route path='/exchange' element={<ExchangeRefund />} />
                  <Route path='/help' element={<FAQ />} />
                  <Route path='/privacy-policy' element={<PrivacyPolicy />} />
                  <Route path='/privacy' element={<PrivacyPolicy />} />
                  <Route path='/privacy&policy' element={<PrivacyPolicy />} />
                  <Route path='/privacy-and-policy' element={<PrivacyPolicy />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/register' element={<Register />} />
                  <Route path='/account' element={<Login />} />
                  <Route path='/wishlist' element={<Wishlist />} />
                </Routes>
              </div>
              <Footer />
            </BrowserRouter>
          </div>
        </WishlistProvider>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
