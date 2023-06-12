import { HashRouter, Route, Routes } from "react-router-dom";
import {Menu} from './Menu';
import { Galeria } from "./Galeria";
import { Info } from "./Info";
import './App.css';

function App() {
  return (
   <HashRouter>
    <Menu />

    <Routes>
      <Route path="/" element={<Galeria/>}/>
      <Route path="/Info" element={<Info/>}/>
    </Routes>
    
    
   </HashRouter>
  );
}

export default App;
/*HashRouter en React es un tipo de enrutador proporcionado por la biblioteca React Router. Este enrutador utiliza el hash en la URL para manejar la navegación y el enrutamiento interno en una SPA. Permite definir diferentes rutas en la aplicación y asociar componentes con esas rutas. Cuando el usuario navega a una ruta específica, el componente correspondiente se renderiza en la interfaz de usuario sin enviar una solicitud al servidor. */