// Header
// Banner
// Card
// footer

import Header from '../Components/Header'
import Banner from '../Components/Banner'
import Card from '../Components/Card'
import Footer from '../Components/Footer'

function Home() {
    return(
        <div>
            <Header />
            <Banner />
            <div>
                <Card />
            </div>            
            <Footer />
        </div>
    )
}

export default Home