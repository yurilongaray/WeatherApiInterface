import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import api from '../../Api';

import './Weather.css';

export default function Weather() {

    const [city, setCity] = useState();

    const handleSubmit = async e => {

        e.preventDefault();

        console.log('city', city)

        if (city) {

            const result = await api.get(`/weather?city=${city}`);
        }
    };

    return (
        <div className="weather-wrapper">
            <label>See your city's weather</label>
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>
                        <input type="text" defaultValue="Vancouver" onChange={e => setCity(e.target.value)} required />
                    </label>
                </div>
                <Button type="submit">Submit</Button>
            </form>
        </div>
    );
}