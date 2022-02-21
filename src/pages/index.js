import tw from "twin.macro";
import { AboutFunFact, HomePageHero, Navbar } from "../components";
import { NextSeo } from "next-seo";

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
      <NextSeo
        title="Yuke Brilliant - Personal Portfolio and Tech Blog"
        description="Portfolio Yuke Brilliant Hestiavin, I am a web developer and android app developer from Surabaya, Indonesia (Front End and Back End)"
        canonical="https://www.yukebrillianth.my.id"
        noindex={false}
        nofollow={false}
        openGraph={
          local
        }
      />
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