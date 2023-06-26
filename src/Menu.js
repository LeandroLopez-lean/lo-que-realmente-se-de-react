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
                {routes.map(route => (
                 <li key={route.to}>
                   <NavLink
                   style={({ isActive}) => ({
                     color: isActive ? 'red' : 'blue',
                    })}
                   to={route.to}
                   >
                    {route.text}
                   </NavLink>
                 </li>
                 ))}
                 {/* <li>
                   <NavLink 
                   style={({ isActive}) => ({color: isActive ? 'red' : 'blue'})}
                   to="/Info">Info</NavLink>
                 </li> */}
                </ul>
            </nav>
      </header>
    );
}
const routes = [];
routes.push({
  to: "/",
  text: 'Galeria',
});
routes.push({
  to: "/Info",
  text: 'Info',
});
routes.push({
  to: "/LoginPage",
  text: 'LoginPage',
});
routes.push({
  to: "/LogoutPage",
  text: 'LogoutPage',
});
routes.push({
  to: "/ProfilePage",
  text: 'ProfilePage',
});

export {Menu};
