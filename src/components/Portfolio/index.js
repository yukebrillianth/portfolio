import { useState } from "react";
import tw, { styled } from "twin.macro";
import PortfolioCard from "./elements/PortfolioCard";

const Wrapper = tw.div`
    flex
    flex-col
    items-center
    justify-between
    xl:justify-center
    padding[64px 28px]
    md:padding[128px 170px]
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
        xl:grid-cols-3
        2xl:grid-cols-4
        grid-column-gap[20px]
        grid-row-gap[20px]
    `,
]);

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
          onClick={() => setActiveMenu("Web")}
          active={activeMenu === "Web" ? true : false}
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
        <PortfolioCard
          imgUrl="https://img.freepik.com/free-vector/app-learn-languages_52683-43478.jpg?w=2000"
          title="Affiliate SaaS with Golang and React"
          slug="affiliate-saas"
        />
        <PortfolioCard
          imgUrl="https://img.freepik.com/free-vector/location-app-screens-collection_23-2148684985.jpg?w=2000"
          title="Affiliate SaaS with Golang and React"
          slug="affiliate-saas"
        />
        <PortfolioCard
          imgUrl="https://assets.materialup.com/uploads/58b46fea-e7ad-4c66-bbbb-64d691a44e5d/preview.png"
          title="Affiliate SaaS with Golang and React"
          slug="affiliate-saas"
        />
        <PortfolioCard
          imgUrl="https://i.pinimg.com/originals/c9/3c/43/c93c4357e1c759280634317288844cdd.png"
          title="Affiliate SaaS with Golang and React"
          slug="affiliate-saas"
        />
        <PortfolioCard
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo47WUCjEcdJT_cIbDicB91vcvolf05dnJyh6UpOWKLUlM5zsuOXJDfKdO02JLd-ed-As&usqp=CAU"
          title="Affiliate SaaS with Golang and React"
          slug="affiliate-saas"
        />
        <PortfolioCard
          imgUrl="https://i.pinimg.com/736x/3c/98/eb/3c98eba06990bae15af6135b13159da6.jpg"
          title="Affiliate SaaS with Golang and React"
          slug="affiliate-saas"
        />
        <PortfolioCard
          imgUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNb9TTe7jdVjCYicKVy7RH-lTLMyHNBe9tEgAOHicAusl4C9QtZLZR2rORtCyaLw8OieU&usqp=CAU"
          title="Affiliate SaaS with Golang and React"
          slug="affiliate-saas"
        />
        <PortfolioCard
          imgUrl="https://cdn.dribbble.com/users/2530474/screenshots/14874956/media/a3a48eab8dbda01ec5d9114874490cd8.png?compress=1&resize=400x300  "
          title="Affiliate SaaS with Golang and React"
          slug="affiliate-saas"
        />
      </CardWrapper>
    </Wrapper>
  );
}
