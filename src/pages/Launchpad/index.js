import React from 'react';

import './styles.scss';
import logo from '../../images/logo.svg';

function Launchpad() {

    return (
        <>
            <main>
                <div className="logo">
                    <img src={logo} />
                    <p>Launchpad</p>
                </div>
                <div className="actions">
                    <a href="/">Log out</a>
                </div>
            </main>
        </>
    );
}

export default Launchpad;