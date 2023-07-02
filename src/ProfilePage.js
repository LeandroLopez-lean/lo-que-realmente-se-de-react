import React from "react";
import { AuthRoute, useAuth } from "./auth";

function ProfilePage() {
    const auth = useAuth();

    return (
        <AuthRoute>
            <h1>bienvenido, {auth.user?.username}</h1>
        </AuthRoute>
    );
};

export { ProfilePage };