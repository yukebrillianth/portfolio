import tw from "twin.macro";
import { AboutFunFact, HomePageHero, Navbar } from "../components";

const styles = {
  darkSection: () => [
    tw`
      bg-dark
      background-size[300%]
      md:background-size[cover]
    `,
    `
      background-image: url(https://www.koyeb.com/static/images/backgrounds/grid-dark.svg);
      background-position: 100%;
    `
  ],
  lightSection: () => [
    tw`
      bg-white
    `,
    `
      background-image: url(https://www.koyeb.com/static/images/backgrounds/grid-light.svg);
      background-position: 100%;
      background-size: cover;
    `
  ]
}

export default function Home() {
  return (
    <>
      <section css={styles.darkSection}>
        <Navbar />
        <HomePageHero />
      </section>
      <section css={styles.lightSection}>
        <AboutFunFact />
      </section>
      <section css={styles.darkSection}>
        <AboutFunFact />
      </section>
    </>
  );
}