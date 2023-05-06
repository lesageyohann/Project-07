function Banner({image, showText}) {

    return(
        
        <div >
            <img  src={image} alt='Photographie avec un slogan'/>
            {showText && <h1 alt='Chez vous, partout et ailleurs'>Chez vous, partout et ailleurs</h1>}
        </div>
    )
}

export default Banner