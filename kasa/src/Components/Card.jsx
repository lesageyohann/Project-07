import { Link } from 'react-router-dom'
import React from 'react'

function Card({Data}) {
    return (
        <div className='card'>
          {Data.map(item => (    
            <div className='card_housing' key={item.id}>
              <Link to={`/Housing/${item.id}`}>    
                <div className='card_housing_image'>
                  <img src={item.cover} alt='Photographie du logement' />    
                  <div className='card_housing_image_titre'>
                    <h4>{item.title}</h4>
                  </div>    
                </div>    
              </Link>
            </div>    
          ))}
        </div>
      )
    }

export default Card