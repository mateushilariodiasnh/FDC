import Header from '../components/Header'
import InitialSection from '../components/InitialSection'
import Information from '../components/Information'
import About from '../components/About'
import DepositionsPart from '../components/DepositionsPart'
import FAQpart from '../components/FAQpart'
import Merchan from '../components/Merchan'
import Foother from '../components/Foother'

export default function Home(): JSX.Element {

  return (
    <>
      <Header />

      <main className='bg-secondaryWhite z-0'>

        <InitialSection />

        <Information />

        <About />

        <DepositionsPart />

        <FAQpart />

        <Merchan />

      </main>

      <Foother />
    </>
  )
}