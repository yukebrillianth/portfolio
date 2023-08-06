import tw from "twin.macro";
import {
  AboutEducation,
  AboutFunFact,
  AboutSocial,
  Footer,
  HomePageHero,
  LatestPosts,
  Navbar,
  Portfolio,
} from "../components";
import {
  BreadcrumbJsonLd,
  NextSeo,
  OrganizationJsonLd,
  SiteLinksSearchBoxJsonLd,
  SocialProfileJsonLd,
} from "next-seo";
import Head from "next/head";

const styles = {
  darkSection: (sticky) => [
    tw`
      bg-dark
      background-size[400%]
      md:background-size[300%]
      lg:background-size[200%]
      xl:background-size[cover]
    `,
    `
      background-image: url(/assets/backgrounds/grid-dark.svg);
      background-position: 100%;
    `,
    sticky ? tw`relative` : "",
  ],
  lightSection: (sticky) => [
    tw`
      bg-white
      background-size[400%]
      md:background-size[300%]
      lg:background-size[200%]
      xl:background-size[cover]
    `,
    `
      background-image: url(/assets/backgrounds/grid-light.svg);
      background-position: 100%;
      // background-size: cover;
    `,
    sticky ? tw`relative` : "",
  ],
};

export default function Home({ posts }) {
  return (
    <>
      <Head>
        <meta
          name="keywords"
          content="yukebrillianth, cv yuke brilliant, portfolio yuke brilliant, profil yuke brilliant"
        />
      </Head>
      <NextSeo
        title="Yuke Brilliant - Personal Portfolio and Tech Blog"
        description="Website Portfolio Yuke Brilliant, web developer asal surabaya. Jelajahi koleksi project terbaru dan perjalanan kreatif saya, jangan lupa kujungi yukebrillianth di semua sosmed saya."
        canonical="https://www.yukebrillianth.my.id"
        noindex={false}
        nofollow={false}
        openGraph={{
          title: "Yuke Brilliant - Personal Portfolio and Tech Blog",
          description:
            "Website Portfolio Yuke Brilliant, web developer asal surabaya. Jelajahi koleksi project terbaru dan perjalanan kreatif saya, jangan lupa kujungi yukebrillianth di semua sosmed saya.",
          url: "https://yukebrillianth.my.id",
          type: "profile",
          locale: "id_ID",
          profile: {
            firstName: "Yuke Brilliant",
            lastName: "Hestiavin",
            username: "yukebrillianth",
            gender: "male",
          },
          images: [
            {
              url: "https://secure.gravatar.com/avatar/929dbf043c45dcc538dbd2c20823a87b?s=1080",
              width: 1080,
              height: 1080,
              alt: "Profile Photo",
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
          "https://www.facebook.com/yuke.brilliant.1/",
          "https://instagram.com/yukebrillianth",
          "https://www.linkedin.com/in/yukebrillianth",
          "https://twitter.com/yukebrillianth",
          "https://github.com/yukebrillianth",
        ]}
      />
      <SiteLinksSearchBoxJsonLd
        url="https://yukebrillianth.my.id"
        potentialActions={[
          {
            target: "https://yukebrillianth.my.id/portfolio/search?q",
            queryInput: "search_term_string",
          },
          {
            target: "https://yukebrillianth.my.id/blog/search?category=all&q",
            queryInput: "search_term_string",
          },
        ]}
      />
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Home',
            item: 'https://yukebrillianth.my.id/',
          }
        ]}
      />
      <section css={styles.darkSection}>
        <Navbar />
        <HomePageHero />
      </section>
      <section css={styles.lightSection}>
        <AboutFunFact />
      </section>
      <section css={styles.darkSection(true)}>
        <AboutEducation />
        <AboutSocial />
        <Portfolio />
      </section>
      <section css={styles.lightSection}>
        <LatestPosts />
      </section>
      <section ccs={styles.darkSection(true)}></section>
      <Footer />
    </>
  );
}
