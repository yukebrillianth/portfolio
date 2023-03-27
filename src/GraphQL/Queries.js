import { gql } from "@apollo/client";

export const GET_BLOG_POSTS = gql`
    query GetBlogPosts {
        posts(first: $first) {
        slug
        title
        coverImage {
            url(transformation: {document: {output: {format: webp}}})
        }
        publishedAt
        excerpt
        }
    }
`;

export const GET_ALL_PORTFOLIOS = gql`
    query GetPortfolios($first: Int) {
        portfolios(first: $first) {
        slug
        title
        cover {
            url(transformation: {document: {output: {format: webp}}})
        }
        }
    }  
`;

export const GET_PORTFOLIOS_BY_CATEGORY = gql`
    query GetPortfolios($category: PortfolioCategory, $first: Int) {
        portfolios(first: $first, where: {category: $category}) {
        slug
        title
        cover {
            url(transformation: {document: {output: {format: webp}}})
        }
        }
    }  
`;