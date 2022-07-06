import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
         <b> Sitios Webs desarrollados en el curso </b></p>
        <p> <a href="https://app.netlify.com/sites/storepecile">Store </a> </p>
        <p> <a href="https://app.netlify.com/sites/webdecafepecile"> Pagina de Cafe </a> </p>
        <p> <a href="https://app.netlify.com/sites/pecile1">Primer Pagina - Contacto </a> </p>
        <p> <b> Proyectos Personales </b> </p>
        <p> <a href="https://app.netlify.com/sites/lamrc">Peña La M </a> </p>
        <p> <a href="https://app.netlify.com/sites/barbertrap">Barberia - BarberTrap </a> </p>

        </p>
      </main>

      <Footer />
    </div>
  )
}
