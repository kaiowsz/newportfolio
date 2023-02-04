import Link from 'next/link';
import React from 'react'


interface ProjectProps {
    imgSrc: string;
    title: string;
    tech: string;
    linkHref: string;
}

function Project({imgSrc, title, tech, linkHref}: ProjectProps) {
  return (
    <div className="project-item">
        <img src={imgSrc} alt={`project ${title}`} loading="lazy" />
        <div className="project-text">
            <h3>{title}</h3>
            <p>{tech}</p>
            <Link href={linkHref} className="link">
                <p>More Info</p>
            </Link>
        </div>
    </div>
  )
}

export default Project

/* <div className="project-item">
                    <img src="/assets/projects/notesz.png" alt="" loading="lazy" />
                    <div className="project-text">
                        <h3>Notesz</h3>
                        <p>ReactJS</p>
                        <Link href="/" className="link">
                            <p>More Info</p>
                        </Link>
                    </div>
                </div> */