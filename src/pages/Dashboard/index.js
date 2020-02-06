import React from 'react';

import './styles.css';

function Dashboard() {

    return (
        <>

            <nav>
                <img class="logo-home" src="https://help.basecamp.com/images/logo-bc.png" />

                <div class="items-nav">
                    <div class="item-nav">
                        <img class="logo-item-nav"
                            src="https://bc3-production-assets-cdn.basecamp-static.com/assets/icons/nav/home-c921c7a5ea43e9ca5f53878b71ceb4b4a086cfc51bb40a3e0dab5e82c20d909f.svg" />
                        <strong>Home</strong>
                    </div>
                    <div class="item-nav">
                        <img class="logo-item-nav"
                            src="https://bc3-production-assets-cdn.basecamp-static.com/assets/icons/nav/pings-dc50fb471ed61083d8840658a9a22b49774764d2225b90aca2bfc9a94960729a.svg" />
                        <strong>Pings</strong>
                    </div>
                    <div class="item-nav">
                        <img class="logo-item-nav"
                            src="https://bc3-production-assets-cdn.basecamp-static.com/assets/icons/nav/inbox-01cf9aad826a47109f288d7f0a1ff3a9dab584abf8353526aa4754d7e532db00.svg" />
                        <strong>Hey!</strong>
                    </div>
                    <div class="item-nav">
                        <img class="logo-item-nav"
                            src="https://bc3-production-assets-cdn.basecamp-static.com/assets/icons/nav/activity-73734455698459c6f2507a2e011bc3c7af6a47f81a30c2d9530c8d5b6fd87448.svg" />
                        <strong>Activity</strong>
                    </div>
                    <div class="item-nav">
                        <img class="logo-item-nav"
                            src="https://bc3-production-assets-cdn.basecamp-static.com/assets/icons/nav/my-stuff-ecda53a4fff4b55d7ca244d1d67dd99ae1b3a674722dc2ebefad7fa11f3ce490.svg" />
                        <strong>My Stuff</strong>
                    </div>
                    <div class="item-nav">
                        <img class="logo-item-nav"
                            src="https://bc3-production-assets-cdn.basecamp-static.com/assets/icons/nav/search-8fa21ccc7a917cdfc05b14d6a95b40bcc0fd6c30af0ec78c24fe90c6a298d8f4.svg" />
                        <strong>Find</strong>
                    </div>
                </div>

                <div class="item-nav-menu">LP</div>
            </nav>

            <div class="link-adminland">Adminland</div>

            <div class="container-panel">
                <div class="panel">

                    <div class="project-index">
                        <hr class="project-index-hr" />
                        <span class="project-index-company">ateliware</span>
                        <hr class="project-index-hr" />
                    </div>

                    <div class="cards-panel">
                        <div class="card-panel-logo-company">
                            <img class="img-logo-company"
                                src="https://bc3-production-us-east-2.s3.us-east-2.amazonaws.com/7mf381k45c54tavuuh44ss9uwgzi?response-content-disposition=inline%3B%20filename%3D%22logo_basecamp%20%25282%2529.png%22%3B%20filename%2A%3DUTF-8%27%27logo_basecamp%2520%25282%2529.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJA4YU4LL6QTTS55A%2F20200123%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20200123T230309Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=bf090d1d82ba4e9610d30981e28bd70b48c2ebe424cb8d89d8a685bb4f69a219" />
                        </div>
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                    </div>

                    <div class="project-index">
                        <button type="button" class="btn-new">New</button>
                        <hr class="project-index-hr" />
                        <span class="project-index-company">Teams</span>
                        <hr class="project-index-hr" />
                        <button type="button" class="btn-options"></button>
                    </div>

                    <div class="cards-panel">
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                    </div>

                    <div class="project-index">
                        <button type="button" class="btn-new">New</button>
                        <hr class="project-index-hr" />
                        <span class="project-index-company">Projects</span>
                        <hr class="project-index-hr" />
                        <button type="button" class="btn-options"></button>
                    </div>

                    <div class="cards-panel">
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                        <div class="card-panel">
                            <strong>ateliware HQ</strong>
                            <p style="font-size: 13px;">Company-wide announcements and stuff everyone needs to know.</p>
                            <div class="card-people">
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBP5jkwE=--552d16bc9a4f44c1bc5dad8a55c3ab9457d5c53b/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBF6SjQE=--dcda0442414f5878cbe0846c7f57767d173bc70c/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBDt1SAE=--ea49526450912db2afb6e97a17c0226d346b5c80/avatar-64-x3?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBKLURwE=--db5559c45254578aca71a02d68548179d00e55a1/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOPLdwE=--980863edcc424cc6996528d8e8c033cf69ae271d/avatar-64-x1?v=1" />
                                <img class="img-card-people"
                                    src="https://bc3-production-assets-cdn.basecamp-static.com/4104185/people/BAhpBOVISgE=--e5a59a805b67a287fdb58455536a06b31987ed90/avatar-64-x1?v=1" />
                                <div class="cont-card-people">+42</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Dashboard;