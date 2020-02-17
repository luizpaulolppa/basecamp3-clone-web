import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

import './styles.scss';
import logo from '../../images/logo.svg';
import api from '../../services/api';
import Alert from '../../components/alert';

import { createUser } from "../../services/localData";

function CreateAccount() {
    const history = useHistory();

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");

    const [errors, setErrors] = useState([]);

    async function handleSubmit(e) {
        e.preventDefault();

        const data = {
            name,
            password,
            email
        }

        // try {
        //     const respose = await api.post('/api/users', data);
        //     setErrors([]);
        //     console.log(respose.data);
        // } catch (ex) {
        //     if (ex.response.data.errors) {
        //         setErrors(ex.response.data.errors);
        //     }
        // }

        createUser(data);
        history.push("/create-new-company");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container-login">
                <div className="container-img-logo">
                    <img className="img-logo" src={logo} alt="Logo Basecamp 3" />
                </div>
                <div className="card-login">
                    <div className="subtitle-card">Type your name & email address to begin</div>
                    {
                        errors.map(err => (
                            <Alert key={err.msg} message={err.msg} />
                        ))
                    }
                    <br />
                    <div className="input-block">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
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
                    <button type="submit" className="btn-log-in">Next</button>
                </div>
            </div>
        </form>
    );
}

export default CreateAccount;