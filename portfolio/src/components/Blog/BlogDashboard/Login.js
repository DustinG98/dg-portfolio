import React, { useState } from 'react'

import axios from 'axios'

import { useHistory } from 'react-router-dom'

const LoginForm = () => {
    const history = useHistory()
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    })

    const handleChanges = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/auth/login', credentials)
            .then(res => {
                localStorage.setItem('auth-token', res.headers["auth-token"]);
                history.push('/blog/dashboard')
            })
            .catch(err => console.log(err))
    }
    return (
        <div>
            <h1>Login</h1>
            <form onSubmit={e => handleSubmit(e)}>
                <input type="text" name="email" placeholder="email address" value={credentials.email} onChange={e => handleChanges(e)}/>
                <input type="password" name="password" placeholder="password" value={credentials.password} onChange={e => handleChanges(e)}/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;