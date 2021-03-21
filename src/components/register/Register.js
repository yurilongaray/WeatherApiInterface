import React, { useState, useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom'
import api from '../../Api';

import './Register.css';

import { Context } from '../../context/AuthContext';

export default function Register() {

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const { authenticated, handleLogin } = useContext(Context);

    if (authenticated) {

        return <Redirect to="/weather" />;
    }

    const handleSubmit = async e => {

        e.preventDefault();

        const payloadToSend = { name, email, password };

        return api.post('/user/register', payloadToSend).then(async () => {

            await handleLogin({ name, email, password });
        }).catch(({ response }) => {

            if (response && response.data && response.data.message) {

                console.log(response.data);
                alert(response.data.message);
            }
        });
    };

    return (
        <div className="register-wrapper">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <label>
                        <p>Name</p>
                        <input type="text" placeholder="Yuri Caldeira" onChange={e => setName(e.target.value)} required />
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
                        <input type="password" placeholder="*******" onChange={e => setPassword(e.target.value)} required />
                    </label>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <Button type="submit">Submit</Button>
                    </div>
                    <div className="col-md-6">
                        <Link to="/"><Button variant="secondary">Home</Button></Link>
                    </div>
                </div>
            </form>
        </div>
    )
}