import tw, { styled } from "twin.macro";

const Wrapper = tw.div`
    relative
    flex
    flex-wrap
    justify-around
    items-center
    h-full
    padding[64px 32px 128px 32px]
    md:padding[128px 170px 70px 170px]
    text-white
    z-10
`;

const EducationIllustration = tw.div`
    mt-[64px]
    2xl:mt-0
    z-50
`;

const Quotes = tw.div`
    z-50
    flex
    flex-col
`

const Subtitle = tw.span`
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

const Content = tw.span`
    flex
    flex-wrap
    justify-between
    items-center
`

const ContentHeading = tw.h2`
    font-semibold
    font-size[34px]
    line-height[34px]
    mt-[32px]
    md:font-size[64px]
    md:line-height[64px]
    md:margin[32px 0 0 80px]
`

const ContentPararaph = tw.p`
    max-w-[635px]
    mt-[40px]
    md:margin[40px 0 0 80px]
    font-normal
    font-size[18px]
    line-height[24px]
    text-[#B8B8B8]
    mb-[64px]
    md:mb-0
`

const ShadowEffect = styled.span(() => [
    tw`
        absolute
        md:w-[300px]
        md:h-[300px]
        w-[300px]
        h-[300px]
        z-0
        md:right-[25%]
        md:top-[25%]
        right-[0%]
        top-[15%]
        opacity-30
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

export default function AboutEducation() {
    return (
        <Wrapper>
            <Quotes>
                <Subtitle>MY EDUCATION</Subtitle>
                <Content>
                    <span>
                        <ContentHeading>
                            Now i am a student in <br tw="hidden md:block" />
                            high school.
                        </ContentHeading>
                        <ContentPararaph>
                            I was born in Sidoarjo City on September 7, 2005, currently I live in Sidoarjo City. I learned programming since grade 4 by self-taught. Then when I was in junior high school at SMPN 1 TAMAN I won 1st place in the district level programming and provincial level animation competition.
                            <br />
                            <br />
                            I'm currently in high school at SMAN 1 TAMAN and am building a portfolio, SaaS, hosting provider.
                        </ContentPararaph>
                    </span>
                </Content>
            </Quotes>
            <EducationIllustration>
                <img src="/assets/education.svg" alt="pendidikan yukebrillianth" />
            </EducationIllustration>
            <ShadowEffect />
        </Wrapper>
    )
}
