import React, { createContext } from 'react';

import AuthService from './AuthService';

const Context = createContext();

function AuthProvider({ children }) {

    const { authenticated, loading, handleLogin, handleLogout } = AuthService();

    return (
        <Context.Provider value={{ loading, authenticated, handleLogin, handleLogout }}>
            {children}
        </Context.Provider>
    );
}

export { Context, AuthProvider };