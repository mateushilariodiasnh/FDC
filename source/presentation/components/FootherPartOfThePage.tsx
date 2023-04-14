import { Messagechat } from './icons'
import { Linkedin } from './icons'
import { Instagram } from './icons'
import { Youtube } from './icons'
import { Facebook } from './icons'
import { Twitter } from './icons'
import { Spotify } from './icons'

export default function Foother(): JSX.Element {
    return (
        <footer>
            <div className='bg-white text-center pt-10 lg:pt-10 text-primaryGrayDark mb-10 lg:mb-0 lg:flex lg:py-16 lg:items-center lg:justify-center pb-8 lg:text-start lg:mx-4 xl:mx-20 xl:space-x-12 2xl:space-x-24'>
                <address className='text-1.5xl '>
                    <p className='pb-4 font-black font-nexaSlab'>Fale conosco</p>
                    <a href='telto:0800 941 9200' className='font-normal font-openSans'>0800 941 9200</a><br></br>
                    <a href='mailto:atendimento@fdc.org.br' className='font-normal font-openSans'>atendimento@fdc.org.br</a>
                </address>
                <div className='border-t border-secondaryGrayMedium m-6 lg:my-6 lg:mx-0 xl:m-6'></div>
                <div className='flex justify-between mx-6 lg:flex lg:space-x-4'>
                    <a href='#'>
                        <Messagechat className='h-6 w-6' />
                    </a>
                    <a href='#'>
                        <Linkedin className='h-6' />
                    </a>
                    <a href='#'>
                        <Instagram className='h-6' />
                    </a>
                    <a href='#'>
                        <Youtube className='h-6' />
                    </a>
                    <a href='#'>
                        <Facebook className='h-6' />
                    </a>
                    <a href='#'>
                        <Twitter className='h-6' />
                    </a>
                    <a href='#'>
                        <Spotify className='h-6' />
                    </a>
                </div>
                <div className='border-t border-secondaryGrayMedium m-6 lg:my-6 lg:mx-0 xl:m-6'></div>
                <div className='lg:space-x-6 items-center space-y-6 flex flex-col lg:flex-row'>
                    <p className='lg:text-start text-1.5xl font-black font-nexaSlab lg:max-w-min'>Ranking e Certificações</p>
                    <picture>
                        <source srcSet={"/images/FTLogoWithRankingInformation.png".replace(".png", ".webp")} type="image/webp" />
                        <img className="h-14 mx-auto" src={"/images/FTLogoWithRankingInformation.png"} alt="logo da FT com uma informação de ranking ao lado" />
                    </picture>
                    <picture>
                        <source srcSet={"/images/AmbaLogo.png".replace(".png", ".webp")} type="image/webp" />
                        <img className="h-10 mx-auto" src={"/images/AmbaLogo.png"} alt="logo da Amba" />
                    </picture>
                    <picture>
                        <source srcSet={"/images/EquisLogo.webp".replace(".png", ".webp")} type="image/webp" />
                        <img className="h-10 mx-auto" src={"/images/EquisLogo.webp"} alt="logo da Equis" />
                    </picture>
                </div>
            </div>
        </footer>
    )
}