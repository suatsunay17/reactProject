import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import { productServiceFactory } from "./services/productService";
import { authServiceFactory } from "./services/authService";
import { AuthContext } from "./contexts/AuthContext";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Products from "./components/Products/Products";
import { Home } from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";
import { Header } from "./components/Header/Header";
import { CreateProduct } from "./components/CreateProduct/CreateProduct";
import { ProductDetails } from "./components/ProductDetails/ProductDetails";
import { EditProduct } from "./components/EditProduct/EditProduct";

function App() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [auth, setAuth] = useState({});
  const productService = productServiceFactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken);

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

  const onLoginSubmit = async (data) => {
    try {
      const result = await authService.login(data);

      setAuth(result);

      navigate("/catalog");
    } catch (error) {
      console.log("There is a problem");
    }
  };

  const onRegisterSubmit = async (values) => {
    const { confirmPassword, ...registerData } = values;
    if (confirmPassword !== registerData.password) {
      return;
    }

    try {
      const result = await authService.register(registerData);

      setAuth(result);

      navigate("/catalog");
    } catch (error) {
      console.log("There is a problem");
    }
  };

  const onLogout = async () => {
    await authService.logout();

    setAuth({});
  };

  const onProductEditSubmit = async (values) => {
    const result = await productService.edit(values._id, values);

    setProducts((state) =>
      state.map((x) => (x._id === values._id ? result : x))
    );

    navigate(`/catalog/${values._id}`);
  };

  const contextValues = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId: auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    isAuthenticated: !!auth.accessToken,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      <div>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Products products={products} />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route
              path="/create-product"
              element={
                <CreateProduct onCreateProductSubmit={onCreateProductSubmit} />
              }
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
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
