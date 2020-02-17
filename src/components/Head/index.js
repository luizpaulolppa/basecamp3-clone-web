import React from 'react';

import './styles.scss';

import logo from '../../images/logo.svg';

function Head() {

    return (
        <nav>
            <img className="logo-home" src={logo} />

            <div className="items-nav">
                <div className="item-nav">
                    <img className="logo-item-nav"
                        src="https://bc3-production-assets-cdn.basecamp-static.com/assets/icons/nav/home-c921c7a5ea43e9ca5f53878b71ceb4b4a086cfc51bb40a3e0dab5e82c20d909f.svg" />
                    <strong>Home</strong>
                </div>
                <div className="item-nav">
                    <img className="logo-item-nav"
                        src="https://bc3-production-assets-cdn.basecamp-static.com/assets/icons/nav/pings-dc50fb471ed61083d8840658a9a22b49774764d2225b90aca2bfc9a94960729a.svg" />
                    <strong>Pings</strong>
                </div>
                <div className="item-nav">
                    <img className="logo-item-nav"
                        src="https://bc3-production-assets-cdn.basecamp-static.com/assets/icons/nav/inbox-01cf9aad826a47109f288d7f0a1ff3a9dab584abf8353526aa4754d7e532db00.svg" />
                    <strong>Hey!</strong>
                </div>
                <div className="item-nav">
                    <img className="logo-item-nav"
                        src="https://bc3-production-assets-cdn.basecamp-static.com/assets/icons/nav/activity-73734455698459c6f2507a2e011bc3c7af6a47f81a30c2d9530c8d5b6fd87448.svg" />
                    <strong>Activity</strong>
                </div>
                <div className="item-nav">
                    <img className="logo-item-nav"
                        src="https://bc3-production-assets-cdn.basecamp-static.com/assets/icons/nav/my-stuff-ecda53a4fff4b55d7ca244d1d67dd99ae1b3a674722dc2ebefad7fa11f3ce490.svg" />
                    <strong>My Stuff</strong>
                </div>
                <div className="item-nav">
                    <img className="logo-item-nav"
                        src="https://bc3-production-assets-cdn.basecamp-static.com/assets/icons/nav/search-8fa21ccc7a917cdfc05b14d6a95b40bcc0fd6c30af0ec78c24fe90c6a298d8f4.svg" />
                    <strong>Find</strong>
                </div>
            </div>

            <div className="item-nav-menu">LP</div>
        </nav>
    );
}

export default Head;