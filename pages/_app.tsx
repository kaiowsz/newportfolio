import "../styles/Navbar.scss"
import "../styles/Main.scss"

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
