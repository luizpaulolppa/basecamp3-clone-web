import React, { useState } from 'react';

import './styles.css';
import logo from '../../images/logo.svg';

function CreateAccount() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    async function handleSubmit(e) {

    }

    return (
        <form onSubmit={handleSubmit}>

        </form>
        <div className="container-login">
            <div className="container-img-logo">
                <img className="img-logo" src={logo} alt="Logo Basecamp 3" />
            </div>
            <div className="card-login">
                <div className="subtitle-card">Type your name & email address to begin</div>
                <div className="input-block">
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Your username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div className="input-block">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your email (e.g. julie@widgetco.com)"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-block">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button className="btn-log-in">Next</button>
            </div>
        </div>
    );
}

export default CreateAccount;