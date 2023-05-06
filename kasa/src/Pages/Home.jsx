import Banner from '../Components/Banner'
import Image from '../Assets/HomeBanner.png'
//import Card from '../Components/Card'

function Home() {
    return(
        <main>
            <Banner image={Image} showText={true} />
        </main>
    )
}

export default Home