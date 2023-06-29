import React from "react";
import { useAuth } from "./auth";

function LoginPage(){
    const auth = useAuth();
    const [username, setUsername] = React.useState('')

    const login = (e) => {
        e.preventDefault();
        auth.login({username});
    }

    return(
        <>
        <h1>Registrate</h1>

        <form onSubmit={login}>
            <label>Escribe tu Nombre de usuario</label>
            <input 
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
            <br/>
            <button type="submit">Entrar</button>

        </form>
        </>
    );
};

export { LoginPage };

