import Collapse from '../Components/Collapse'
import Carousel from '../Components/Carousel'
import Category from '../Components/Category'
import Star from '../Components/Score'
import Error from './404'
import { useParams } from 'react-router-dom'



function Housing({Data}) {

    const { id } = useParams()
    const item = Data.find((item) => item.id === id)

    if (!item) {
        return (
          <Error />
        )
      }

    return (
        <div>
            <Carousel item={item}/>
            <div>
                <h1>{item.title}</h1>
                <p>{item.location}</p>
                <Category item={item}/>
            </div>
            <div>
                <div>
                    <p>{item.host.name}</p>
                    <img src={item.host.picture} alt='Photographie de l hote' />
                </div>
                <div>
                <Star item={item}/>
                </div>                
            </div>
            <Collapse label="Description" content={item.description} />
            <Collapse label="Equiepements"  content={item.equipments}/>
        </div>
    )

}

export default Housing