import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css"
import Layout from "./components/pages/layout";
import Login from './components/pages/login'
import Registrasi from './components/pages/registrasi'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="registrasi" element={<Registrasi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);