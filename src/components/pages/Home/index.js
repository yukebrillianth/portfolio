import styled from 'styled-components';
import TeleIcon from '../../../img/telegram-icon.svg';
import { About, Contact, Footer, Hero, Navbar, Tabs } from '../../elements'

const CtaContainer = styled.a`
    position:fixed;
    width:50px;
    height:50px;
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
            <CtaContainer href="https://t.me/Yukebrillianth" rel="noreferrer" target="_blank">
                <CtaImage src={TeleIcon} alt="telegram-icon" />
            </CtaContainer>
        </section>
    );
}

export default Home;