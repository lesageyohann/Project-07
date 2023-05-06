import { Link } from 'react-router-dom'

function Error() {

    return (
        <section className='error'>
            
            <div className='error_number'>
                404
            </div>
            
            <div className='error_text'>
                Oups! La page que vous demandez n'existe pas.
            </div>
            
            <Link className="error_link" to="/">
                Retour à la page d'accueil
            </Link>

        </section>

    )

}

export default Error