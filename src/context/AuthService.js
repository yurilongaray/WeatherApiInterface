import { useState, useEffect } from 'react';

import api from '../Api';
import History from '../History';

export default function AuthService() {

    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token = localStorage.getItem('token');

        if (token) {

            api.defaults.headers.Authorization = `Bearer ${JSON.parse(token)}`;
            setAuthenticated(true);
        }

        setLoading(false);
    }, []);

    async function handleLogin({ email, password }) {

        const { data: { token } } = await api.post('/auth/login', { email, password });

        localStorage.setItem('token', JSON.stringify(token));
        api.defaults.headers.Authorization = `Bearer ${token}`;
        setAuthenticated(true);

        History.push('/weather');
    }

    function handleLogout() {

        setAuthenticated(false);
        localStorage.removeItem('token');
        api.defaults.headers.Authorization = undefined;

        History.push('/login');
    }

    return { authenticated, loading, handleLogin, handleLogout };
}