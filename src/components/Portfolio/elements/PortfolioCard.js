import tw, { styled } from "twin.macro";
import Image from "next/image";
import { css } from "styled-components";

const Wrapper = styled.div(({ src }) => [
  tw`
        flex
        relative
        width[315px]
        height[200px]
        border-radius[8px]
    `,
  `
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
  `,
]);

const CardInfoWrapper = styled.span(() => [
  tw`
        opacity-0
        hover:opacity-100
        transition duration-300 ease-in-out
        bg-dark/70
        absolute
        inset-0
        flex
        items-center
        justify-center
        h-full
        px-[50px]
    `,
]);

const CardInfo = styled.a(() => [
  tw`
        z-50
        text-white
        font-semibold
        font-size[22px]
        text-center
      `,
]);

export default function PortfolioCard({ imgUrl, title, slug }) {
  return (
    <Wrapper src={imgUrl}>
      <CardInfoWrapper>
        <CardInfo href={"/portfolio/" + slug}>{title}</CardInfo>
      </CardInfoWrapper>
    </Wrapper>
  );
}
