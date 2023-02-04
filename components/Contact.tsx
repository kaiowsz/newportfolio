import Link from 'next/link'
import React from 'react'
import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa"
import { AiOutlineMail } from "react-icons/ai"

function Contact() {
    return (
    <>
    <section className="contact">
        <div className="contact-container">
            <span>CONTACT</span>
            <h2>Get in touch with me</h2>


            <div className="contact-info">

                <div className="contact-info-left">
                    <img src="/contact.jpg" alt="" />
                    <h2>Kaio Silveira</h2>
                    <p style={{ fontWeight: "bold" }}>Front-End Developer</p>
                    <p className="my-desc">I&apos;m available for freelance and full-time positions. Contact me and let&apos;s talk.</p>
                    <p>CONTACT ME</p>

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
                <form className="form" action="https://getform.io/f/7c620540-fade-4754-8a6d-3a7cff3bf148" method="POST">
                    <div className="form-name">
                        <div>
                            <label htmlFor="name">NAME</label>
                            <input type="text" name="name" id="name" required/>
                        </div>
                        <div>
                            <label htmlFor="surname">SURNAME</label>
                            <input type="text" name="surname" id="surname" required/>
                        </div>
                    </div>
                    <div>
                        <label htmlFor="email">EMAIL</label>
                        <input type="email" name="email" id="email" required/>
                    </div>
                    <div>
                        <label htmlFor="subject">SUBJECT</label>
                        <input type="text" name="subject" id="subject" />
                    </div>
                    <div>
                        <label htmlFor="message">MESSAGE</label>
                        <textarea name="message" id="message"></textarea>
                    </div>
                    <button>SEND</button>
                </form>
            </div>

        </div>
    </section>
    </>
    )
}

export default Contact