import { Link } from 'react-router-dom'
import logo from '../Assets/LOGO.png'
import { useState } from 'react';
 
function Header() {

    const [activeTab, setActiveTab] = useState('Accueil')

    const tabClick = (tab) => {
        setActiveTab(tab)
    }

    return (
        <header className="header">
            <div className="header_logo">
                <Link className="header_logo_img" to="/"><img src={logo} alt="logo de l'agence" /></Link>
            </div>
            <nav className="header_nav">
                <ul className="header_nav_bar">
                    <li>
                        <Link className= {`header_nav_bar_button ${activeTab === 'Accueil' ? 'active' : '' }`} onClick={() => tabClick('Accueil')} to="/">Accueil</Link>
                        <Link className={`header_nav_bar_button ${activeTab === 'A Propos' ? 'active' : '' }`} onClick={() => tabClick('A Propos')} to="/About">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>               
    )
}

export default Header