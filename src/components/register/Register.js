import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import api from '../../Api';

import './Register.css';

import { Context } from '../../context/AuthContext';

export default function Register() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { authenticated, handleLogin } = useContext(Context);

    const handleSubmit = async e => {

        e.preventDefault();

        try {

            const payloadToSend = { name, email, password };

            await api.post('/user/register', payloadToSend);

            await handleLogin({ name, email, password });
        } catch (error) {

            console.error(error);
        }
    };

    return (
        <div className="register-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>
                        <p>Name</p>
                        <input type="text" placeholder="Yuri" onChange={e => setName(e.target.value)} required />
                    </label>
                </div>
                <br />
                <div className="row">
                    <label>
                        <p>Email</p>
                        <input type="text" placeholder="your.email@domain.com" onChange={e => setEmail(e.target.value)} required />
                    </label>
                </div>
                <br />
                <div className="row">
                    <label>
                        <p>Password</p>
                        <input type="password" placeholder="*******" onChange={e => setPassword(e.target.value)} />
                    </label>
                </div>
                <div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    )
}