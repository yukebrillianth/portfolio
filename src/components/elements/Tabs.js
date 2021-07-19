import React, { useState } from "react";
import { motion } from "framer-motion";
import tw from 'twin.macro'
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line
import { Container, ContentWithPaddingXl } from "../misc/Layouts";
import { SectionHeading } from "../misc/Headings.js";
import { PrimaryButton as PrimaryButtonBase } from "../misc/Buttons.js";
// import { ReactComponent as StarIcon } from "../../img/star-icon.svg";
import electrue from "../../img/portfolio/Electrue.png";
import upvote from "../../img/portfolio/UpVote.png";
import scrape1 from "../../img/portfolio/Scrapev1.jpg";

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap px-2 py-2 rounded-lg leading-none mt-12 xl:mt-0`;

const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-gray-300 text-gray-700`}
  }
  ${props => props.active && tw`bg-gray-900! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion.a)`bg-white rounded-lg block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
// const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
// const CardRating = styled.div`
//   ${tw`mr-1 text-sm font-bold flex items-end`}
//   svg {
//     ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
//   }
// `;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

// const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-blue-600`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600`;
const CardPrice = tw.p`mt-4 text-xl font-bold`;

const Tabs = ({
    heading = "Portfolio",
    tabs = {
        All: [
            {
                imageSrc: electrue,
                title: "Electrue SaaS",
                content: "SaaS untuk sync produk marketplace. W/ React.js & Lumen microservices",
                price: "Rp. 50.000/Month",
                rating: "5.0",
                reviews: "87",
                url: "https://electrue.demo.morph.my.id/"
            },
            {
                imageSrc: upvote,
                title: "UpVote",
                content: "Aplikasi pemilihan umum, berbasis web dan mobile.",
                price: "Free",
                rating: "4.5",
                reviews: "34",
                url: "https://docs.upvote.morph.my.id/"
            },
            {
                imageSrc: scrape1,
                title: "ScrapeSync V1",
                content: "Aplikasi Scraping dan sync produk marketplace.",
                price: "Private",
                rating: "4.9",
                reviews: "89",
                url: "#"
            },
            {
                imageSrc:
                    "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                title: "Jalapeno Poppers",
                content: "Crispy Soyabeans",
                price: "$8.99",
                rating: "4.6",
                reviews: "12",
                url: "#"
            },
            {
                imageSrc:
                    "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                title: "Cajun Chicken",
                content: "Roasted Chicken & Egg",
                price: "$7.99",
                rating: "4.2",
                reviews: "19",
                url: "#"
            },
            {
                imageSrc:
                    "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                title: "Chillie Cake",
                content: "Deepfried Chicken",
                price: "$2.99",
                rating: "5.0",
                reviews: "61",
                url: "#"
            },
            {
                imageSrc:
                    "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                title: "Guacamole Mex",
                content: "Mexican Chilli",
                price: "$3.99",
                rating: "4.2",
                reviews: "95",
                url: "#"
            },
            {
                imageSrc:
                    "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                title: "Carnet Nachos",
                content: "Chilli Crispy Nachos",
                price: "$3.99",
                rating: "3.9",
                reviews: "26",
                url: "#"
            }
        ],
        Website: [
            {
                imageSrc: electrue,
                title: "Electrue SaaS",
                content: "SaaS untuk sync produk marketplace. W/ React.js & Lumen microservices",
                price: "Rp. 50.000/Month",
                rating: "5.0",
                reviews: "87",
                url: "https://electrue.demo.morph.my.id/"
            },
            {
                imageSrc: upvote,
                title: "UpVote",
                content: "Aplikasi pemilihan umum, berbasis web dan mobile.",
                price: "Free",
                rating: "4.5",
                reviews: "34",
                url: "https://docs.upvote.morph.my.id/"
            },
            {
                imageSrc: scrape1,
                title: "ScrapeSync V1",
                content: "Aplikasi Scraping dan sync produk marketplace.",
                price: "Private",
                rating: "4.9",
                reviews: "89",
                url: "#"
            },
            {
                imageSrc:
                    "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                title: "Guacamole Mex",
                content: "Mexican Chilli",
                price: "$3.99",
                rating: "4.2",
                reviews: "95",
                url: "#"
            },
            {
                imageSrc:
                    "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                title: "Chillie Cake",
                content: "Deepfried Chicken",
                price: "$2.99",
                rating: "5.0",
                reviews: "61",
                url: "#"
            },
            {
                imageSrc:
                    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                title: "Nelli",
                content: "Hamburger & Fries",
                price: "$7.99",
                rating: "4.9",
                reviews: "89",
                url: "#"
            },
            {
                imageSrc:
                    "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                title: "Jalapeno Poppers",
                content: "Crispy Soyabeans",
                price: "$8.99",
                rating: "4.6",
                reviews: "12",
                url: "#"
            },
            {
                imageSrc:
                    "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
                title: "Cajun Chicken",
                content: "Roasted Chicken & Egg",
                price: "$7.99",
                rating: "4.2",
                reviews: "19",
                url: "#"
            }
        ],
        Mobile: getRandomCards(),
        UIUX: getRandomCards()
    }
}) => {
    /*
     * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
     * as the key and value of the key will be its content (as an array of objects).
     * To see what attributes are configurable of each object inside this array see the example above for "Starters".
     */
    const tabsKeys = Object.keys(tabs);
    const [activeTab, setActiveTab] = useState(tabsKeys[0]);

    return (
        <Container id="Portfolio">
            <ContentWithPaddingXl>
                <HeaderRow>
                    <Header>{heading}</Header>
                    <TabsControl>
                        {Object.keys(tabs).map((tabName, index) => (
                            <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                                {tabName}
                            </TabControl>
                        ))}
                    </TabsControl>
                </HeaderRow>

                {tabsKeys.map((tabKey, index) => (
                    <TabContent
                        key={index}
                        variants={{
                            current: {
                                opacity: 1,
                                scale: 1,
                                display: "flex",
                            },
                            hidden: {
                                opacity: 0,
                                scale: 0.8,
                                display: "none",
                            }
                        }}
                        transition={{ duration: 0.4 }}
                        initial={activeTab === tabKey ? "current" : "hidden"}
                        animate={activeTab === tabKey ? "current" : "hidden"}
                    >
                        {tabs[tabKey].map((card, index) => (
                            <CardContainer key={index}>
                                <Card className="group" href={card.url} initial="rest" whileHover="hover" animate="rest">
                                    <CardImageContainer imageSrc={card.imageSrc}>
                                        {/* <CardRatingContainer>
                                            <CardRating>
                                                <StarIcon />
                                                {card.rating}
                                            </CardRating>
                                            <CardReview>({card.reviews})</CardReview>
                                        </CardRatingContainer> */}
                                        <CardHoverOverlay
                                            variants={{
                                                hover: {
                                                    opacity: 1,
                                                    height: "auto"
                                                },
                                                rest: {
                                                    opacity: 0,
                                                    height: 0
                                                }
                                            }}
                                            transition={{ duration: 0.3 }}
                                        >
                                            <CardButton>Deatils</CardButton>
                                        </CardHoverOverlay>
                                    </CardImageContainer>
                                    <CardText>
                                        <CardTitle>{card.title}</CardTitle>
                                        <CardContent>{card.content}</CardContent>
                                        <CardPrice>{card.price}</CardPrice>
                                    </CardText>
                                </Card>
                            </CardContainer>
                        ))}
                    </TabContent>
                ))}
            </ContentWithPaddingXl>
        </Container>
    );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
    const cards = [
        {
            imageSrc:
                "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            title: "Chicken Chilled",
            content: "Chicken Main Course",
            price: "$5.99",
            rating: "5.0",
            reviews: "87",
            url: "#"
        },
        {
            imageSrc:
                "https://images.unsplash.com/photo-1582254465498-6bc70419b607?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            title: "Samsa Beef",
            content: "Fried Mexican Beef",
            price: "$3.99",
            rating: "4.5",
            reviews: "34",
            url: "#"
        },
        {
            imageSrc:
                "https://images.unsplash.com/photo-1565310022184-f23a884f29da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            title: "Carnet Nachos",
            content: "Chilli Crispy Nachos",
            price: "$3.99",
            rating: "3.9",
            reviews: "26",
            url: "#"
        },
        {
            imageSrc:
                "https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            title: "Guacamole Mex",
            content: "Mexican Chilli",
            price: "$3.99",
            rating: "4.2",
            reviews: "95",
            url: "#"
        },
        {
            imageSrc:
                "https://images.unsplash.com/photo-1550461716-dbf266b2a8a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            title: "Chillie Cake",
            content: "Deepfried Chicken",
            price: "$2.99",
            rating: "5.0",
            reviews: "61",
            url: "#"
        },
        {
            imageSrc:
                "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327??ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            title: "Nelli",
            content: "Hamburger & Fries",
            price: "$7.99",
            rating: "4.9",
            reviews: "89",
            url: "#"
        },
        {
            imageSrc:
                "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            title: "Jalapeno Poppers",
            content: "Crispy Soyabeans",
            price: "$8.99",
            rating: "4.6",
            reviews: "12",
            url: "#"
        },
        {
            imageSrc:
                "https://images.unsplash.com/photo-1473093226795-af9932fe5856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
            title: "Cajun Chicken",
            content: "Roasted Chicken & Egg",
            price: "$7.99",
            rating: "4.2",
            reviews: "19",
            url: "#"
        }
    ];

    // Shuffle array
    return cards.sort(() => Math.random() - 0.5);
};

export default Tabs;