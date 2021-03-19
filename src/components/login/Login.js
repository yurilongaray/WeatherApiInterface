import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import './Login.css';

import { Context } from '../../context/AuthContext';

export default function Login() {

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { authenticated, handleLogin } = useContext(Context);

    const handleSubmit = async e => {

        e.preventDefault();

        handleLogin({ email, password });
    };

    return (
        <div className="login-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>
                        <p>Email</p>
                        <input type="text" onChange={e => setEmail(e.target.value)} required />
                    </label>
                </div>
                <div className="row">
                    <label>
                        <p>Password</p>
                        <input type="password" onChange={e => setPassword(e.target.value)} />
                    </label>
                </div>
                <div>
                    <Button type="submit">Create account</Button>
                </div>
            </form>
        </div>
    )
}