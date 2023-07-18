import Login from './components/pages/login/index';
import './App.css';
import Registrasi from './components/pages/registrasi';
import Navbar from './components/pages/navbar';
import DetailProduct from './components/pages/detail';


function App() {
  return (
    <div className="App">
      <Login/>
      <Registrasi/>
      <Navbar/>
      <DetailProduct/>
    </div>
  );
}

export default App;
