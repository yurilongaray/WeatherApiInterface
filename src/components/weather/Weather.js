import React, { useState, useContext, useEffect } from 'react';
import { Button } from 'react-bootstrap';
import api from '../../Api';

import './Weather.css';

import { Context } from '../../context/AuthContext';

export default function Weather() {

    const [city, setCity] = useState();
    const [x, setX] = useState();
    const { handleLogout } = useContext(Context);

    const getCityInformations = async () => {

        const cityToConsider = city || 'Vancouver';

        const result = await api.get(`/weather?city=${cityToConsider}`);

        setX(cityToConsider)
    }

    return (
        <div className="weather-wrapper">
            <label>See your city's weather</label>
            <div className="row">
                <label>
                    <input type="text" defaultValue="Vancouver" onChange={e => setCity(e.target.value)} required />
                </label>
            </div>
            <div className="row">
                <div className="col-md-6">
                    <Button type="submit" onClick={e => getCityInformations()}>Show me!</Button>
                </div>
                <div className="col-md-6">
                    <Button type="button" variant="danger" onClick={e => handleLogout()}>Logout</Button>
                </div>
            </div>
            <h1>{x}</h1>
        </div>
    );
}