import HeaderPartOfThePage from '../components/componentsHomePage/HeaderPartOfThePage'
import InitialSectionPartOfThePage from '../components/componentsHomePage/InitialSectionPartOfThePage'
import InformationPartOfThePage from '../components/componentsHomePage/InformationPartOfThePage'
import AboutPartOfThePage from '../components/componentsHomePage/AboutPartOfThePage'
import DepositionsPartOfThePage from '../components/componentsHomePage/DepositionsPartOfThePage'
import FaqPartOfThePage from '../components/componentsHomePage/FaqPartOfThePage'
import MerchanPartOfThePage from '../components/componentsHomePage/MerchanPartOfThePage'
import FooterPartOfThePage from '../components/componentsHomePage/FooterPartOfThePage'

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

      <FooterPartOfThePage />
    </>
  )
}