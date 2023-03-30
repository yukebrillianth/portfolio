import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const styles = {
    darkSection: (sticky) => [
        tw`
        bg-dark
        xl:background-size[cover]
      `,
        `
        background-image: url(/assets/backgrounds/black-hole.svg);
        background-position: 50%;
      `,
        sticky ? tw`relative` : "",
    ]
};

const Wrapper = styled.div(() => [
    tw`
        flex
        flex-col
        items-center
        justify-center
        md:px-0
        px-8
        min-h-screen
    `
]);

const ErorrText = styled.p(() => [
    tw`
        text-white
        font-size[14px]
        line-height[20px]
        font-bold
        mb-1
    `
]);

const LargeText = styled.h1(() => [
    tw`
        text-white
        font-size[74px]
        line-height[81px]
        font-semibold
        mb-6
    `
]);

const MediumText = styled.h2(() => [
    tw`
        text-white
        font-size[64px]
        line-height[64px]
        font-semibold
        text-center
        mb-6
    `
]);

const ErrorDetailsText = styled.p(() => [
    tw`
        text-white
        font-size[16px]
        line-height[24px]
        font-normal
        text-center
        mb-8
    `
]);

const StyledLink = styled.a`
    ${tw`
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
`

function ErrorNotFound() {
    return (
        <section css={styles.darkSection}>
            <Wrapper>
                <ErorrText>404-ERROR</ErorrText>
                <LargeText>Whoops!</LargeText>
                <MediumText>The page is gone.</MediumText>
                <ErrorDetailsText>Maybe this page used to exist or you just misspelled something.</ErrorDetailsText>
                <Link href="/">
                    <StyledLink>Back Home</StyledLink>
                </Link>
            </Wrapper>
        </section>
    )
}

export default ErrorNotFound