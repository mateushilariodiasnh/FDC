import styles from '../styles/Home.module.css'
import Button from '../components/Button'
import Card from "../components/Card"
import { Telha } from '../components/icons'
import { Flecha } from '../components/icons'
import Header from '../components/Header'
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/pagination"
import { Pagination, A11y } from 'swiper';
import 'swiper/css'
import InitialSection from '../components/InitialSection'
import InitialSectionLg from '../components/InitialSectionLg'
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

      <main className='bg-[#EFEDED] z-0'>

        <InitialSection />

        <InitialSectionLg />

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