import K from '../Assets/K.png'
import H from '../Assets/home.png'
import S from '../Assets/S.png'
import A from '../Assets/A.png'

function Footer() {
    
    return (        
        <footer>
            <div>
            <image src={K} alt="logo de l'agence" />
            <image src={H} alt="logo de l'agence" />
            <image src={S} alt="logo de l'agence" />
            <image src={A} alt="logo de l'agence" />
            </div>
                     
            <div>  
                <p>© 2020 Kasa. All rights reserved</p>
            </div>            
        </footer>
    )
}

export default Footer