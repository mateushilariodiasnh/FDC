import Header from '../components/Header'
import InitialSection from '../components/InitialSection'
import Information from '../components/Information'
import About from '../components/About'
import DepoimentosPart from '../components/DepoimentosPart'
import FAQpart from '../components/FAQpart'
import Merchan from '../components/Merchan'
import Foother from '../components/Foother'

export default function Home() {

  return (
    <>
      <Header />

      <main className='bg-secondaryWhite z-0'>

        <InitialSection />

        <Information />

        <About />

        <DepoimentosPart />

        <FAQpart />

        <Merchan />

      </main>

      <Foother />
    </>
  )
}