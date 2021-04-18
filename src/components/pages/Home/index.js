import { About, Contact, Footer, Hero, Navbar, Tabs } from '../../elements'

const Home = () => {
    return (
        <section>
            <Navbar />
            <Hero />
            <About />
            <Tabs color="blue" />
            <Contact />
            <Footer />
        </section>
    );
}

export default Home;