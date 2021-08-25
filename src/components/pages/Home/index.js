import styled from 'styled-components';
import waIcon from '../../../img/wa-icon.svg';
import { About, Contact, Footer, Hero, Navbar, Tabs } from '../../elements'

const CtaContainer = styled.a`
    position:fixed;
    width:60px;
    height:60px;
    bottom:40px;
    right:40px;
    z-index:100;

    @media (max-width: 768px) { 
        right:20px;
        bottom:20px;
    }
`
const CtaImage = styled.img``

const Home = () => {
    return (
        <section>
            <Navbar />
            <Hero />
            <About />
            <Tabs color="blue" />
            <Contact />
            <Footer />
            <CtaContainer href="https://wa.me/send?phone=6285755773985&text=Halo!" rel="noreferrer" target="_blank">
                <CtaImage src={waIcon} alt="whatsapp-icon" />
            </CtaContainer>
        </section>
    );
}

export default Home;