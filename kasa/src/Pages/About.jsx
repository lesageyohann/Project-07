// Header
// Nav
import Banner from '../Components/Banner'
import Image from '../Assets/AboutBanner.png'

function About () {
        return(
            <main>
                <Banner image={Image} showText={false} />
            </main>
        )
}

export default About