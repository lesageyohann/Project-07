import { Link } from 'react-router-dom'
import K from '../Assets/K.png'
import H from '../Assets/home.png'
import S from '../Assets/S.png'
import A from '../Assets/A.png'
 
function Header() {
    return (
        <header>
            <div>
                <image src={K} alt="logo de l'agence" />
                <Link to="/"><image src={H} alt="logo de l'agence" /></Link>
                <image src={S} alt="logo de l'agence" />
                <image src={A} alt="logo de l'agence" />
            </div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/About">A Propos</Link>
            </nav>
        </header>               
    )
}

export default Header