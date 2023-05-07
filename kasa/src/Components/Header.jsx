import { Link } from 'react-router-dom'
import K from '../Assets/K_alt.svg'
import H from '../Assets/home_alt.svg'
import S from '../Assets/S_alt.svg'
import A from '../Assets/A_alt.svg'
 
function Header() {
    return (
        <header className="header">
            <div className="header_logo">
                <img src={K} alt="logo de l'agence" />
                <Link to="/"><img src={H} alt="logo de l'agence" /></Link>
                <img src={S} alt="logo de l'agence" />
                <img src={A} alt="logo de l'agence" />
            </div>
            <nav className="header_nav">
                <ul className="header_nav_bar">
                    <li>
                        <Link className="header_nav_bar_button" to="/">Accueil</Link>
                        <Link className="header_nav_bar_button" to="/About">A Propos</Link>
                    </li>
                </ul>
            </nav>
        </header>               
    )
}

export default Header