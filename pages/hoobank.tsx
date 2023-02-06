import Navbar from "../components/Navbar"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiRadioButtonFill } from "react-icons/ri"
import Head from "next/head"

function Hoobank() {
  return (
    <>
    <Head>
      <title>Kaio | Front-End Developer</title>
    </Head>
    <Navbar />
    <main className="page">
      <section className="page-image">
        <div className="page-bg"/>
        <Image src="/assets/projects/hoobank.png" alt="hoobank" fill />
        <div>
          <h2>Hoobank</h2>
          <p>ReactJS / Tailwind CSS / TypeScript</p>
        </div>
      </section>

      <section className="page-description">
        <div className="page-description-text">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="page-description-project">A modern website with modern UI/UX made with React and TypeScript.</p>
          <div className="page-description-buttons">
            <Link href="https://github.com/kaiowsz/hoobank" target="_blank"  className="page-description-button">CODE</Link>
            <Link href="https://hoobank-kaiowsz.vercel.app" target="_blank" className="page-description-button">DEMO</Link>
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
          </ul>
        </div>
      </section>
    </main>
    </>
  )
}

export default Hoobank