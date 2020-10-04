import React from 'react'
import './workhome.css'

export const Work = () =>
    <div>
        <div className="flex-c-outer">

            <div className="project" >
                <h1 className="title-header">GOHORT</h1>
                <div className="text">
                    <h2 className="section-header">Trip planning, simplified</h2>
                    <h4>Gohort is a collaborative trip planning tool that makes group planning as easy as pressing a button. It's still under construction, but you can see project updates on its page.</h4>
                    <h4>Stack</h4>
                    <p>Django, React, Redux, PostgreSQL, Docker, Blueprint, Jest</p>
                    <h4>Role</h4>
                    <p>I am currently building out some feature sets in a small team.</p>
                    <h4>Links</h4>
                    <a href="https://www.gohort.com/" className="portfolio-link">Gohort Website</a>
                </div>
            </div>

            <div className="project">
                <h1 className="title-header">AGUA VIDA</h1>
                <div className="text">
                    <h2 className="section-header">Make water treatment accessible. To everyone.</h2>
                    <h4> AGUA VIDA is a series of applications designed to help train rural water operators based in rural areas in Peru on chlorination formulas. These formulas are often complex (I helped write a 100+ page manual on them!). In a world where waterborne illnesses are still a leading cause of death, I decided to use technology to make chlorination knowledge more accessible.</h4>
                    <h4>Stack</h4>
                    <p>Java, Javascript, VueJS</p>
                    <h4>Role</h4>
                    <p>I am the sole developer and this is a personal project. Ongoing, but you can see current progress on their GitHub repos. Also, find Agua Vida in the Google Play Store for free!</p>
                    <h4>Links</h4>
                    <a href="https://github.com/steveschannel/AguaVida" className="portfolio-link">Android App GitHub</a>
                    <a href="https://github.com/steveschannel/avwebapp" className="portfolio-link">Progressive Webapp GitHub</a>
                    <a href="https://play.google.com/store/apps/details?id=com.Agua_Vida.aguavida" className="portfolio-link">Play Store Link</a>
                </div>
            </div>

            <div className="project">
                <h1 className="title-header">PEACE CORPS MISC</h1>
                <div className="text">
                    <h2 className="section-header">Water and Sanitation Information</h2>
                    <h4>During my time in the Peace Corps I managed several documentation efforts for my post, as well as creating different training materials to be used by other volunteers. From presentations to books, I helped create materials that stay in use to this day, and I continue to collaborate on a part-time basis to help my former post.</h4>
                    <h4>Stack</h4>
                    <p>Adobe Creative Suite</p>
                    <h4>Role</h4>
                    <p>Former volunteer who was responsible for editing and also managing relationships between my site and district engineers.</p>
                    {/* <h4>Links</h4>
                    <a href="https://www.gohort.com/">Gohort</a> */}
                </div>
            </div>

        </div >
        <a href="/PDF Design Portfolio.pdf" className="button" download="Stephen Chan Portfolio PDF.pdf"> Download PDF Portfolio </a>
    </div>
export default Work