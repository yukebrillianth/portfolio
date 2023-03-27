import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import tw, { styled } from 'twin.macro';
import { GET_PORFOLIO_BY_SLUG } from '../../GraphQL/Queries';

const Wrapper = styled.div(() => [
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

const PortfolioImagesWrapper = styled.div(() => [
    tw`
        max-w-5xl
        mt-[83px]
    `
]);

export default function PortfolioPageTop(props) {
    const [portfolio, setPortfolio] = useState([]);

    const { data } = useQuery(GET_PORFOLIO_BY_SLUG, {
        variables: { slug: props.slug }
    })

    useEffect(() => {
        if (data) {
            setPortfolio(data.portfolio);
        }
    }, [data]);
    return (
        <>
            <Wrapper>
                <PortfolioCategory>{portfolio.category}</PortfolioCategory>
                <PortfolioTitleWrapper>
                    <PortfolioTitle>{portfolio.title}</PortfolioTitle>
                </PortfolioTitleWrapper>
                <PortfolioImagesWrapper>

                </PortfolioImagesWrapper>
            </Wrapper>
        </>
    )
}
