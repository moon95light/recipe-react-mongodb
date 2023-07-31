import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
/* eslint-disable no-restricted-globals */

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

    const [_, setCookies] = useCookies(["access_token"]);

    const navigate = useNavigate()

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/auth/login", {
                username,
                password,
            });
            if (response.data.message == "User doesn't Exist!") {
                navigate("/");
                alert("User doesn't Exist!");
            }
            if (response.data.message == "Username or Password is incorrect") {
                alert("Username or Password is incorrect.");
                navigate("/");
            }

            setCookies("access_token", response.data.token);
            window.localStorage.setItem("userID", response.data.userID);
            navigate("/");

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <Form
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label="Login"
            onSubmit={onSubmit}
        />
    );
}

const Register = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const onSubmit = async () => {
        event.preventDefault();
        try {
            const aa = await axios.post("http://localhost:3001/auth/register", {
                username,
                password,
            });
            if (aa.data.message == "User already exists!")
                alert("NO")
            else
                alert("registeration Competed! Now Login.")
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <Form
            username={username}
            setUsername={setUsername}
            password={password}
            setPassword={setPassword}
            label="Register"
            onSubmit={onSubmit}
        />
    );
}

const Form = ({ username, setUsername, password, setPassword, label, onSubmit, }) => {
    return (
        <div className="auth-container">
            <form onSubmit={onSubmit}>
                <h2> {label} </h2>
                <div className="form-group">
                    <label htmlFor="username">Username: </label>
                    <input type="text" id="username" value={username} onChange={(event) => setUsername(event.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
                </div>

                <button type="submit">{label}</button>
            </form>
        </div>
    )
}