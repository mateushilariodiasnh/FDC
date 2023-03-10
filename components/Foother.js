import { Messagechat } from '../components/icons'
import { Linkedin } from '../components/icons'
import { Instagram } from '../components/icons'
import { Youtube } from '../components/icons'
import { Facebook } from '../components/icons'
import { Twitter } from '../components/icons'
import { Spotify } from '../components/icons'
import { Ft } from '../components/icons'
import { Amba } from '../components/icons'
import { Equis } from '../components/icons'

export default function Foother() {
    return (
        <footer>
            <div className='bg-white text-center pt-10 text-primaryGrayDark mb-10 lg:mb-0 lg:flex lg:py-16 lg:px-4 lg:items-center lg:justify-center'>
                <address>
                    <p className='pb-4 text-base font-black font-nexaSlab'>Fale conosco</p>
                    <a href='telto:0800 941 9200'>0800 941 9200</a><br></br>
                    <a href='mailto:atendimento@fdc.org.br'>atendimento@fdc.org.br</a>
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
                <div className='items-center space-y-6 lg:flex lg:space-x-2'>
                    <p className='text-base font-black font-nexaSlab'>Ranking e Certificações</p>
                    <Ft className='h-14 mx-auto' />
                    <Amba className='h-10 mx-auto' />
                    <Equis className='h-10 mx-auto' />
                </div>
            </div>
        </footer>
    )
}