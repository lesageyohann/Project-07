import Banner from '../Components/Banner'
import Image from '../Assets/HomeBanner.png'
import Card from '../Components/Card'

function Home({Data}) {
    return(
        <main>
            <Banner image={Image} showText={true} />
            <Card Data={Data} />
        </main>
    )
}

export default Home