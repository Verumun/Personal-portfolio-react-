import React from 'react'
import './about.css'
import profile from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {BsFillFolderFill} from 'react-icons/bs'


const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={profile} alt="About Image" /> */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2 years</small>
            </article>

            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Clients</h5>
              <small>10+</small>
            </article>

            <article className="about__card">
              <BsFillFolderFill className='about__icon'/>
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad facere ex eum quibusdam asperiores, iusto debitis vel sunt numquam quae molestias nobis corporis. Suscipit ipsa ratione numquam at quia quis.</p>

          <a href="#contact" className="btn btn-primary">Let's  Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About