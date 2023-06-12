import React from "react";
import { NavLink } from "react-router-dom";

// con las etiquetas NavLink importadas desde react-router-dom a diferncia de las etiquetas <A> 
//el navegador no necesita renderizar todo el html

function Menu(){
    return(
        <header>
            <h1>Bienvenidos</h1>
            <nav>
               <ul>
                 <li>
                   <NavLink
                   style={({ isActive}) => ({color: isActive ? 'red' : 'blue'})}
                   to="/">Galeria</NavLink>
                 </li>
                 <li>
                   <NavLink 
                   style={({ isActive}) => ({color: isActive ? 'red' : 'blue'})}
                   to="/Info">Info</NavLink>
                 </li>
                </ul>
            </nav>
      </header>
    );
}

export {Menu};
