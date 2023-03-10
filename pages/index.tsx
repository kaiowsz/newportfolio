import Head from 'next/head'

import Navbar from '@/components/Navbar'
import Main from '@/components/Main'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kaio | Front-End Developer</title>
        <meta name="description" content="What's up! I'm Kaio, a Front-End Developer." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main className="home">
        <Navbar/>
        <Main/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>

      </main>
      
    </>
  )
}
