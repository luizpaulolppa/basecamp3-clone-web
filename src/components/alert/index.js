import React from 'react';

import './styles.scss';

function Alert({ message }) {

    return (
        <div className="alert">{message}</div>
    );
}

export default Alert;