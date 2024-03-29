import Head from 'next/head'
import '../styles/globals.css'

export default function App({ Component, pageProps }): JSX.Element {
  return (
    <>
      <Head>
        <title>Corporate Learn &amp; Drive | Fundação Dom Cabral</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
