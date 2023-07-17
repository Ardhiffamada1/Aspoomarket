import Login from './components/pages/login/index';
import './App.css';
import Registrasi from './components/pages/registrasi';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Login/>
      <Registrasi/>
    </div>
  );
}

export default App;
