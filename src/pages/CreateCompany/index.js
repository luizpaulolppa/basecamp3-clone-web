import React, { useState } from 'react';

import './styles.scss';
import logo from '../../images/logo.svg';
import { createUser, getUser } from "../../services/localData";
import { useHistory } from "react-router-dom";

function CreateCompany() {
    const history = useHistory();

    const [name, setName] = useState("");
    const [title, setTitle] = useState("");

    async function handleSubmit(event) {
        event.preventDefault();
        console.log("sfasfasdf");

        let user = getUser();
        user.company = {
            name: name,
            title: title
        }
        createUser(user);
        history.push("/dashboard");
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container-login">
                <div className="container-img-logo">
                    <img className="img-logo" src={logo} />
                </div>
                <div className="card-login">
                    <div className="title-card">First, tell us a bit about yourself and your company.</div>
                    <div className="input-block">
                        <input
                            type="text"
                            id="name"
                            required
                            placeholder="Your company name"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="input-block">
                        <input
                            type="text"
                            id="job"
                            placeholder="Your job title (optional)"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <button type="submit" className="btn-log-in">Next</button>
                </div>
            </div>
        </form>
    )
}

export default CreateCompany;