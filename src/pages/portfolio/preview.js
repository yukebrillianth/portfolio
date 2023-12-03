import { ArticleJsonLd, BreadcrumbJsonLd, NextSeo } from "next-seo";
import { useEffect } from "react";
import tw from "twin.macro";
import client from "../../../apollo-client";
import { Navbar, PortfolioPageTop, PortfolioDetails, Footer } from "../../components";
import { GET_PORFOLIO_BY_ID } from "../../GraphQL/Queries";

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

export async function getServerSideProps({ query }) {
  const { data } = await client.query({
    query: GET_PORFOLIO_BY_ID,
    variables: {
      id: query.id
    },
    context: {
      headers: {
        Authorization: process.env.NEXT_PREVIEW_TOKEN
      },

    },
    fetchPolicy: 'no-cache',
  })
  if (!data.portfolio) {
    return { notFound: true }
  } else {
    return {
      props: {
        data
      }
    }
  }
}


export default function PortfolioPreviewDetail(props) {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = "/table.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, []);
  return (
    <>
      <NextSeo
        title={props.data.portfolio.title + " - Yuke Brilliant"}
        description={props.data.portfolio.description}
        canonical={"https://www.yukebrillianth.my.id/" + props.data.portfolio.slug}
        noindex={false}
        nofollow={false}
        openGraph={{
          title: props.data.portfolio.title + " - Yukebrillianth",
          description: props.data.portfolio.description,
          url: "https://www.yukebrillianth.my.id/" + props.data.portfolio.slug,
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
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Home',
            item: 'https://yukebrillianth.my.id/',
          },
          {
            position: 2,
            name: 'Portfolio',
            item: 'https://yukebrillianth.my.id/portfolio',
          },
          {
            position: 3,
            name: props.data.portfolio.title,
            item: 'https://yukebrillianth.my.id/' + props.data.portfolio.slug,
          }
        ]}
      />
      <ArticleJsonLd
        useAppDir={false}
        url="https://example.com/article"
        title={props.data.portfolio.title}
        images={props.data.portfolio.images.map(image => image.url)}
        authorName={[
          {
            name: 'Yuke Brilliant',
            url: 'https://yukebrillianth.my.id/',
          },
        ]}
        publisherName="yukebrillianth"
        publisherLogo="https://www.yukebrillianth.my.id/assets/logo.svg"
        description={props.data.portfolio.description}
        isAccessibleForFree={true}

      />
      <section css={styles.darkSection}>
        <Navbar />
        <PortfolioPageTop {...props.data} />
      </section>
      <section css={styles.lightSection}>
        <PortfolioDetails content={props.data.portfolio.details.raw} />
      </section>
      {/* <section ccs={styles.darkSection(true)}></section> */}
      <Footer />
    </>
  );
}