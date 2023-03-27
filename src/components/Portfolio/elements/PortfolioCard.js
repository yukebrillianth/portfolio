import tw, { styled } from "twin.macro";
import propTypes from 'prop-types';

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
    return <Wrapper className="animate-pulse" src="/assets/placeholder.jpg">
      <CardInfoWrapper>
        <CardInfo href={"/portfolio"}>{props.title}</CardInfo>
      </CardInfoWrapper>
    </Wrapper>
  } else {
    return <Wrapper src={props.imgUrl}>
      <CardInfoWrapper>
        <CardInfo href={"/portfolio/" + props.slug}>{props.title}</CardInfo>
      </CardInfoWrapper>
    </Wrapper>
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