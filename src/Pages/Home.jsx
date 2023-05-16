import Banner from '../Components/Banner'
import Image from '../Assets/HomeBanner.png'
import Card from '../Components/Card'
import React, { useEffect, useState } from 'react'

function Home() {

    
  const [Data, setData] = useState([])

  useEffect(() => {  
    fetch('./Data/kasa-data.json')
      .then(response => {return response.json()})
      .then(jsonData => {setData(jsonData)})
      .catch(error => console.error('Erreur : ', error))     
  }, [])

    return(
        <main>
            <Banner image={Image} showText={true} />
            <Card Data={Data} />
        </main>
    )
}

export default Home