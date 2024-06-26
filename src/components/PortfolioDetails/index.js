import { RichText } from '@graphcms/rich-text-react-renderer';
import React from 'react'
import styled from 'styled-components';
import tw from 'twin.macro';

const Wrapper = styled.section(() => [
    tw`
        relative
        flex
        flex-col
        items-center
        padding[64px 20px]
        sm:padding[64px 28px]
        md:padding[28px 170px]
        text-dark
    `
]);

const Details = styled.article`
    ${tw`
            max-w-5xl
            lg:px-[32px]
        `
    }
    font-family: 'PT Serif', serif;
    font-size: 20px;
    blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre {
        margin: 16px 0;
    }
    h1, h2, h3, h4, h5, h6, th {
        ${tw`
                font-sans
            `
    }
    }
    h1 {
        ${tw`
                mb-4 
                text-4xl 
                text-gray-900 
                md:text-5xl 
                lg:text-6xl
            `
    }
    }
    h2 {
        ${tw`
                mb-4 
                text-2xl 
                text-gray-900
                lg:font-size[32px]
            `
    }
    }
    h4 {
        font-weight: bold;
        font-size: 24px;
        line-height: 36px;
    }
    p {
        font-size: 20px;
        font-weight: 33px;
        margin-top: .86em!important;
        ${tw`
                my-4
            `
    }
    }
    ol, ul {
        font-size: 20px;
        font-weight: 33px
        ${tw`
                my-4
            `
    }
        list-style: initial;
        list-style-position: inside;
        margin: 16px 0;
        padding: 0 0 0 40px;
    }
    li {
        ${tw`
            my-2
        `}
    }
    ol {
        list-style: decimal;
    }
    code {
        margin-top: .86em!important
        ${tw`
                bg-gray-100 
                dark:bg-gray-800
                rounded-md 
                p-2 
                text-sm
            `
    }
    }
    pre {
        margin-top: .86em!important
        ${tw`
            bg-gray-100 
            dark:bg-gray-800 
            overflow-y-scroll 
            rounded-md 
            p-2 
            text-sm
            `
    }
    }
    
    table {
        ${tw`
            border-collapse 
            table-auto 
            border
            w-full
            min-w-full
            text-sm
            `
    }
        width: 100% !important; 
        word-wrap: break-word; 
        word-break: break-all;
    }
    thead {
        ${tw`
        whitespace-nowrap 
                bg-gray-800
                text-white
                px-6 py-4
            `
    }
    }

    thead th {
        ${tw`
            px-6
            text-center
        `}
    }

    tbody {
        ${tw`
            border-b
            `
    }
    }

    tbody tr {
        ${tw`
                border-b
                even:bg-gray-100
                hover:bg-gray-300
            `
    }
    }

    h2:not(:first-child) {
        margin-top: 1em;
        padding-top: 1em;
    }

    h3:not(:first-child) {
        margin-top: 1em;
        padding-top: 1em;
    }

    td {
        ${tw`
            whitespace-nowrap 
            border-r 
            px-6 
            py-4
            `
    }
    }

    div {
        margin-top: .86em!important
    }
`;

export default function PortfolioDetails(props) {
    return (
        <Wrapper>
            <Details>
                <RichText content={props.content.children} />
            </Details>
        </Wrapper>
    )
}
