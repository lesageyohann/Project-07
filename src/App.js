import { Route, Routes } from 'react-router-dom'
import Header from './Components/Header'
import Home from './Pages/Home'
import Footer from './Components/Footer'
import Error from './Pages/404'
import About from './Pages/About'
import Housing from './Pages/Housing'
import './Styles/Index.scss'



function App() {
  
    return (
        <div className='App'>
          <Header />
            <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/Housing/:id' element={<Housing />} />
              <Route path='/About' element={<About />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
        </div>
      )
    }

export default App