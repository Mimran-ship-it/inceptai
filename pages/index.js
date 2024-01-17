import Main from './Main'
import Nav from './Nav'
import { Inter } from 'next/font/google'
// import Nav from './Nav/nav'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`${inter.className} body`} >
      <Nav />
      <Main />
    </main>
  )
}
