import React, { useState, useContext } from 'react';
import { Button, Table } from 'react-bootstrap';
import ReactLoading from "react-loading";
import api from '../../Api';

import './Weather.css';

import { Context } from '../../context/AuthContext';

export default function Weather() {

    const [city, setCity] = useState();
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);
    const { handleLogout } = useContext(Context);
    const cityToConsider = city || 'Vancouver';

    const getCityInformations = async () => {

        setLoading(true);

        api.get(`/weather?city=${cityToConsider}`).then(result => {

            setLoading(false);

            setResult(result.data);
        }).catch(error => {

            console.error(error);

            alert('City not found!');

            setLoading(false);
        });
    }

    return (
        <div className="weather-wrapper">
            {loading ? (
                <div className="col-md-6 offset-md-3">
                    <ReactLoading type="spokes" color="#fff" />
                </div>
            ) : (
                <div>
                    <div className="col-md-6 offset-md-3">
                        <label>City:</label>
                        <div className="row">
                            <div className="col-md-12">
                                <label>
                                    <input type="text" placeholder="Ex.: Vancouver" onChange={e => setCity(e.target.value)} required />
                                </label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Button type="submit" onClick={e => getCityInformations()}>Show</Button>
                            </div>
                            <div className="col-md-6">
                                <Button type="button" variant="danger" onClick={e => handleLogout()}>Logout</Button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <h1>{result ? `${result.cityName} (${result.country})` : ''}</h1>
                    <Table className="Table col-md-12" striped bordered hover>
                        <thead>
                            <tr>
                                <th>Temperature (Fahrenheit)</th>
                                <th>Temperature (Celsius)</th>
                                <th>Wind Speed (kph)</th>
                                <th>Weather Conditions</th>
                            </tr>
                        </thead>
                        {Boolean(result) ? (
                            <tbody>
                                <tr>
                                    <td>{result.tempFahrenheit || ''}</td>
                                    <td>{result.tempCelsius || ''}</td>
                                    <td>{result.windSpeedKph || ''}</td>
                                    <td>{result.weatherDescription || ''}</td>
                                </tr>
                            </tbody>
                        ) : (
                            <tbody>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                                <td>-</td>
                            </tbody>
                        )}
                    </Table>
                </div>
            )}
        </div>
    );
}