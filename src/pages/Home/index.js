import React from 'react';
import { Link } from 'react-router-dom';

import './styles.css';

function Home() {

    return (
        <>
            <h1>Basecamo 3 (clone)</h1>
            <Link to="/create-new-account">Create new account</Link>
        </>
    );
}

export default Home;