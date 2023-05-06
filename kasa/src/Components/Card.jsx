import { Link } from 'react-router-dom'
import React from 'react'

function Card({Data}) {
    return (
        <div >
          {Data.map(item => (
    
            <div key={item.id}>
              <Link to={`/Housing/${item.id}`}>
    
                <div>
                  <img src={item.cover} alt='Photographie du logement' />
    
                  <div>
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