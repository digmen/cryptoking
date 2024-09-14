import Image from 'next/image';
import Link from 'next/link';

import './page.css'

import home_arrow_btn_one from '@/assets/home_arrow_btn_one.svg'
import home_arrow_btn_two from '@/assets/home_arrow_btn_two.svg'


export default function Home() {
    return (
        <div className='home_hero_bg'>
            <div className='home_hero_green_bg'>
                <div className='home_hero_green_bg_circle'>
                    <div className='home_hero_green_bg_in_circle'>
                        <Link href='#' className='home_hero_green_bg_in_circle_text'>play</Link>
                    </div>
                </div>
                <div className='home_hero_title'>
                    <h1>Emp<span className='home_hero_title_span_in_h1'>irex</span></h1>
                    <span className='home_hero_title_span'>NEW METAVERSE GAME</span>
                </div>
                <div className='home_hero_text_and_block'>
                    <div className='home_hero_text_and_block_title'>
                        <h1 >Join the Revolution of Strategy and Crypto – The Empire Awaits!</h1>
                    </div>
                    <div className='home_block_link_btn'>
                        <Link href='#' className='home_link_btn_one'>
                            whitepaper
                            <Image src={home_arrow_btn_one} alt='arrow_img' />
                        </Link>
                        <Link href='#' className='home_link_btn_two'>
                            Explore
                            <Image src={home_arrow_btn_two} alt='arrow_img' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='home_right_block'>
                <header className='home_header'>
                    <nav className='home_navbar'>
                        <div className='home_navbar_text'>
                            <span>Сontact Us</span>
                            <span>En</span>
                        </div>
                        <div className='burger_menu'>
                            <div className='burger_menu_line'></div>
                            <div className='burger_menu_line'></div>
                            <div className='burger_menu_line'></div>
                        </div>
                    </nav>
                </header>
            </div>
        </div>
    );
}
