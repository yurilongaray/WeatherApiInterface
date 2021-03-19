import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import './Login.css';

async function loginUser(credentials) {

    console.log('credentials', credentials)
    return fetch('http://localhost:8000/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    }).then(data => {

        console.log('datareceived', data);
    })
}

export default function Login({ setToken }) {

    console.log('setToken', setToken)

    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {

        e.preventDefault();

        const token = await loginUser({
            user_name: userName,
            password
        });

        setToken(token);
    }

    return (
        <div className="login-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>
                        <p>Email</p>
                        <input type="text" onChange={e => setUserName(e.target.value)} required />
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

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};