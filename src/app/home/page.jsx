import Image from 'next/image';
import Link from 'next/link';

import './page.css'

import home_arrow_btn_two from '@/assets/home_arrow_btn_two.svg'
import Header from '@/components/header/Header';


export default function Home() {
    return (
        <div className='home_hero_bg'>
            <div className='home_hero_green_bg'>
                <Header />
                <div className='home_hero_green_bg_circle'>
                    <div className='home_hero_green_bg_in_circle'>
                        <Link href='#' className='home_hero_green_bg_in_circle_text'>play</Link>
                    </div>
                </div>
                <div className='hero_left_block'>
                    <div className='home_hero_title'>
                        <span className='text first_half'>EMPIR</span>
                        <div className='text_e_x'>
                            <span class="text left-half">E</span>
                            <span class="text right-half">E</span>
                        </div>
                        <span class="text end_half">X</span>
                    </div>
                    <div className='home_hero_text_and_block'>
                        <div className='home_hero_text_and_block_title'>
                            <h1 >Join the Revolution of Strategy and Crypto – The Empire Awaits!</h1>
                        </div>
                        <div className='home_block_link_btn'>
                            <Link href='#' className='home_link_btn_two'>
                                Explore
                                <Image src={home_arrow_btn_two} alt='arrow_img' />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
