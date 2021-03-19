import React from 'react';
import { Router } from 'react-router-dom';

import Routes from './Routes';
import History from './History';

import { AuthProvider } from './context/AuthContext';

import './App.css';

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <div className="wrapper">
                    <AuthProvider>
                        <Router history={History}>
                            <Routes />
                        </Router>
                    </AuthProvider>
                </div>
            </header>
        </div>
    );
}

export default App;