import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import 'bootstrap/dist/css/bootstrap.css';
import Layout from "./components/pages/layout";
import Login from './components/pages/login';
import Registrasi from "./components/pages/registrasi"
<<<<<<< HEAD
import Home from "./components/pages/Home/Home";
import Footer from "./components/main asset/Footer";

=======
import Navbar from "./components/pages/navbar/navbar";
import Keranjang from "../src/components/pages/cart"
>>>>>>> 4cd4f5e839948031f772fdaa9afe3508aab40d23
import DetailProduct from "./components/pages/detailproduct/detail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="registrasi" element={<Registrasi />} />
<<<<<<< HEAD
        <Route path="home" element={<Home />} />
        <Route path="footer" element={<Footer/>} />
=======
        <Route path="navbar" element={<Navbar/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);