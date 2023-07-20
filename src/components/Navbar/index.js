import Image from "next/image";
import { useRouter } from "next/router";
import { useState } from "react";
import tw, { styled } from "twin.macro"

const Wrapper = styled.nav(() => [
    `
      background-image: url(/assets/backgrounds/grid-dark.svg);
      background-position: 100%;
    `,
    tw`
        bg-dark
        py-[28px]
        md:py-[50px]
        px-[28px]
        md:px-[28px]
        background-size[400%]
        md:background-size[300%]
        lg:background-size[200%]
        xl:background-size[cover]
    `
]);

const Container = styled.div(() => [
    tw`
        container
        flex
        flex-wrap
        mx-auto
        justify-between
        items-center
    `
]);

const LogoWrapper = styled.a(() => [
    tw`
        flex
    `
]);

const MainMenu = styled.div(({ active }) => [
    active ? '' : tw`hidden`,
    tw`
        justify-between
        items-center
        w-full
        md:flex
        md:w-auto
        md:order-none
        order-1
        z-50
    `
]);

const MainMenuList = styled.ul(() => [
    tw`
        flex 
        flex-col
        gap-2.5
        mb-2.5
        md:gap-0
        mt-[28px]
        md:flex-row
        md:space-x-8
        md:mt-0
        md:mb-0
        md:text-sm
        font-medium
    `
]);

const MainMenuLink = styled.a(({ active }) => [
    tw`
        block
        py-2
        pr-4
        pl-3
        rounded
    `,
    active ? tw`text-primary` : tw`text-white`
]);

const MainCallToAction = styled.a(() => [
    tw`
        hidden
        md:flex
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

const MainCallToActionMobile = styled.a(() => [
    tw`
        flex
        md:hidden
        justify-center
        items-center
        padding[8px 16px]
        bg-primary
        border-radius[100px]
        hover:opacity-70
        text-white
        font-semibold
        font-size[18px]
        margin-right[4px]
        mt-[18px]
    `,
    `box-shadow: 0px 4px 20px rgba(255, 152, 0, 0.3);`
]);

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    const router = useRouter();
    return (
        <Wrapper>
            <Container>
                <LogoWrapper href="/">
                    <Image src="/assets/logo.svg" alt="cv Portofolio yuke brilliant" width={90} height={48} />
                </LogoWrapper>
                <MainMenu active={menuOpen}>
                    <MainMenuList>
                        <li>
                            <MainMenuLink href="/" active={router.pathname === "/"}>HOME</MainMenuLink>
                        </li>
                        <li>
                            <MainMenuLink href="/portfolio" active={router.pathname === "/portfolio" || router.pathname === "/portfolio/[slug]"}>PORTFOLIO</MainMenuLink>
                        </li>
                        <li>
                            <MainMenuLink href="/blog">BLOG</MainMenuLink>
                        </li>
                        <li>
                            <MainMenuLink href="/contact">CONTACT</MainMenuLink>
                        </li>
                    </MainMenuList>
                    <MainCallToActionMobile href="mailto:me@yukebrillianth.my.id">Let's Talk</MainCallToActionMobile>
                </MainMenu>
                <span className="flex flex-row">
                    <MainCallToAction href="mailto:me@yukebrillianth.my.id">Let's Talk</MainCallToAction>
                    <button onClick={() => setMenuOpen(!menuOpen)} type="button" className="inline-flex items-center p-2 ml-1 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2">
                        <span className="sr-only">Open main menu</span>
                        {/* <svg className={menuOpen ? "hidden" : "w-6 h-6"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg> */}
                        <svg className={menuOpen ? "hidden" : "stroke-current text-current"} width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M31 16H13" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M31 26.6001H1" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path><path d="M31 5.3999H1" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        <svg className={menuOpen ? "w-6 h-6" : "hidden"} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" > <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg >
                    </button >
                </span>
            </Container >
        </Wrapper >
    )
}