import tw, { styled } from "twin.macro";
import SocialCard from "./elements/SocialCard";

const Wrapper = tw.div`
    relative
    flex
    flex-wrap-reverse
    justify-around
    items-center
    h-full
    padding[0 32px 128px 32px]
    md:padding[0 170px 128px 170px]
    text-white
    z-10
`;

const SocialIcon = tw.div`
    grid
    grid-cols-2
    grid-column-gap[20px]
    grid-row-gap[30px]
    grid-template-columns[repeat(2, minmax(100px, 200px))]
    grid-auto-flow[row]
    grid-auto-rows[80px]
    md:mt-[64px]
    2xl:mt-0
    2xl:ml-[80px]
    z-50
`;

const Quotes = tw.div`
    z-10
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
        md:left-[15%]
        md:bottom-[0%]
        right-[0%]
        bottom-[15%]
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

export default function AboutSocial() {
    return (
        <Wrapper>
            <SocialIcon>
                <SocialCard profileUrl="https://github.com/yukebrillianth" iconSource="/assets/icons/Github.svg" iconAlt="Github @yukebrillianth" iconTitle="GitHub" IconUsername="@yukebrillianth" />
                <SocialCard profileUrl="https://instagram.com/yukebrillianth" iconSource="/assets/icons/Instagram.svg" iconAlt="Instagram @yukebrillianth" iconTitle="Instagram" IconUsername="@yukebrillianth" />
                <SocialCard profileUrl="https://www.linkedin.com/in/yukebrillianth" iconSource="/assets/icons/LinkedIn.svg" iconAlt="LinkedIn @yukebrillianth" iconTitle="LinkedIn" IconUsername="@yukebrillianth" />
                <SocialCard profileUrl="https://t.me/yukebrillianth" iconSource="/assets/icons/Telegram.svg" iconAlt="Telegram @yukebrillianth" iconTitle="Telegram" IconUsername="@yukebrillianth" />
                <SocialCard profileUrl="https://www.youtube.com/channel/UCJ8ObQYEKKVS9TRhhST_7bg" iconSource="/assets/icons/YouTube.svg" iconAlt="YouTube @yukebrillianth" iconTitle="YouTube" IconUsername="@yukebrillianth" />
                <SocialCard profileUrl="https://twitter.com/YukeBrillianth" iconSource="/assets/icons/Twitter.svg" iconAlt="Twitter @yukebrillianth" iconTitle="Twitter" IconUsername="@yukebrillianth" />
            </SocialIcon>
            <Quotes>
                <Subtitle>MY SOCMED</Subtitle>
                <Content>
                    <span>
                        <ContentHeading>
                            I have several social <br />
                            media accounts.
                        </ContentHeading>
                        <ContentPararaph>
                            I have several social media accounts that you can follow. Usually, I share my experiences on these accounts, although some of them are rarely active.
                        </ContentPararaph>
                    </span>
                </Content>
            </Quotes>
            <ShadowEffect />
        </Wrapper>
    )
}
