import React from 'react'

const LoginForm = () => {
    return (
        <div>
            <h1>Login</h1>
            <form>
                <input name="email" placeholder="email address"/>
                <input name="password" placeholder="password"/>
                <button>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;