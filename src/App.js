import { HashRouter, Route, Routes } from "react-router-dom";
import './App.css';
import { Menu } from './Menu';
import { AuthProvider } from "./auth";
import { Galeria } from "./Galeria";
import { Info } from "./Info";
import { InfoPage } from "./InfoPage";
import { LoginPage } from "./LoginPage";
import { LogoutPage } from "./LogoutPage";
import { ProfilePage } from "./ProfilePage";

function App() {
  return (
   <HashRouter>
    <AuthProvider>
      <Menu />
      <body>
      <Routes>
        <Route path="/" element={<Galeria/>}/> 
        <Route path="/Info" element={<Info/>}>
          <Route path=":slug" element={<InfoPage/>}/>
        </Route>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/LogoutPage" element={<LogoutPage/>}/>
        <Route path="/ProfilePage" element={<ProfilePage/>}/>
        
        <Route path="*" element={<p>Not found</p>} /> 
      </Routes>
      </body>
    </AuthProvider>
   </HashRouter>
  );
}

export default App;
/*HashRouter en React es un enrutador proporcionado por la biblioteca React Router. Este enrutador utiliza el hash en la URL para manejar la navegación y el enrutamiento interno en una SPA. Permite definir diferentes rutas en la aplicación y asociar componentes con esas rutas. Cuando el usuario navega a una ruta específica, el componente correspondiente se renderiza en la interfaz de usuario sin enviar una solicitud al servidor. */