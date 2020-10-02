import React from 'react'
import './workhome.css'
import { Portfolio } from './PDF Design Portfolio.pdf'

export const Work = () =>
    <div>
        <div className="flex-c-outer">

            <div className="project" >
                <h1>GOHORT</h1>
            </div>

            <div className="project">
                <h1>AGUA VIDA</h1>
            </div>

            <div className="project">
                <h1>PEACE CORPS</h1>
            </div>

        </div >
        <a href={{ Portfolio }} className="button" download="download"> Download PDF Portfolio </a>
    </div>
export default Work