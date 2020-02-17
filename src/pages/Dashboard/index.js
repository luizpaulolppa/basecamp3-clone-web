import React from 'react';

import './styles.scss';
import logoCompany from '../../images/logo_company.png';
import logoPlus from '../../images/plus.svg';
import ellipsis from '../../images/ellipsis.svg';

import Head from '../../components/Head';
import CardCompanyDashboard from '../../components/CardCompanyDashboard';

function Dashboard() {

    const company = {
        title: "ateliware HQ",
        subtitle: "Company-wide announcements and stuff everyone needs to know.",
        users: [
            { name: "Luiz Paulo", url: "https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBGqkSAE=--55302ee0cbd3772ff135c5e5e51300b91e3a6c3d/avatar-64-x2?v=1" },
            { name: "Luiz Paulo", url: "https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBGqkSAE=--55302ee0cbd3772ff135c5e5e51300b91e3a6c3d/avatar-64-x2?v=1" },
            { name: "Luiz Paulo", url: "https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBGqkSAE=--55302ee0cbd3772ff135c5e5e51300b91e3a6c3d/avatar-64-x2?v=1" },
            { name: "Luiz Paulo", url: "https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBGqkSAE=--55302ee0cbd3772ff135c5e5e51300b91e3a6c3d/avatar-64-x2?v=1" },
            { name: "Luiz Paulo", url: "https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBGqkSAE=--55302ee0cbd3772ff135c5e5e51300b91e3a6c3d/avatar-64-x2?v=1" },
            { name: "Luiz Paulo", url: "https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBGqkSAE=--55302ee0cbd3772ff135c5e5e51300b91e3a6c3d/avatar-64-x2?v=1" },
        ]
    };

    return (
        <>
            <Head />
            <div className="link-adminland">Adminland</div>

            <div className="container-panel">
                <div className="panel">

                    <div className="project-index">
                        <hr className="project-index-hr" />
                        <span className="project-index-company">ateliware</span>
                        <hr className="project-index-hr" />
                    </div>

                    <div className="cards-panel">
                        <div className="card-panel-logo-company">
                            <img className="img-logo-company" src={logoCompany} />
                        </div>
                        <CardCompanyDashboard company={company} />
                    </div>

                    <div className="project-index">
                        <div className="btn-new">
                            <img src={logoPlus} />
                            <p>New</p>
                        </div>
                        <hr className="project-index-hr" />
                        <span className="project-index-company">Teams</span>
                        <hr className="project-index-hr" />
                        <div className="btn-options">
                            <img src={ellipsis} />
                        </div>
                    </div>

                    <div className="cards-panel">
                        <CardCompanyDashboard company={company} />
                        <CardCompanyDashboard company={company} />
                        <CardCompanyDashboard company={company} />
                        <CardCompanyDashboard company={company} />
                    </div>

                    <div className="project-index">
                        <div className="btn-new">
                            <img src={logoPlus} />
                            <p>New</p>
                        </div>
                        <hr className="project-index-hr" />
                        <span className="project-index-company">Projects</span>
                        <hr className="project-index-hr" />
                        <div className="btn-options">
                            <img src={ellipsis} />
                        </div>
                    </div>

                    <div className="cards-panel">
                        <CardCompanyDashboard company={company} />
                        <CardCompanyDashboard company={company} />
                        <CardCompanyDashboard company={company} />
                        <CardCompanyDashboard company={company} />
                        <CardCompanyDashboard company={company} />
                        <CardCompanyDashboard company={company} />
                        <CardCompanyDashboard company={company} />
                    </div>

                </div>
            </div>

        </>
    );
}

export default Dashboard;