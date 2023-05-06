import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Error from './Pages/404'
import About from './Pages/About'
import Housing from './Pages/Housing'



function App() {

  const [Data, setData] = useState([])

  useEffect(() => {  
    fetch('./kasa-data.json')
      .then(response => {
        return response.json()
      })
      .then(jsonData => {
        setData(jsonData)
      })
      .catch(error => console.error('Erreur : ', error))    
  }, [])

  
    return (
        <div className='App'>
          <Header />
            <Routes>
              <Route path='/' element={<Home Data={Data}/>} />
              <Route path='/Housing/:id' element={<Housing data={Data}/>} />
              <Route path='/About' element={<About />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
      )
    }

export default App