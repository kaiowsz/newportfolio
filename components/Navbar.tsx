import React, { useState } from 'react'
import { Link as LinkScroll } from "react-scroll"
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"

function Navbar() {

  const [openMenu, setOpenMenu] = useState(false)

  const data = [
    {
      title: "HOME",
      id: "home"
    },
    {
      title: "ABOUT",
      id: "about"
    },
    {
      title: "SKILLS",
      id: "skills",
    },
    {
      title: "PROJECT",
      id: "project"
    },
    {
      title: "CONTACT",
      id: "contact"
    },
  ]

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link href="/" className="navbar-title">Ks</Link>
        
        <nav>
            {data.map(item => (
              <LinkScroll className="link" key={item.id} to={item.id}>{item.title}</LinkScroll>
              ))}
        </nav>

        <div className={`icon-toggle ${openMenu ? "open" : ""}`} onClick={() => setOpenMenu(!openMenu)}>
          <AiOutlineMenu size={25} />
        </div>
      </div>
      

      <div className={`${openMenu ? "menu-container" : ""}`}>
          <div className="menu">
              <div className="menu-content">

                <div className="menu-navbar">
                    <Link href="/" className="navbar-title">Ks</Link>
                    <div className={`icon-toggle-menu`} onClick={() => setOpenMenu(!openMenu)}>
                      <AiOutlineClose size={16}/>
                    </div>
                </div>

                <span className="menu-text">Let&apos;s build something together!</span>

                <nav>
                  {data.map(item => (
                    <LinkScroll onClick={() => setOpenMenu(!openMenu)} className="link" key={item.id} to={item.id}>{item.title}</LinkScroll>
                  ))}
                </nav>

                <div className="menu-contact">
                    <span>LET&apos;S CONNECT</span>

                  <div className="menu-icons">
                    <div className="menu-icon">
                      <Link href="https://www.linkedin.com/in/kaiosilveir4" target="_blank" className="menu-link-icon">
                        <FaLinkedinIn />
                      </Link>
                    </div>
                    <div className="menu-icon">
                      <Link href="https://github.com/kaiowsz" target="_blank" className="menu-link-icon">
                        <FaGithub />
                      </Link>
                    </div>
                    <div className="menu-icon">
                      <Link href="mailto:kaionpsa@gmail.com" className="menu-link-icon">
                        <AiOutlineMail />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>


    </div>
  )
}

export default Navbar