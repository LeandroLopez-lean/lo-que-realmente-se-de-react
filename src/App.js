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
