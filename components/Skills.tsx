import React from 'react'


function Skills() {

    const techs = [
        {
            id: 1,
            src: "/assets/html.png",
            name: "HTML",
            style: "rgb(255, 102, 0)",
            border: "htmlTech"
        },
        {
            id: 2,
            src: "/assets/css.png",
            name: "CSS",
            style: "rgb(51, 154, 250)",
            border: "cssTech"
        },
        {
            id: 7,
            src: "/assets/sass.png",
            name: "Sass",
            style: "rgb(224, 101, 224)",
            border: "sassTech"
        },
        {
            id: 3,
            src: "/assets/javascript.png",
            name: "JavaScript",
            style: "rgb(252, 239, 53)",
            border: "jsTech"
        },
        {
            id: 4,
            src: "/assets/react.png",
            name: "React",
            style: "rgb(11, 244, 252)",
            border: "reactTech"
        },
        {
            id: 5,
            src: "/assets/git.png",
            name: "Git",
            style: "rgb(255, 78, 8)",
            border: "gitTech"
        },
        {
            id: 6,
            src: "/assets/github_black.png",
            name: "GitHub",
            style: "rgb(226, 226, 226)",
            border: "githubTech"
        },
        {
            id: 8,
            src: "/assets/node.png",
            name: "NodeJS",
            style:"rgb(87, 194, 60)",
            border: "nodeTech"
        },
        {
            id: 9,
            src: "/assets/typescript.png",
            name: "TypeScript",
            style:"rgb(87, 194, 60)",
            border: "typeTech"
        },
        {
            id: 10,
            src: "/assets/next-js.svg",
            name: "NextJS",
            style:"rgb(87, 194, 60)",
            border: "nextTech"
        }
    ]

  return (
    <section className="skills">
        <div className="skills-content">
            <div className="skills-tech">
                <span>SKILLS</span>
                <h2>What I can do</h2>
                <div className="techs">
                { techs.map(tech => (
                            <div key={tech.id} className={`tech rainbow ${tech.border}`} style={{color: `${tech.style}`}}>
                                <img src={tech.src} alt={tech.name} loading="lazy" />
                                <p>{tech.name}</p>
                            </div>
                ))}
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills