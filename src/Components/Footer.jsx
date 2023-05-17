import logo from '../Assets/logo-alt.png'
import { Link } from 'react-router-dom'

function Footer() {
    
    return (        
        <footer className='footer'>
            <div className='footer_item'>
                <div className='footer_item_logo'>
                <Link to="/"><img src={logo} alt="logo de l'agence" /></Link>
                </div>                     
                <div>  
                    <p className='footer_item_paragraphe'>© 2020 Kasa. All rights reserved</p>
                </div>
            </div>           
        </footer>
    )
}

export default Footer