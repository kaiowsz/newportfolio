import Navbar from "../components/Navbar"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { RiRadioButtonFill } from "react-icons/ri"
import Head from "next/head"

function Ecommerce() {
  return (
    <>
    <Head>
      <title>Kaio | Front-End Developer</title>
    </Head>
    <Navbar />
    <main className="page">
      <section className="page-image">
        <div className="page-bg"/>
        <Image src="/assets/projects/ecommerce_stripe.png" alt="ecommerce" fill />
        <div>
          <h2>Ecommerce</h2>
          <p>ReactJS / NextJS / Stripe</p>
        </div>
      </section>

      <section className="page-description">
        <div className="page-description-text">
          <p>Project</p>
          <h2>Overview</h2>
          <p className="page-description-project">An eCommerce fully functional with payment methods using Stripe and Sanity. Made with NextJS. </p>
          <div className="page-description-buttons">
            <Link href="https://github.com/kaiowsz/eCommerce_stripe" target="_blank"  className="page-description-button">CODE</Link>
            <Link href="https://kaiowsz-ecommerce.vercel.app" target="_blank" className="page-description-button">DEMO</Link>
          </div>
            <Link href="/" className="page-description-link">Back to the Home Page</Link>
        </div>
        <div className="page-description-techs">
          <h4>Technologies</h4>
          <ul>
            <li><RiRadioButtonFill/> HTML</li>
            <li><RiRadioButtonFill/> CSS</li>
            <li><RiRadioButtonFill/> JavaScript</li>
            <li><RiRadioButtonFill/> ReactJS</li>
            <li><RiRadioButtonFill/> NextJS</li>
            <li><RiRadioButtonFill/> Sanity</li>
            <li><RiRadioButtonFill/> Stripe</li>
          </ul>
        </div>
      </section>
    </main>
    </>
  )
}

export default Ecommerce