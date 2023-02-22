import Navbar from '@/components/Navbar'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiRadioButtonFill } from "react-icons/ri"

function Cryptoverse() {
  return (
    <>
    <Head>
      <title>Kaio | Front-End Developer</title>
    </Head>
    <Navbar/>
    <main className="page">
      <section className="page-image">
        <div className="page-bg"/>
        <Image src="https://raw.githubusercontent.com/kaiowsz/cryptocurrencies/main/public/chart.png" alt="notesz" fill />
        <div>
          <h2>Cryptoverse</h2>
          <p>NextJS / SCSS / Redux</p>
        </div>
      </section>

      <section className="page-description">
        <div className="page-description-text">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="page-description-project">This project is a cryptocurrency website that can display the latest statistics of the most popular cryptocurrencies. Inside, you can view news, exchanges rates and charts about the cryptos. Project created to learn and apply the best practices of technologies such as Redux, NextJS and Typescript.</p>
          <div className="page-description-buttons">
            <Link href="https://github.com/kaiowsz/cryptocurrencies" target="_blank"  className="page-description-button">CODE</Link>
            <Link href="https://cryptocurrencies-kaiowsz.vercel.app/" target="_blank" className="page-description-button">DEMO</Link>
          </div>
            <Link href="/" className="page-description-link">Back to the Home Page</Link>
        </div>
        <div className="page-description-techs">
          <h4>Technologies</h4>
          <ul>
            <li><RiRadioButtonFill/> HTML</li>
            <li><RiRadioButtonFill/> SCSS</li>
            <li><RiRadioButtonFill/> TypeScript</li>
            <li><RiRadioButtonFill/> ReactJS</li>
            <li><RiRadioButtonFill/> NextJS</li>
            <li><RiRadioButtonFill/> Redux</li>
            <li><RiRadioButtonFill/> ChartJS</li>
          </ul>
        </div>
      </section>
    </main>
    </>
  )
}

export default Cryptoverse