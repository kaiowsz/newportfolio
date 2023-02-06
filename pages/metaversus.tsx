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
        <Image src="/assets/projects/metaversus.png" alt="metaversus" fill />
        <div>
          <h2>Metaversus</h2>
          <p>NextJS / Tailwind / TypeScript </p>
        </div>
      </section>

      <section className="page-description">
        <div className="page-description-text">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="page-description-project">Metaversus - A modern website built using Next using technologies like TypeScript, Framer Motion, Tailwind CSS.</p>
          <div className="page-description-buttons">
            <Link href="https://github.com/kaiowsz/metaversus" target="_blank"  className="page-description-button">CODE</Link>
            <Link href="https://ks-metaversus.netlify.app" target="_blank" className="page-description-button">DEMO</Link>
          </div>
            <Link href="/" className="page-description-link">Back to the Home Page</Link>
        </div>
        <div className="page-description-techs">
          <h4>Technologies</h4>
          <ul>
            <li><RiRadioButtonFill/> HTML</li>
            <li><RiRadioButtonFill/> Tailwind</li>
            <li><RiRadioButtonFill/> TypeScript</li>
            <li><RiRadioButtonFill/> ReactJS</li>
            <li><RiRadioButtonFill/> NextJS</li>
            <li><RiRadioButtonFill/> Framer Motion</li>
          </ul>
        </div>
      </section>
    </main>
    </>
  )
}

export default Szap