import Link from 'next/link';
import './header.css';

export default function Header() {
    return (
        <header className="header">
            <nav className="mainNav">
                <Link className='nav_link_btn' href="#">
                    CONTACT US
                </Link>
                <ul className="languageList">
                    <li className='languageList_li'>EN</li>
                    {/* <li className='languageList_li'>RU</li>
                    <li className='languageList_li'>ES</li>
                    <li className='languageList_li'>DE</li>
                    <li className='languageList_li'>CN</li>
                    <li className='languageList_li'>FR</li> */}
                </ul>
            </nav>
            {/* <div className="burgerMenu">
                <div className="burgerLine"></div>
                <div className="burgerLine"></div>
                <div className="burgerLine"></div>
            </div> */}
        </header>
    );
}
