import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { Footer, Navbar, Search } from "../../components";
import PortfolioCard from "../../components/Portfolio/elements/PortfolioCard";
import { GET_ALL_PORTFOLIOS, GET_PORTFOLIOS_BY_CATEGORY } from "../../GraphQL/Queries";

const styles = {
    darkSection: (sticky) => [
        tw`
        bg-dark
        background-size[400%]
        md:background-size[300%]
        lg:background-size[200%]
        xl:background-size[cover]
      `,
        `
        background-image: url(/assets/backgrounds/grid-dark.svg);
        background-position: 100%;
      `,
        sticky ? tw`relative` : "",
    ],
    lightSection: (sticky) => [
        tw`
        bg-white
        background-size[400%]
        md:background-size[300%]
        lg:background-size[200%]
        xl:background-size[cover]
      `,
        `
        background-image: url(/assets/backgrounds/grid-light.svg);
        background-position: 100%;
        // background-size: cover;
      `,
        sticky ? tw`relative` : "",
    ],
};

const Wrapper = tw.div`
    flex
    flex-col
    items-center
    justify-between
    xl:justify-center
    padding[64px 28px]
    xl:padding[128px]
    text-white
    w-full
`;

const Title = tw.h2`
    font-semibold
    font-size[3.375rem]
    line-height[3.687rem]
    mt-0
    mb-[70px]
`;

const MenuWrapper = styled.div`
    ${tw`
            container
            w-full
            flex
            flex-col
            lg:flex-row
            lg:justify-between
            items-center
            gap-12
            lg:gap-0
            mb-[126px]
        `
    }
`;

const CategoryWrapper = tw.div`
    flex
    flex-wrap
    gap-[25px]
    justify-between
    xl:justify-center
    w-full
    md:w-auto
`;

const Category = styled.button(({ active }) => [
    active ? tw`bg-white text-dark` : "",
    tw`
        font-semibold
        text-[16px]
        p-[12px 24px]
        md:rounded-full
        border-radius[4px]
        width[45%]
        lg:w-auto
    `,
]);

const CardWrapper = styled.div(() => [
    tw`
          grid
          grid-cols-1
          lg:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-[20px]
          mb-[40px]
      `,
]);

function DisplayPortfoliosCard() {
    const [portfolios, setPortfolios] = useState([]);
    const { loading, data } = useQuery(GET_ALL_PORTFOLIOS, {
        variables: { first: 8 }
    })

    useEffect(() => {
        if (data) {
            setPortfolios(data.portfolios);
        }
    }, [data]);

    if (loading) {
        return (
            <>
                <PortfolioCard isSkeleton={true} />
                <PortfolioCard isSkeleton={true} />
                <PortfolioCard isSkeleton={true} />
                <PortfolioCard isSkeleton={true} />
                <PortfolioCard isSkeleton={true} />
                <PortfolioCard isSkeleton={true} />
                <PortfolioCard isSkeleton={true} />
                <PortfolioCard isSkeleton={true} />
            </>
        )
    }

    return portfolios.map((portfolio) => (
        <PortfolioCard
            key={portfolio.slug}
            imgUrl={portfolio.cover.url}
            title={portfolio.title}
            slug={portfolio.slug}
        />
    )
    )
}

function DisplayPortfoliosCardByCategory(props) {
    const [portfolios, setPortfolios] = useState([]);
    const { loading, data } = useQuery(GET_PORTFOLIOS_BY_CATEGORY, {
        variables: { first: 8, category: props.category }
    });

    useEffect(() => {
        if (data) {
            setPortfolios(data.portfolios)
        }
    }, [data]);
    if (loading) {
        return (
            <>
                <PortfolioCard isSkeleton={true} />
                <PortfolioCard isSkeleton={true} />
                <PortfolioCard isSkeleton={true} />
                <PortfolioCard isSkeleton={true} />
                <PortfolioCard isSkeleton={true} />
                <PortfolioCard isSkeleton={true} />
                <PortfolioCard isSkeleton={true} />
                <PortfolioCard isSkeleton={true} />
            </>
        )
    }
    return portfolios.map((portfolio) => (
        <PortfolioCard
            key={portfolio.slug}
            imgUrl={portfolio.cover.url}
            title={portfolio.title}
            slug={portfolio.slug}
        />
    ));
}

export default function Portfolio() {
    const [activeMenu, setActiveMenu] = useState("All");
    return (
        <>
            <Navbar />
            <section css={styles.darkSection}>
                <Wrapper>
                    <Title>Portfolio.</Title>
                    <MenuWrapper>
                        <Search type="portfolio" placeholder="Search portfolio...." action="/portfolio/search" />
                        <CategoryWrapper>
                            <Category
                                onClick={() => setActiveMenu("All")}
                                active={activeMenu === "All" ? true : false}
                            >
                                All
                            </Category>
                            <Category
                                onClick={() => setActiveMenu("Website")}
                                active={activeMenu === "Website" ? true : false}
                            >
                                Web
                            </Category>
                            <Category
                                onClick={() => setActiveMenu("Design")}
                                active={activeMenu === "Design" ? true : false}
                            >
                                Design
                            </Category>
                            <Category
                                onClick={() => setActiveMenu("Mobile")}
                                active={activeMenu === "Mobile" ? true : false}
                            >
                                Mobile
                            </Category>
                        </CategoryWrapper>
                    </MenuWrapper>
                    <CardWrapper>
                        {activeMenu === "All" ? (
                            <DisplayPortfoliosCard />
                        ) : (
                            <DisplayPortfoliosCardByCategory category={activeMenu} />
                        )}
                    </CardWrapper>
                </Wrapper>
                <Footer light />
            </section>
        </>
    );
}