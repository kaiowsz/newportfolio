// components styles
import "../styles/Navbar.scss"
import "../styles/Main.scss"
import "../styles/About.scss"
import "../styles/Skills.scss"
import "../styles/Projects.scss"
import "../styles/Contact.scss"

// pages styles
import "../styles/Notesz.scss"


import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
