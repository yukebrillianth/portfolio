import tw from "twin.macro";
import propTypes from "prop-types";

const Wrapper = tw.div`
    flex
    flex-col
    items-start
    justify-center
    bg-[#1d1d1d]
    padding[10px 28px]
    border-radius[12px]
`;

const Icon = tw.span`
    flex
    flex-row
    justify-center
    items-center
    mb-[10px]
`;

const IconTitle = tw.span`
    font-semibold
    font-size[18px]
    line-height[22px]
`;

const Username = tw.span`
    m-0
    font-medium
    font-size[12px]
    line-height[15px]
    text-[#b8b8b8]
`;

export default function SocialCard({ iconSource, iconAlt, iconTitle, IconUsername }) {
    return (
        <Wrapper>
            <Icon>
                <img tw="mr-[6px]" src={iconSource} alt={iconAlt} />
                <IconTitle>{iconTitle}</IconTitle>
            </Icon>
            <Username>{IconUsername}</Username>
        </Wrapper>
    )
}

SocialCard.propTypes = {
    iconSource: propTypes.string.isRequired,
    iconAlt: propTypes.string.isRequired,
    iconTitle: propTypes.string.isRequired,
    IconUsername: propTypes.string.isRequired,
};