import { useRouter } from "next/router";
import tw from "twin.macro";
import { Navbar, PortfolioPageTop } from "../../components";

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


export default function PortfolioDetail() {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      <section css={styles.darkSection}>
        <Navbar />
        <PortfolioPageTop slug={slug} />
      </section>
    </>
  );
}