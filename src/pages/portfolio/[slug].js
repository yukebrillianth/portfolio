import { useEffect } from "react";
import tw from "twin.macro";
import client from "../../../apollo-client";
import { Navbar, PortfolioPageTop, PortfolioDetails, Footer } from "../../components";
import { GET_PORFOLIO_BY_SLUG } from "../../GraphQL/Queries";

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

export async function getServerSideProps({ params }) {
  const { data } = await client.query({
    query: GET_PORFOLIO_BY_SLUG,
    variables: {
      slug: params.slug
    }
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

export default function PortfolioDetail(props) {
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
      <section css={styles.darkSection}>
        <Navbar />
        <PortfolioPageTop {...props.data} />
      </section>
      <section css={styles.lightSection}>
        <PortfolioDetails content={props.data.portfolio.details.raw} />
      </section>
      <section ccs={styles.darkSection(true)}></section>
      <Footer />
    </>
  );
}