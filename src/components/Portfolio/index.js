import { useQuery } from "@apollo/client";
import Link from "next/link";
import { useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import { GET_ALL_PORTFOLIOS, GET_PORTFOLIOS_BY_CATEGORY } from "../../GraphQL/Queries";
import PortfolioCard from "./elements/PortfolioCard";

const Wrapper = tw.div`
    flex
    flex-col
    items-center
    justify-between
    xl:justify-center
    padding[64px 28px]
    2xl:padding[128px 170px]
    text-white
`;

const Title = tw.h2`
    font-semibold
    font-size[3.375rem]
    line-height[3.687rem]
    mt-0
    mb-[40px]
`;

const MenuWrapper = tw.div`
    flex
    flex-wrap
    gap-[25px]
    justify-between
    xl:justify-center
    mb-[100px]
    w-full
    md:w-auto
`;

const Menu = styled.button(({ active }) => [
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
        grid-column-gap[20px]
        grid-row-gap[20px]
        mb-[40px]
    `,
]);

const LoadMoreBtn = styled.a(() => [
  tw`
      flex
      justify-center
      items-center
      padding[8px 16px]
      md:padding[12px 24px]
      bg-primary
      border-radius[100px]
      hover:opacity-70
      text-white
      font-semibold
      font-size[14px]
      margin-right[4px]
  `,
  `box-shadow: 0px 4px 20px rgba(255, 152, 0, 0.3);`
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
    <Wrapper>
      <Title>Portfolio.</Title>
      <MenuWrapper>
        <Menu
          onClick={() => setActiveMenu("All")}
          active={activeMenu === "All" ? true : false}
        >
          All
        </Menu>
        <Menu
          onClick={() => setActiveMenu("Website")}
          active={activeMenu === "Website" ? true : false}
        >
          Web
        </Menu>
        <Menu
          onClick={() => setActiveMenu("Design")}
          active={activeMenu === "Design" ? true : false}
        >
          Design
        </Menu>
        <Menu
          onClick={() => setActiveMenu("Mobile")}
          active={activeMenu === "Mobile" ? true : false}
        >
          Mobile
        </Menu>
      </MenuWrapper>
      <CardWrapper>
        {activeMenu === "All" ? (
          <DisplayPortfoliosCard />
        ) : (
          <DisplayPortfoliosCardByCategory category={activeMenu} />
        )}
      </CardWrapper>
      <Link prefetch href="/portfolio" passHref>
        <LoadMoreBtn>Show More</LoadMoreBtn>
      </Link>
    </Wrapper>
  );
}
