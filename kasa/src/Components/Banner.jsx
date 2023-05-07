function Banner({image, showText}) {

    return(
        
        <div className='div'>
            <img className='div_image'  src={image} alt='Photographie avec un slogan'/>
            {showText && <h1 className='div_text' alt='Chez vous, partout et ailleurs'>Chez vous, partout et ailleurs</h1>}
        </div>
    )
}

export default Banner