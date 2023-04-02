import "./App.css";

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { productServiceFactory } from "./services/productService";
import { AuthProvider } from "./contexts/AuthContext";
import { CartProvider } from "./contexts/CartContext";
import { ProductProvider } from "./contexts/productContext";

import Products from "./components/Products/Products";
import { Home } from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Header } from "./components/Header/Header";
import { CreateProduct } from "./components/CreateProduct/CreateProduct";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { EditProduct } from "./components/EditProduct/EditProduct";
import { Logout } from "./components/Logout/Logout";
import { Checkout } from "./components/Checkout/Checkout";

function App() {
  const [products, setProducts] = useState([]);
  const productService = productServiceFactory(); //auth.accessToken

  useEffect(() => {
    productService.getAll().then((result) => {
      setProducts(result);
    });
  }, []);

  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          <div className="App">
            <Header />
            <main id="content-wrap">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/create-product" element={<CreateProduct />} />
                <Route path="/catalog" element={<Products />} />
                <Route
                  path="/catalog/:productId"
                  element={<ProductDetails />}
                />
                <Route
                  path="/catalog/:productId/edit"
                  element={<EditProduct />}
                />
              </Routes>
            </main>
            <Footer />
          </div>
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
}

export default App;
