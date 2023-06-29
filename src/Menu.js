import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from './auth';

function Menu(){
  const auth = useAuth();

    return(
        <header>
            <h1>Bienvenidos</h1>
            <nav>
               <ul>
                {routes.map(route =>{
                  if (route.private && !auth.user) return null;
                                                  
                return(

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
                 )})}
                </ul>
            </nav>
      </header>
    );
}
const routes = [];
routes.push({
  to: "/",
  text: 'Galeria',
  private: false,
});
routes.push({
  to: "/Info",
  text: 'Info',
  private: false,
});
routes.push({
  to: "/LoginPage",
  text: 'LoginPage',
  private: false && true,
});
routes.push({
  to: "/LogoutPage",
  text: 'LogoutPage',
  private: true,
});
routes.push({
  to: "/ProfilePage",
  text: 'ProfilePage',
  private: true,
});

export {Menu};
/* 
 con las etiquetas NavLink importadas desde react-router-dom a diferncia de las etiquetas <A> 
 el navegador no necesita renderizar todo el html
 
 clase 12 min 6:13 
 hacer que desaparezca loginPage del menu
 (miercoles 11:52)
 resuelto ( )
 
 */