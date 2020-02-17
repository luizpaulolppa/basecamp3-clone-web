import React from 'react';

import './styles.scss';

function CardCompanyDashboard({company}) {

    return (
        <div className="card-panel">
            <strong>{company.title}</strong>
            <p className="subtitle">{company.subtitle}</p>
            <div className="card-people">
                {
                    company.users.map(user => (
                        <img className="img-card-people" title={user.name} src={user.url} />
                    ))
                }
                <div className="cont-card-people">+42</div>
            </div>
        </div>
    );
}

export default CardCompanyDashboard;