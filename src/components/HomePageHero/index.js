import tw, { styled } from "twin.macro"

const Wrapper = styled.section(() => [
    tw`
        flex
        flex-col
        items-center
        px-[20px]
        md:px-0
    `
]);

const Title = styled.h1(() => [
    tw`
        font-semibold
        font-size[54px]
        line-height[54px]
        md:font-bold
        md:font-size[72px]
        md:line-height[72px]
        md:text-center
        text-white
        margin-top[50px]
        md:margin-top[115px]
        z-50
    `
]);

const TitleGradient = styled.span(() => [
    `
        @keyframes backgroundChange0 {
            0% {
            background-position: 0% 50%;
            }
            50% {
            background-position: 100% 50%;
            }
            100% {
            background-position: 0% 50%;
            }
        }
        background: linear-gradient(90deg, #bb34fa, #ff9800, #bb34fa);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: 200% 200%;
        animation: backgroundChange0 15s ease infinite;
    `
]);

const ShadowEffect = styled.span(() => [
    tw`
        hidden
        absolute
        w-[300px]
        h-[300px]
        z-0
        left-[12%]
        top-[15%]
        opacity-30
    `,
    `
        background: conic-gradient(
        from 180deg at 50% 50%,
        #b524f9 0deg,
        #ff9800 0.04deg,
        #bb34fa 360deg
        );
        filter: blur(100px);
    `
]);

const HeroIllustration = styled.div(() => [
    tw`
        md:mt-[-120px]
        z-0
    `
]);

export default function Hero() {
    return (
        <Wrapper id="Hero">
            <Title>
                Hi, I'm <TitleGradient>Yuke Brilliant Hestiavin.</TitleGradient> <br />
                I'm a web and android <br />
                app developer.
            </Title>
            <HeroIllustration>
                <img tw="hidden md:block" src="/assets/hero.svg" alt="hero" />
                <img tw="block md:hidden" src="/assets/hero-mobile.svg" alt="hero" />
            </HeroIllustration>
            <ShadowEffect />
        </Wrapper>
    )
}