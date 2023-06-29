import React from "react";
import { useAuth } from "./auth";

function ProfilePage(){
    const auth = useAuth();

    return(
        <>
         <h1>bienvenido, {auth.username}</h1>
        </>    
    );
};

export { ProfilePage };