import './page.css'
import Link from 'next/link';


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
            </div>
        </div>
    );
}
