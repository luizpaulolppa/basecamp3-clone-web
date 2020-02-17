import React from 'react';
import { Link } from 'react-router-dom';

import './styles.scss';

function Home() {

    return (
        <>
            <h1>Basecamp 3 (clone)</h1>
            <Link to="/create-new-account">Create new account</Link>
        </>
    );
}

export default Home;