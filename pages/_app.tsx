import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Work_Sans } from 'next/font/google'
import { Space_Mono } from 'next/font/google'


const workSans = Work_Sans({ subsets: ['latin'], display: 'swap' })
const spaceMono = Space_Mono({ weight: "700", subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --ff-primary: ${workSans.style.fontFamily};
          --ff-second: ${spaceMono.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  )

}
