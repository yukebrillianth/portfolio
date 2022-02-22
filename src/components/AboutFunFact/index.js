import tw, { styled } from "twin.macro"

const Wrapper = styled.section(() => [
    tw`
        relative
        flex
        flex-col
        items-center
        padding[64px 28px]
        md:padding[128px 170px]
        text-dark
    `
]);

const Title = styled.h2(() => [
    tw`
        font-semibold
        font-size[3.375rem]
        line-height[3.687rem]
        mt-0
        mb-[92px]
    `
]);

const Quotes = styled.div(() => [
    tw`
        z-50
        flex
        flex-col
        mb-[100px]
    `
]);

const Subtitle = styled.span(() => [
    tw`
        font-semibold
        font-size[13px]
        line-height[23px]
        before:content-[""]
        before:inline-block
        before:vertical-align[super]
        before:border-primary
        before:border-[1px]
        before:width[32px]
        before:mr-[1em]
    `
]);

const Content = styled.span(() => []);

const ContentHeading = styled.h2(() => [
    tw`
        font-semibold
        font-size[34px]
        line-height[34px]
        mt-[32px]
        md:font-size[64px]
        md:line-height[64px]
        md:margin[32px 0 0 80px]
    `
]);

const ContentPararaph = styled.p(() => [
    tw`
        max-w-[404px]
        mt-[40px]
        md:margin[40px 0 0 80px]
        font-normal
        font-size[18px]
        line-height[22px]
        text-[#575958]
    `
]);

const SkillLogo = styled.div(() => [
    tw`
        flex
        flex-wrap
        space-x-8
        space-y-8
        md:space-x-12
        lg:space-x-24 
        xl:space-x-32 
        place-items-center 
        place-content-center
        items-center
    `
]);

const ShadowEffect = styled.span(() => [
    tw`
        absolute
        md:w-[300px]
        md:h-[300px]
        w-[300px]
        h-[300px]
        z-0
        md:right-[20%]
        right-[0%]
        top-[25%]
        opacity-70
        rounded-[150px]
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

export default function About() {
    return (
        <Wrapper>
            <Title>About Me.</Title>
            <Quotes>
                <Subtitle>FUN FACT</Subtitle>
                <Content>
                    <ContentHeading>
                        Currently, I am an <br />
                        enthusiast at Node.js <br />
                        and Frontend React <br />
                        & Next JS.
                    </ContentHeading>
                    <ContentPararaph>Besides that I also have strong fundamentals of Backends such as PHP Laravel, Microservice Architecture and databases like RDBMS MySQL and Postgresql.</ContentPararaph>
                </Content>
            </Quotes>
            <SkillLogo>
                <img src="/assets/icons/js.svg" alt="js-logo" />
                <img src="/assets/icons/node.svg" alt="node-logo" />
                <img src="/assets/icons/react.svg" alt="react-logo" />
                <img src="/assets/icons/laravel.svg" alt="laravel-logo" />
                <img src="/assets/icons/gql.svg" alt="gql-logo" />
            </SkillLogo>
            <ShadowEffect />
        </Wrapper>
    )
}
