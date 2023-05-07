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
        <div>
            <div>
                <div>
                    <img src={item.pictures[index]} key={index} alt="Photographie logement" />
                    
                    {item.pictures.length > 1 &&  ( 
                        
                        <div>
                            {`${index + 1}/${item.pictures.length}`}
                        </div>
                    )}
                    
                    {item.pictures.length > 1 && ( 
                        <div>

                            <button onClick={imageLeft}>
                                <img src={arrow} alt="photographie gauche" />
                            </button>

                            <button onClick={imageRight}>
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