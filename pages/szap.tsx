import Navbar from "../components/Navbar"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiRadioButtonFill } from "react-icons/ri"

function Szap() {
  return (
    <>
    <Navbar />
    <main className="page">
      <section className="page-image">
        <div className="page-bg"/>
        <Image src="/assets/projects/szap.png" alt="szap" fill />
        <div>
          <h2>SZap</h2>
          <p>ReactJS / SCSS / Firebase</p>
        </div>
      </section>

      <section className="page-description">
        <div className="page-description-text">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="page-description-project">A realtime chat messaging application made with React and Firebase. Within, the users can send messages and images to each other in real time. Project created to practice my knowledge in my current technologies.</p>
          <div className="page-description-buttons">
            <Link href="https://github.com/kaiowsz/szap" target="_blank"  className="page-description-button">CODE</Link>
            <Link href="https://the-szap.vercel.app/login" target="_blank" className="page-description-button">DEMO</Link>
          </div>
            <Link href="/" className="page-description-link">Back to the Home Page</Link>
        </div>
        <div className="page-description-techs">
          <h4>Technologies</h4>
          <ul>
            <li><RiRadioButtonFill/> HTML</li>
            <li><RiRadioButtonFill/> SCSS</li>
            <li><RiRadioButtonFill/> JavaScript</li>
            <li><RiRadioButtonFill/> ReactJS</li>
            <li><RiRadioButtonFill/> Firebase</li>
          </ul>
        </div>
      </section>
    </main>
    </>
  )
}

export default Szap