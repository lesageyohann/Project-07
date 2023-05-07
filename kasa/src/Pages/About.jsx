// Header
// Nav
import Banner from '../Components/Banner'
import Image from '../Assets/AboutBanner.png'
import Collapse from '../Components/Collapse'

function About () {
        return(
            <main>
                <Banner image={Image} showText={false} />
                <Collapse label="Fiabilité"/>
                <Collapse label="Respect"/>
                <Collapse label="Service"/>
                <Collapse label="Sécurité"/>
            </main>
        )
}

export default About