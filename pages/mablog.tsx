import Navbar from "../components/Navbar"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiRadioButtonFill } from "react-icons/ri"
import Head from "next/head"

function Szap() {
  return (
    <>
    <Head>
      <title>Kaio | Front-End Developer</title>
    </Head>
    <Navbar />
    <main className="page">
      <section className="page-image">
        <div className="page-bg"/>
        <Image src="/assets/projects/mablog.png" alt="mablog" fill />
        <div>
          <h2>Mablog</h2>
          <p>NextJS / ReactJS / Tailwind CSS</p>
        </div>
      </section>

      <section className="page-description">
        <div className="page-description-text">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="page-description-project">Project created to learn more of best practices of NextJS recommended by the documentation and using Sanity, that is a headless CMS to content management. Project fully responsive. </p>
          <div className="page-description-buttons">
            <Link href="https://github.com/kaiowsz/mablog" target="_blank"  className="page-description-button">CODE</Link>
            <Link href="https://mablogg.vercel.app/" target="_blank" className="page-description-button">DEMO</Link>
          </div>
            <Link href="/" className="page-description-link">Back to the Home Page</Link>
        </div>
        <div className="page-description-techs">
          <h4>Technologies</h4>
          <ul>
            <li><RiRadioButtonFill/> HTML</li>
            <li><RiRadioButtonFill/> Tailwind CSS</li>
            <li><RiRadioButtonFill/> TypeScript</li>
            <li><RiRadioButtonFill/> ReactJS</li>
            <li><RiRadioButtonFill/> NextJS</li>
            <li><RiRadioButtonFill/> Sanity</li>
          </ul>
        </div>
      </section>
    </main>
    </>
  )
}

export default Szap