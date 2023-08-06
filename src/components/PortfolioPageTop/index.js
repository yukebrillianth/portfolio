import { Dialog, Transition } from '@headlessui/react';
import React, { useState } from 'react';
import tw, { styled } from 'twin.macro';

const Wrapper = styled.section(() => [
    tw`
        flex
        flex-col
        items-center
        justify-center
        text-white
        lg:px-[128px]
        mt-[70px]
        md:px-0
    `
]);

const PortfolioCategory = styled.a(() => [
    tw`
        uppercase
        text-lg
        mb-7
    `
]);

const PortfolioTitleWrapper = styled.span(() => [
    tw`
        px-[28px]
    `
]);

const PortfolioTitle = styled.h1(() => [
    tw`
        font-size[44px]
        font-semibold
        line-height[55px]
        text-center
    `
]);

const ImagesContainer = styled.div`
    ${tw`
            max-w-5xl
            mt-[83px]
            sm:px-[32px]
            px-[20px]
            // w-full
            flex
            flex-col
            mb-16
        `
    }
`;

const Image = styled.img`
    ${tw`
            w-full
            rounded-lg
        `
    }
`;

const ImagesPickerContainer = styled.div`
    ${tw`
            w-full
            flex
            flex-row
            md:overflow-x-hidden
            overflow-x-scroll
            justify-start
            gap-4
        `
    }
`;

const ImagesPicker = styled.img`
    ${tw`
            h-24
            w-24
            object-contain
            bg-white
            rounded-lg
            cursor-pointer
        `
    }
    ${props => props.active && tw`border-4 border-primary`}
`;

const StyledLink = styled.a`
    ${tw`
            flex
            flex-row
            gap-1
            justify-center
            items-center
            w-max
            mt-[70px]   
            padding[8px 16px]
            md:padding[12px 24px]
            hover:opacity-70
            bg-primary
            border-radius[100px]
            text-white
            font-semibold
            text-sm
            cursor-pointer
        `
    }
    box-shadow: 0px 4px 20px rgba(255, 152, 0, 0.3);
`;

const ShadowEffect = styled.span(() => [
    tw`
        // hidden
        absolute
        md:w-[300px]
        md:h-[300px]
        w-[150px]
        h-[150px]
        z-0
        left-[12%]
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

export default function PortfolioPageTop(props) {
    const [activeImage, setActiveImage] = useState(0);
    const [magnifierActive, setMagnifierActive] = useState(false);
    return (
        <>
            <Wrapper>
                <Transition
                    show={magnifierActive}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                >
                    <Dialog className="fixed z-10 inset-0 overflow-y-auto" open={magnifierActive} onClose={() => setMagnifierActive(false)}>
                        <div className="flex items-center justify-center min-h-screen">
                            <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
                            <div className="relative bg-white rounded max-w-6xl mx-auto">
                                <Dialog.Description>
                                    <Image style={{ cursor: "zoom-out" }} className="mb-0" onClick={() => setMagnifierActive(!magnifierActive)} src={props.portfolio.images[activeImage].url} />
                                </Dialog.Description>
                            </div>
                        </div>
                    </Dialog>
                </Transition>
                <PortfolioCategory>{props.portfolio.category.map((item) => item).join(" & ")}</PortfolioCategory>
                <PortfolioTitleWrapper>
                    <PortfolioTitle>{props.portfolio.title}</PortfolioTitle>
                </PortfolioTitleWrapper>
                <ImagesContainer>
                    <Image className="mb-8" style={{ cursor: "zoom-in" }} onClick={() => setMagnifierActive(!magnifierActive)} src={props.portfolio.images[activeImage].url} />
                    <ImagesPickerContainer>
                        {props.portfolio.images.map((image, index) => {
                            if (activeImage === index) {
                                return <ImagesPicker active={true} alt={image.fileName} key={image.fileName} src={image.url} />
                            } else {
                                return <ImagesPicker active={false} onClick={() => setActiveImage(index)} alt={image.fileName} key={image.fileName} src={image.url} />
                            }
                        })}
                    </ImagesPickerContainer>
                    <StyledLink href={props.portfolio.projectUri} target="_blank"><img src="/assets/icons/link.svg" width="24" height="24" /> Link to this {props.portfolio.category}</StyledLink>
                </ImagesContainer>
                <ShadowEffect />
            </Wrapper>
        </>
    )
}
