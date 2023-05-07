import star from '../Assets/Star.png'
import unstar from '../Assets/Unstar.png'

function Stars(rating) {
  const stars = []
  
  for (let i = 0; i < 5; i++) {
    const dataStar = i < rating ? star : unstar
    stars.push(
      <img 
        key={`star-${i}`}
        className='base-TR_rates_icone'
        src={dataStar}
        alt='étoile'
      />
    )
  }
  
  return stars
}

export default Stars