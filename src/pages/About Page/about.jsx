import React from 'react';
import me from './1.png'
import './about.css';
// import '%PUBLIC_URL%/Resume.pdf'

export const About = () =>
    <div>
        <div className="flex-container-outer">

            <div className="about" >
                <img src={me} alt="Avatar" className="image" />
                <h2 style={{ color: "#235789" }} >FULLSTACK ENGINEER </h2>
                <div className="text" >
                    <div>
                        <p>I'm a Computer Engineering graduate <span style={{ fontWeight: "bold" }}>(NJIT '17)</span> based in Jersey City, NJ</p>
                        <p> Recently, in March I completed a two-year service as a Peace Corps volunteer in Peru. I worked in the Water and Sanitation sector, where I assisted rural village water operators with system management and chlorination technologies. </p>
                        <p> I'm now back home and am currently looking for my first fulltime role as a software engineer.</p>
                    </div>
                </div>
                <a href="/Resume.pdf" className="button"
                // download="Resume.pdf"
                > View Resume </a>
            </div>

            <div className="skills">
                <div className="text" style={{
                }}>
                    <h2 className="section-header">Skills</h2>
                    <h4>Programming Languages</h4>
                    <p>Python, Javascript, Java, C++</p>
                    <h4>Frameworks</h4>
                    <p>Django, VueJS, React</p>
                    <h4>Database</h4>
                    <p>PostgreSQL</p>
                    <h4>Frontend</h4>
                    <p>HTML5, CSS3, Bootstrap</p>
                    <h4>Misc</h4>
                    <p>Git, Unit Testing, Linux, Redux, Docker, Wordpress, Adobe Creative Suite, Sketch,</p>
                    <h4>Foreign Languages</h4>
                    <p>Spanish - Advanced Low</p>
                </div>
            </div>

            <div className="skills">
                <div className="text" style={{
                }}>
                    <h2 className="section-header">Employment History</h2>
                    <h4>US Peace Corps - Peru </h4>
                    <span className="dates-worked">March 2018 - March 2020</span>
                    <p>Trained rural water operators on the use of chlorination technologies local to Peru, improving water quality for a district of over 10,000 inhabitants.</p>
                    <h4>ITMS - NJIT</h4>
                    <span className="dates-worked">September 2015 - June 2017</span>
                    <p>Worked with team of students to meet the computing needs of staff and students, initiating repairs and maintaining computers and equipment throughout the campus.</p>
                    <h4>KIPP NJ</h4>
                    <span className="dates-worked">June 2016 - May 2017</span>
                    <p>Worked with IT team across Newark school district to manage and maintain computing systems within network. </p>
                    <h4>The Vector, Student Newspaper - NJIT</h4>
                    <span className="dates-worked">February 2013 - June 2017</span>
                    <p>Led the editorial team and oversaw all newspaper operations to publish weekly at the host school, NJIT.</p>
                    <h4>GDS - University Heights</h4>
                    <span className="dates-worked">October 2015 - August 2017</span>
                    <p>Created and established brands and design languages with logos, menus, maps, and signs for new ventures and food venues marketed to students.</p>
                </div>
            </div>

        </div >
    </div>

export default About