import tw from "twin.macro";
import { AboutFunFact, HomePageHero, Navbar } from "../components";
import { NextSeo, SiteLinksSearchBoxJsonLd, SocialProfileJsonLd } from "next-seo";
import Head from "next/head";

const styles = {
  darkSection: () => [
    tw`
      bg-dark
      background-size[300%]
      md:background-size[cover]
    `,
    `
      background-image: url(/assets/backgrounds/grid-dark.svg);
      background-position: 100%;
    `
  ],
  lightSection: () => [
    tw`
      bg-white
    `,
    `
      background-image: url(/assets/backgrounds/grid-light.svg);
      background-position: 100%;
      background-size: cover;
    `
  ]
}

export default function Home() {
  return (
    <>
      <Head>
        <meta name="keywords" content="yukebrillianth, cv yuke brilliant, portfolio yuke brilliant, profil yuke brilliant" />
      </Head>
      <NextSeo
        title="Yuke Brilliant - Personal Portfolio and Tech Blog"
        description="Portfolio Yuke Brilliant Hestiavin, I am a web developer and android app developer from Surabaya, Indonesia (Front End and Back End)"
        canonical="https://www.yukebrillianth.my.id"
        noindex={false}
        nofollow={false}
        openGraph={{
          title: 'Yuke Brilliant - Personal Portfolio and Tech Blog',
          description: 'Portfolio Yuke Brilliant Hestiavin, I am a web developer and android app developer from Surabaya, Indonesia (Front End and Back End)',
          url: 'https://yukebrillianth.my.id',
          type: 'profile',
          locale: 'id_ID',
          profile: {
            firstName: 'Yuke Brilliant',
            lastName: 'Hestiavin',
            username: 'yukebrillianth',
            gender: 'male',
          },
          images: [
            {
              url: 'https://secure.gravatar.com/avatar/929dbf043c45dcc538dbd2c20823a87b?s=1080',
              width: 1080,
              height: 1080,
              alt: 'Profile Photo',
            },
          ],
        }}
      />
      <SocialProfileJsonLd
        keyOverride="profile"
        type="Person"
        name="Yuke Brilliant Hestiavin"
        url="https://yukebrillianth.my.id"
        sameAs={[
          'https://www.facebook.com/yuke.brilliant.1/',
          'https://instagram.com/yukebrillianth',
          'https://www.linkedin.com/in/yukebrillianth',
          'https://twitter.com/yukebrillianth',
          'https://github.com/yukebrillianth',
        ]}
      />
      <SiteLinksSearchBoxJsonLd
        url="https://yukebrillianth.my.id"
        potentialActions={[
          {
            target: 'https://yukebrillianth.my.id/portfolio/search?q',
            queryInput: 'search_term_string',
          },
        ]}
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