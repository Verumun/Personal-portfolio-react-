import React from "react";
import "./experience.css";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>The Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Skill-Set</h3>

          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* CSS */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* SASS */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />

              <div>
                <h4>SASS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* TAILWIND */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>TAILWIND</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            {/* JAVSCRIPT */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>

            {/* REACT */}
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icons" />
              <div>
                <h4>REACT</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
