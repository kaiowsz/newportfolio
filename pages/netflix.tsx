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
        <Image src="/assets/projects/netflixclone.png" alt="netflix clone" fill />
        <div>
          <h2>Netflix Clone</h2>
          <p>ReactJS / SCSS</p>
        </div>
      </section>

      <section className="page-description">
        <div className="page-description-text">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="page-description-project">Project created to learn more of best practices of ReactJS recommended by the documentation and handling external API&apos;s. Project fully responsive.</p>
          <div className="page-description-buttons">
            <Link href="https://github.com/kaiowsz/netflix_clone" target="_blank"  className="page-description-button">CODE</Link>
            <Link href="https://netflix-clone-kaiowsz.vercel.app/" target="_blank" className="page-description-button">DEMO</Link>
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
            <li><RiRadioButtonFill/> TheMovieDB (API)</li>
          </ul>
        </div>
      </section>
    </main>
    </>
  )
}

export default Szap