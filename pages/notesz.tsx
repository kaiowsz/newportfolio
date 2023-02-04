import Navbar from '@/components/Navbar'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiRadioButtonFill } from "react-icons/ri"

function Notesz() {
  return (
    <>
    <Navbar/>
    <main className="page">
      <section className="page-image">
        <div className="page-bg"/>
        <Image src="/assets/projects/notesz.png" alt="notesz" fill />
        <div>
          <h2>Notesz</h2>
          <p>ReactJS / Styled Components / MySQL</p>
        </div>
      </section>

      <section className="page-description">
        <div className="page-description-text">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="page-description-project">Project created during the Rocketseat Explorer, using Vite and React to create the Front-End. The back-end was created using NodeJS, Express and SQLite. The users are able to create accounts inside this project, making possible the creation of notes. Also, they can mark the notes using tags and links and they also can update  the note or delete if they want.</p>
          <div className="page-description-buttons">
            <Link href="https://github.com/kaiowsz/notesz" target="_blank"  className="page-description-button">CODE</Link>
            <Link href="https://notesz-app.netlify.app" target="_blank" className="page-description-button">DEMO</Link>
          </div>
            <Link href="/" className="page-description-link">Back to the Home Page</Link>
        </div>
        <div className="page-description-techs">
          <h4>Technologies</h4>
          <ul>
            <li><RiRadioButtonFill/> HTML</li>
            <li><RiRadioButtonFill/> Styled-Components</li>
            <li><RiRadioButtonFill/> JavaScript</li>
            <li><RiRadioButtonFill/> ReactJS</li>
            <li><RiRadioButtonFill/> SQLite</li>
            <li><RiRadioButtonFill/> NodeJS</li>
          </ul>
        </div>
      </section>
    </main>
    </>
  )
}

export default Notesz