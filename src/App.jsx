import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import ProductDetail from "./pages/ProductDetail";
import Footer from "./components/Footer";
import AllProduct from "./pages/AllProduct";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/allproduct/:query" element={<AllProduct />} />
      </Routes>
      <Sidebar />
      <Footer />
    </>
  );
}

export default App;
