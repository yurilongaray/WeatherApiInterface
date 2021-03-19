import React from 'react';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';

import './Home.css';

export default function Home() {

    return (
        <div className="Home">
        <h1>Weather Application</h1>
            <Link to="/" ><Button variant="success">Sign in</Button></Link>
            <Link to="/login"><Button>Sign up</Button></Link>
        </div>
    );
}