import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Home from './components/home/Home';
import Weather from './components/weather/Weather';
import Login from './components/login/Login';
import authorization from './components/authorization/Authorization';

function App() {

    const { token, setToken } = authorization();

    if (!token) {

        return <Login setToken={setToken} />
    }

    return (
        <div className="App">
          <header className="App-header">
            <div className="wrapper">
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/weather">
                            <Weather />
                        </Route>
                        <Route exact path="/login">
                            <Login />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </div>
      </header>
    </div>
    );
}

export default App;