import K from '../Assets/K.svg'
import H from '../Assets/home.svg'
import S from '../Assets/S.svg'
import A from '../Assets/A.svg'

function Footer() {
    
    return (        
        <footer className='footer'>
            <div className='footer_item'>
                <div className='footer_item_logo'>
                <img src={K} alt="logo de l'agence" />
                <img src={H} alt="logo de l'agence" />
                <img src={S} alt="logo de l'agence" />
                <img src={A} alt="logo de l'agence" />
                </div>                     
                <div>  
                    <p className='footer_item_paragraphe'>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>           
        </footer>
    )
}

export default Footer