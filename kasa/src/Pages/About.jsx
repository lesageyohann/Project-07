import Banner from '../Components/Banner'
import Image from '../Assets/AboutBanner.png'
import Collapse from '../Components/Collapse'

function About () {
        return(
            <main>
                <Banner image={Image} showText={false} />
                <Collapse label="Fiabilité" content="WIP"/>
                <Collapse label="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
                <Collapse label="Service" content="WIP"/>
                <Collapse label="Sécurité" content="WIP"/>
            </main>
        )
}

export default About