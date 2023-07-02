import React from "react";
import { useNavigate, Navigate } from "react-router-dom";

const adminList = ['Leandro', 'leo', 'lean'];

const AuthContext = React.createContext();

function AuthProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = React.useState(null);
    
    const login = ({ username }) => {
        const isAdmin = isAdmin.find(admin => admin === username);
        setUser({ username, isAdmin});
        navigate('/ProfilePage');
    };

    const logout = () => {
        setUser();
        navigate('/');
    };

    const auth = { user, login, logout };

    return(
        <AuthContext.Provider value={auth}>
            {children}
        </AuthContext.Provider>
    );
}

function useAuth() {
    const auth = React.useContext(AuthContext);
    return auth;
}

function AuthRoute(prop){
    const auth = useAuth();

    if (!auth.user){
        return <Navigate to="/loginPage"/>
    }

return prop.children;
}

export {
    AuthProvider,
    AuthRoute,
    useAuth
};