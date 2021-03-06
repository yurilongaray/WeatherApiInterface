import React, { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import api from '../../Api';

import './Home.css';

export default function Home() {

    useEffect(() => {

        api.get('/');
    });

    return (
        <div className="Home">
        <h1>Weather Application</h1>
            <Link to="/login" ><Button variant="success">Sign in</Button></Link>
            <Link to="/register"><Button>Sign up</Button></Link>
        </div>
    );
}