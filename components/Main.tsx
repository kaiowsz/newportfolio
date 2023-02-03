import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"
import Link from 'next/link'

function Main() {
  return (
    <section className="main">
        <div className="main-container">
            <div className="main-content">
              <p>LET&apos;S BUILD SOMETHING TOGETHER</p>
              <h1>What&apos;s up! I&apos;m <span>Kaio</span></h1>
              <h1>A Front-End Developer</h1>
              <p className="description">
                I&apos;m a passionate self-taught Front-End Developer from Brazil. I&apos;m specialized in building the best digital experience possible.
              </p>
              <div className="main-icons">
                <Link href="https://www.linkedin.com/in/kaiosilveir4" target="_blank" className="main-link-icon">
                  <FaLinkedinIn />
                </Link>
                <Link href="https://github.com/kaiowsz" target="_blank" className="main-link-icon">
                  <FaGithub />
                </Link>
                <Link href="mailto:kaionpsa@gmail.com" className="main-link-icon">
                  <AiOutlineMail />
                </Link>
                <Link href="https://instagram.com/npkaio._" target="_blank" className="main-link-icon">
                  <FaInstagram />
                </Link>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Main