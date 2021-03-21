import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom'

import './Login.css';

import { Context } from '../../context/AuthContext';

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { authenticated, handleLogin } = useContext(Context);

    if (authenticated) {

        return <Redirect to="/weather" />;
    }

    const handleSubmit = async e => {

        e.preventDefault();

        handleLogin({ email, password });
    };

    return (
        <div className="login-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>
                        <p>Email:</p>
                        <input type="text" placeholder="your.email@domain.com" onChange={e => setEmail(e.target.value)} required />
                    </label>
                </div>
                <br />
                <div className="row">
                    <label>
                        <p>Password:</p>
                        <input type="password" placeholder="*******" onChange={e => setPassword(e.target.value)} />
                    </label>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Button type="submit">Login</Button>
                    </div>
                    <div className="col-md-6">
                        <Link to="/"><Button variant="secondary">Home</Button></Link>
                    </div>
                </div>
            </form>
        </div>
    )
}