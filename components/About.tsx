import React from 'react'
import { Link } from 'react-scroll'

function About() {
  return (
    <section className="about">
        <div className="about-content">
            <div className="about-text">
                <span>ABOUT</span>
                <h2>Who I Am</h2>
                <p>Hi there! I&apos;m a Front-end Developer. I started my studies in beggining of 2022. Since then, my focus is just learning more to increase my knowledge, and then, become more capable.

                My goal is to use my skills to help people grow their business.

                I&apos;m able to create your design, making it totally harmonious. I can also develop all parts of your web application from scratch, focusing in deliver the best work possible.</p>

                <Link smooth duration={400} to="projects" className="link">Check out some of my projects</Link>
            </div>

            <div className="about-image">
              {/* <img src="/about.jpg" alt="" /> */}
            </div>

        </div>
    </section>
  )
}

export default About