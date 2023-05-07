import arrow from '../Assets/Arrow.png';
import { useState } from 'react';

function Carousel({item}) {

    const [index, setIndex] = useState(0)
   

    function imageLeft() {
        setIndex((index) =>
            index === 0 ? item.pictures.length - 1 : index - 1
        )
    }
    function imageRight() {
            setIndex((index) =>
                index === item.pictures.length - 1 ? 0 : index + 1
            )
        }
    return (
        <div className="carousel">
            <div className="carousel_item">
                <div className="carousel_item_image">
                    <img src={item.pictures[index]} key={index} alt="Photographie logement" />
                    
                    {item.pictures.length > 1 &&  ( 
                        
                        <div className="image-overlay">
                            {`${index + 1}/${item.pictures.length}`}
                        </div>
                    )}
                    
                    {item.pictures.length > 1 && ( 
                        <div>

                            <button className="carousel_item_image_button_L" onClick={imageLeft}>
                                <img src={arrow} alt="photographie gauche" />
                            </button>

                            <button  className="carousel_item_image_button_R" onClick={imageRight}>
                                <img src={arrow} alt="photographie droite" />
                            </button>

                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default Carousel