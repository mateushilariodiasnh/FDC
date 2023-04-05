import HeaderPartOfThePage from '../components/HeaderPartOfThePage'
import InitialSectionPartOfThePage from '../components/InitialSectionPartOfThePage'
import InformationPartOfThePage from '../components/InformationPartOfThePage'
import AboutPartOfThePage from '../components/AboutPartOfThePage'
import DepositionsPartOfThePage from '../components/DepositionsPartOfThePage'
import FaqPartOfThePage from '../components/FaqPartOfThePage'
import MerchanPartOfThePage from '../components/MerchanPartOfThePage'
import FootherPartOfThePage from '../components/FootherPartOfThePage'

export default function Home(): JSX.Element {

  return (
    <>
      <HeaderPartOfThePage />

      <main className='bg-secondaryWhite z-0'>

        <InitialSectionPartOfThePage />

        <InformationPartOfThePage />

        <AboutPartOfThePage />

        <DepositionsPartOfThePage />

        <FaqPartOfThePage />

        <MerchanPartOfThePage />

      </main>

      <FootherPartOfThePage />
    </>
  )
}