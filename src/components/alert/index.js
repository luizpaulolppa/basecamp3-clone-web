import React from 'react';

import './styles.css';

function Alert({ message }) {

    return (
        <div className="alert">{message}</div>
    );
}

export default Alert;