import React from "react";

export const About = () => (
  <div className="flex justify-center mt-10 m-5">
    <div className="">
      <div className="max-w-prose">
        <div className="flex flex-col space-y-4">
          <p className="leading-tight">
            I'm a Computer Engineering graduate
            <span style={{ fontWeight: "bold" }}> (NJIT '17)</span> based in
            Jersey City, NJ
          </p>
          <p className="leading-tight">
            Recently, in March I completed a two-year service as a Peace Corps
            volunteer in Peru. I worked in the Water and Sanitation sector,
            where I assisted rural village water operators with system
            management and chlorination technologies.
          </p>
          <p className="leading-tight">
            I'm now back home and am currently looking for my first fulltime
            role as a fullstack engineer.
          </p>
          <button>
            <a
              href="/Resume.pdf"
              className="bg-color hover:bg-blue-500 p-2 rounded text-white"
              download="Resume.pdf"
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default About;
