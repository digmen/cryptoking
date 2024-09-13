import Link from 'next/link';
import './header.css';

export default function Header() {
    return (
        <header className="header">
            <nav className="languageSwitcher">
                <ul className="languageList">
                    <li className='languageList_li'>EN</li>
                    {/* <li className='languageList_li'>RU</li>
                    <li className='languageList_li'>ES</li>
                    <li className='languageList_li'>DE</li>
                    <li className='languageList_li'>CN</li>
                    <li className='languageList_li'>FR</li> */}
                </ul>
            </nav>
            <nav className="mainNav">
                <ul className="navList">
                    <li>
                        <Link className='nav_link_btn' href="/earn-to-play">
                            EARN TO PLAY
                        </Link>
                    </li>
                    <li>
                        <Link className='nav_link_btn' href="/contact-us">
                            CONTACT US
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="burgerMenu">
                <div className="burgerLine"></div>
                <div className="burgerLine"></div>
                <div className="burgerLine"></div>
            </div>
        </header>
    );
}
