import { useState } from 'react';

export const Auth = () => {
    return (
        <div className="auth">
            <Login />
            <Register />
        </div>
    );
};

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="auth-container">
            <from>
                <h2> Login </h2>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>

                <button type="submit">Login</button>
            </from>
        </div>
    );
}

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="auth-container">
            <from>
                <h2> Register </h2>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>

                <button type="submit">Register</button>
            </from>
        </div>
    );
}

const Form = ({username, setUsername, password, setPassword}) => {}