import Link from 'next/link'
import React from 'react'
import Project from './Project'

function Projects() {
    const data = [
        {
            id: 4,
            imgSrc: "/assets/projects/hoobank.png",
            title: "Hoobank",
            tech: "ReactJS",
            linkHref: "/hoobank",
        },
        {
            id: 6,
            imgSrc: "/assets/projects/metaversus.png",
            title: "Metaversus",
            tech: "NextJS",
            linkHref: "/metaversus",
        },
        {
            id: 3,
            imgSrc: "/assets/projects/szap.png",
            title: "SZap",
            tech: "ReactJS",
            linkHref: "/szap",
        },
        {
            id: 5,
            imgSrc: "/assets/projects/skblog.png",
            title: "SK Blog",
            tech: "NextJS",
            linkHref: "/skblog",
        },
        {
            id: 2,
            imgSrc: "/assets/projects/ecommerce_stripe.png",
            title: "ECommerce",
            tech: "NextJS",
            linkHref: "/ecommerce",
        },
        {
            id: 1,
            imgSrc: "https://raw.githubusercontent.com/kaiowsz/cryptocurrencies/main/public/chart.png",
            title: "Cryptoverse",
            tech: "NextJS",
            linkHref: "/cryptoverse",
        },
    ]

  return (
    <div className="projects">
        <div className="projects-container">
            <span>PROJECTS</span>
            <h2>What I&apos;ve built</h2>
            <div className="projects-items">

                {data.map(project => (
                    <Project key={project.id} imgSrc={project.imgSrc} title={project.title} tech={project.tech} linkHref={project.linkHref} /> 
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects