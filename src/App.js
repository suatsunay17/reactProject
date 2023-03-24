import "./App.css";

import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { productServiceFactory } from "./services/productService";
import { AuthProvider } from "./contexts/AuthContext";

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

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const productService = productServiceFactory(); //auth.accessToken

  useEffect(() => {
    productService.getAll().then((result) => {
      setProducts(result);
    });
  }, []);

  const onCreateProductSubmit = async (data) => {
    const newProduct = await productService.create(data);

    setProducts((state) => [...state, newProduct]);

    navigate("/catalog");
  };

  const onProductEditSubmit = async (values) => {
    const result = await productService.edit(values._id, values);

    setProducts((state) =>
      state.map((x) => (x._id === values._id ? result : x))
    );

    navigate(`/catalog/${values._id}`);
  };

  return (
    <AuthProvider>
      <div id="page-container">
        <div id="page-container-inside">
          <Header />
          <main id="content-wrap">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/logout" element={<Logout />} />
              <Route
                path="/create-product"
                element={
                  <CreateProduct
                    onCreateProductSubmit={onCreateProductSubmit}
                  />
                }
              />
              <Route
                path="/catalog"
                element={<Products products={products} />}
              />
              <Route path="/catalog/:productId" element={<ProductDetails />} />
              <Route
                path="/catalog/:productId/edit"
                element={
                  <EditProduct onProductEditSubmit={onProductEditSubmit} />
                }
              />
            </Routes>
          </main>
        </div>
      </div>
      <Footer />
    </AuthProvider>
  );
}

export default App;
