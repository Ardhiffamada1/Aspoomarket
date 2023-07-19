import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Layout from "./components/pages/layout";
import Login from './components/pages/login';
import Registrasi from "./components/pages/registrasi"
import Home from "./components/pages/Home/Home";
import Footer from "./components/main asset/Footer";

import Navbar from "./components/pages/navbar/navbar";
import Keranjang from "../src/components/pages/cart"
import DetailProduct from "./components/pages/detailproduct/detail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="registrasi" element={<Registrasi />} />
        <Route path="home" element={<Home />} />
        <Route path="footer" element={<Footer/>} />
=======
        <Route path="navbar" element={<Navbar/>} />
        <Route path="detailproduct" element={<DetailProduct/>} />
        <Route path="keranjang" element={<Keranjang/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);