import { useRouter } from "next/router";
import Image from "next/image";
import tw, { styled } from "twin.macro";

const Wrapper = styled.div(() => [
  `
      background-image: url(/assets/backgrounds/grid-dark.svg);
      background-position: 100%;
    `,
  tw`
        bg-dark
        py-[64px]
        md:py-[70px]
        // px-[24px]
        md:px-[auto]
        background-size[400%]
        md:background-size[300%]
        lg:background-size[200%]
        xl:background-size[cover]
    `,
]);

const Container = styled.div(() => [
  tw`
        container
        flex
        flex-col
        mx-auto
        justify-center
        items-center
    `,
]);

const MenuList = styled.ul(() => [
  tw`
        flex 
        flex-row
        gap-2.5
        mb-[48px]
        md:gap-0
        md:space-x-[20px]
        md:mt-0
        md:text-sm
        font-medium
    `,
]);

const MenuLink = styled.a(() => [
  tw`
        block
        py-2
        pr-4
        pl-3
        rounded
        text-white
    `,
]);

const HereWeGo = styled.p(() => [
  tw`
        text-white
        font-bold
        font-size[12px]
        mb-[22px]
    `,
]);

const FooterInfoWrapper = styled.span(() => [
  tw`
        flex
        flex-row
        gap-[10px]
    `,
]);

const FooterInfoLink = styled.a(() => [
  tw`
        flex
        items-center
        gap-[10px]
        text-white
        font-medium
        font-size[12px]
    `,
]);

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <MenuList>
          <MenuLink href="/about">About</MenuLink>
          <MenuLink href="/contact">Contact</MenuLink>
          <MenuLink href="/portfolio">Portfolio</MenuLink>
          <MenuLink href="/blog">Blog</MenuLink>
        </MenuList>
        <HereWeGo>Here We Go</HereWeGo>
        <FooterInfoWrapper>
          <FooterInfoLink href="https://figma.com/">
            Designed with
            <Image
              src="/assets/icons/figma.svg"
              alt="designed with figma"
              width={16}
              height={16}
            />
          </FooterInfoLink>
          <FooterInfoLink href="https://nextjs.org/">
            Developed with
            <Image
              src="/assets/icons/next.svg"
              alt="developed with next.js"
              width={16}
              height={16}
            />
          </FooterInfoLink>
          {/* <FooterInfoLink href="https://pages.cloudflare.com/">
            Deployed with
            <Image
              src="/assets/icons/cloudflare.svg"
              alt="Deployed with cloudflare"
              width={35}
              height={16}
            />
          </FooterInfoLink> */}
          <FooterInfoLink href="https://hygraph.com/">
            Backend with
            <Image
              src="/assets/icons/graphcms.svg"
              alt="Backend with GraphCMS"
              width={16}
              height={16}
            />
          </FooterInfoLink>
        </FooterInfoWrapper>
      </Container>
    </Wrapper>
  );
}
