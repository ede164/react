import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './componentes/Navbar';
import { Inicio } from './paginas/inicio'
import contacto from './paginas/contacto';
import informacion from './paginas/informacion';
import quienessomos from './paginas/quienessomos';
import ubicacion from './paginas/ubicacion';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element= {<inicio/>} />
          <Route path='/' element= {<contacto/>} />
          <Route path='/' element= {<informacion/>} />
          <Route path='/' element= {<quienessomos/>} />
          <Route path='/' element= {<ubicacion/>} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
