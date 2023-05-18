import Collapse from '../Components/Collapse'
import Carousel from '../Components/Carousel'
import Category from '../Components/Category'
import Error from '../Pages/404'
import Star from '../Components/Score'
import { useParams } from 'react-router-dom'
import React, { useEffect, useState } from 'react'

function Housing() {
    const [item, setItem] = useState(null)
    const { id } = useParams()

    useEffect(() => {
        fetch('../Data/kasa-data.json')
            .then(response => response.json())
            .then(jsonData => {
                let itemAppart = jsonData.find(item => item.id === id)
                setItem(itemAppart)
            })
            .catch(error => console.error('Erreur : ', error))
    }, [id])

    if (!item) {
        return <Error />
    }

    return (
        <main className='base'>
            <Carousel item={item}/>
            <section className='base_identity'>
                <div className='base_identity_item'>
                    <h1 className='base_identity_item_title_h1'>{item.title}</h1>
                    <p className='base_identity_item_title_address'>{item.location}</p>
                    <Category item={item}/>
                </div>
                <div className='base_identity_profil'>
                    <div className='base_identity_profil_name'>
                        <p className='base_identity_profil_name_N'>{item.host.name}</p>
                    </div>
                    <div className='base_identity_profil_name_I'>
                        <img src={item.host.picture} alt='Photographie de l hote' />
                    </div>
                    <div className='base_identity_profil_rate'>
                        <Star item={item}/>
                    </div>                
                </div>
            </section>
            <section className='base_collapse'>
                <div className='base_collapse_item'>
                    <Collapse label="Description" title="Description" content={item.description} />
                </div>
                <div className='base_collapse_item'>
                    <Collapse label="Equiepements" title="Equipements" content={item.equipments}/>
                </div>
            </section>
        </main>            
    )    
}

export default Housing
