import tw, { styled } from "twin.macro";
import propTypes from 'prop-types';
import Image from "next/image";

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

export default function PortfolioCard(props) {
  if (props.isSkeleton === true) {
    return <div css={tw`flex relative width[315px] height[190px] border-radius[8px] animate-pulse`}><Image width={315} height={190} css={tw`width[315px] height[190px] border-radius[8px] animate-pulse`} src="/assets/placeholder.jpg" />
      <CardInfoWrapper>
        <CardInfo href={"/portfolio"}>{props.title}</CardInfo>
      </CardInfoWrapper></div>
  } else {
    return <div css={tw`flex relative width[315px] height[190px] border-radius[8px]`}><Image width={315} height={190} css={tw`width[315px] height[190px] border-radius[8px] object-cover`} objectFit="cover" src={props.imgUrl} placeholder="blur" blurDataURL="/assets/placeholder.jpg" />
      <CardInfoWrapper>
        <CardInfo href={"/portfolio/" + props.slug}>{props.title}</CardInfo>
      </CardInfoWrapper></div>
  }
}

PortfolioCard.defaultProps = {
  title: 'Portfolio title is loading...',
  slug: '/portfolio',
  imgUrl: 'Portfolio imgUrl is loading...',
}

PortfolioCard.propTypes = {
  isSkeleton: propTypes.bool,
  title: propTypes.string.isRequired,
  slug: propTypes.string.isRequired,
  imgUrl: propTypes.string.isRequired
}