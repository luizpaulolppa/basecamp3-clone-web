import React from 'react';

import './styles.css';
import logo from '../../images/logo.svg';

function CreateAccount() {

    return (
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
                    />
                </div>
                <div className="input-block">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Your email (e.g. julie@widgetco.com)"
                        required
                    />
                </div>
                <div className="input-block">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Your password"
                        required
                    />
                </div>
                <button className="btn-log-in">Next</button>
            </div>
        </div>
    );
}

export default CreateAccount;