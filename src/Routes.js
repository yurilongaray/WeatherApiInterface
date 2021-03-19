import React, { useContext } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Context } from './context/AuthContext';

import Home from './components/home/Home';
import Login from './components/login/Login';
import Weather from './components/weather/Weather';


function CustomRoute({ isPrivate, ...rest }) {

    const { loading, authenticated } = useContext(Context);

    debugger;
    if (loading) {

        return <h2>Loading...</h2>;
    }

    if (isPrivate && !authenticated) {

        return <Redirect to="/login" />
    }

    return <Route {...rest} />;
}

export default function Routes() {

    return (
        <Switch>
            <CustomRoute exact path="/" component={Home} />
            <CustomRoute exact path="/login" component={Login} />
            <CustomRoute isPrivate exact path="/weather" component={Weather} />
        </Switch>
    );
}