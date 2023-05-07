import { Link } from 'react-router-dom'
import K from '../Assets/K.png'
import H from '../Assets/home.png'
import S from '../Assets/S.png'
import A from '../Assets/A.png'
 
function Header() {
    return (
        <header>
            <div>
                <img src={K} alt="logo de l'agence" />
                <Link to="/"><img src={H} alt="logo de l'agence" /></Link>
                <img src={S} alt="logo de l'agence" />
                <img src={A} alt="logo de l'agence" />
            </div>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/About">A Propos</Link>
            </nav>
        </header>               
    )
}

export default Header